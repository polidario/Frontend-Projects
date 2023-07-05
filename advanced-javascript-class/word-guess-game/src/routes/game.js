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
    // get the value from the user
    const { word } = request.body;

    // get the word that needed to be compared with the user value
    //const search = request.session.game.word.name;
    const search = "test";
    console.log(request);

    if (typeof word === 'undefined') {
        return response.status(500).json({
            "msg": "You have to send 'word' value"
        });
    }

    if (word === search) {
        return response.status(200).json({
            "result": "Congratulations ! You found the right word."
        });
    }

    return response.status(500).json({
        "result": "Sorry ! That was not the right word."
    });
})

module.exports = Router;