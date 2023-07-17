import React from "react";

function GridGuesses({ guesses }) {
    let splitGuesses = [];
    if (!guesses) {
        return null;
    } else {
        splitGuesses = guesses.split("");
    }

    return (
        <div className="space-y-1">
            <ul className="flex gap-1 sm:justify-center w-fit mx-auto">
                {splitGuesses.map((value, index) => (
                    <li
                    key={index}
                    className={`
                        w-10 h-10 leading-10 shrink-0 text-center text-sm font-medium bg-gray-700 text-white rounded-sm
                    `}
                    >
                    {value}
                    </li>
                    
                ))}
            </ul>
        </div>
    )
}

export default GridGuesses;