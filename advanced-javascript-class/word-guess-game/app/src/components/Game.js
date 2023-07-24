import React, { useEffect } from "react";
import GridGuesses from "./Guess";

import { LOGIN_API } from "../utils/api";

export default function Game() {
    const [word, setWord] = React.useState("");
    const [guess, setGuess] = React.useState("");
    const [guesses, setGuesses] = React.useState([]);
    const [tryCount, setTryCount] = React.useState(5);
    const [error, setError] = React.useState("");
    const [win, setWin] = React.useState(false);
    const [lost, setLost] = React.useState(false);
    const [isLogged, setIsLogged] = React.useState(false);

    const handleGuess = async () => {
        if(!isLogged) {
            setError("You must be logged in to play!");
            return;
        }

        if(tryCount <= 0) {
            setError("You have no more tries left!");
            return;
        }

        const response = fetch("http://localhost:9001/game/verifyWord", {
            method: "POST",
            credentials: "include",
            headers: {
                "Accept": 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "word": guess
            }),
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setTryCount(tryCount - 1);
            console.log(data);
        });
    }

    const handleNewWord = async () => {
        if(!isLogged) {
            setError("You must be logged in to play!");
            return;
        }

        const response = await fetch("http://localhost:9001/game", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({}),
        });

        const data = await response.json();
        setWord(data.msg[0].word.name);
        console.log(data.msg[0].word.name);
    };

    const handleLogin = async () => {
        fetch("http://localhost:9001/auth/login", {
            method: "POST",
            credentials: "include",
            headers: {
                "Accept": 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": "user@user.com",
                "password": "user"
            }),
        }).then((response) => {
            if (response.status === 200) {
                setIsLogged(true);
            }
        });
    };


    return (
        <section className="relative py-8 space-y-8">
            <article className="text-center">
                <h2 className="text-3xl font-bold text-white">Guess the word!</h2>
                <p className="mt-4 text-gray-400">
                    Guess the word by entering letters. You have {tryCount} tries to guess the word.
                </p>
                <p className="mt-4 text-gray-400">
                    Your word has {word.length} letters.
                </p>
            </article>

            <div className="space-y-1 overflow-auto">
                <GridGuesses guesses={guess} />
            </div>

            <div className="flex justify-center gap-4">
                <button
                    className="p-3 text-sm text-white bg-gray-800 rounded-lg hover:text-gray-300"
                    onClick={() => {
                        handleNewWord();
                    }}
                >
                New Word
                </button>

                {!isLogged && (
                    <button
                        className="p-3 text-sm text-white bg-gray-800 rounded-lg hover:text-gray-300"
                        onClick={() => {
                            handleLogin();
                        }}
                    >
                    Login
                    </button>
                )}
            </div>

            <div className="fixed inset-x-0 bottom-0 py-8">
                <div className="max-w-xl px-4 mx-auto">
                {error && <p className="text-center text-red-500">{error}</p>}

                <form
                    onSubmit={(e) => {
                        e.preventDefault();

                        handleGuess();
                    }}
                    className="pt-8 mt-8 border-t border-gray-800"
                >
                    <fieldset
                        className="flex gap-4 disabled:opacity-50 disabled:pointer-events-none"
                        disabled={win || lost}
                    >
                    <div className="relative flex-1">
                        <input
                            className="w-full py-3 pl-3 pr-12 text-sm bg-white border border-gray-700 rounded-lg"
                            value={guess}
                            onChange={(e) => setGuess(e.target.value.toUpperCase())}
                            placeholder="Enter guess"
                            min={word.length}
                            max={word.length}
                        />

                        <span className="absolute text-xs -translate-y-1/2 right-3 top-1/2">
                            {guess.length}/{word.length}
                        </span>
                    </div>

                    <button
                        className="p-3 text-sm text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
                        type="submit"
                    >
                        Submit Guess
                    </button>
                    </fieldset>
                </form>
                </div>
            </div>
        </section>
    )
}