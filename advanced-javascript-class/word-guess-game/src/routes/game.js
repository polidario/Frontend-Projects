const express = require('express');
const WordModel = require('../models/word');
const GameModel = require("../models/game");

const Router = express.Router();

Router.post('/', async (request, response) => {
    const word = await WordModel.aggregate([{
        $sample: { size: 1 }
    }]);

    let game = new GameModel({
        word: word[0]._id,
        tries: [],
        user: request.session.user._id
    });

    request.session.word = word[0];

    try {
        await game.save();

        game = await GameModel.find({
            _id: game._id
        }).populate('user').populate('word')

        return response.status(200).json({
            "msg": game
        });
    } catch (error) {
        return response.status(500).json({
            "error": error.message
        });
    }
});

Router.get('/:id', async (request, response) => {
    const { id } = request.params;
    try {
        const game = await GameModel.findOne({ _id: id });

        return response.status(200).json({
            "msg": game
        });
    } catch (error) {
        return response.status(500).json({
            "error": error.message
        });
    }
})

Router.post('/verifyWord', (request, response) => {
    // The status of each letter in the word
    // 1 = letter is the same and in the correct position
    // 0 = letter is the same but in the wrong position
    // x = letter is not in the word
    let status = [];
    // get the value from the user
    const { word } = request.body;

    // get the word that needed to be compared with the user value
    const search = request.session.word;

    for (let i = 0; i < search.name.length; i++) {
        for (let j = 0; i < word.length; j++) {
            if(search.name[i] == word[j] && i == j) {
                status.push(1);
                break;
            } else if(search.name[i] == word[j] && i != j) {
                status.push(0);
                break;
            }

            if(search.name[i] != word[j] && j == search.name.length - 1) {
                status.push('x');
                break;
            }
        }
    }

    console.log(status);

    if (typeof word === 'undefined') {
        return response.status(500).json({
            "msg": "You have to send 'word' value"
        });
    }

    if(word.length < 1 && word.length > 6) {
        return response.status(500).json({
            "msg": "The word must be 6 characters, try again!"
        });
    } else if(word.length >= 1 && word.length < 6) {
        return response.status(500).json({
            "msg": "The word must be 6 characters, try again!"
        });
    }

    if (word == search.name) {
        return response.status(200).json({
            "result": "Congratulations ! You found the right word."
        });
    } else {
        return response.status(500).json({
            "result": "Sorry ! That was not the right word."
        });
    }
})

module.exports = Router;