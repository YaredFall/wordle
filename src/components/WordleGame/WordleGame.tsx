import React, {FC, useEffect, useMemo, useState} from 'react';
import Table from "./Table";

export enum Clue {
    wrong,
    contained,
    exact
}
export type cluedWord = {
    word: string
    clues: Clue[]
}

type WordleGameProps = {

}

const WordleGame: FC<WordleGameProps> = ({}) => {

    const [wordToGuess, setWordToGuess] = useState("Tests");
    const [currentLetters, setCurrentLetters] = useState<string[]>();
    const [usedWords, setUsedWords] = useState<string[]>([])

    const cluedUsedWords = useMemo(() => {
        return usedWords.map(w => ({word: w, clues: [...w].map((l, i) => {
            if (wordToGuess[i] === l)
                return Clue.exact
            else if (wordToGuess.includes(l))
                return Clue.contained
            else
                return Clue.wrong
        })
        }))
    }, [usedWords]);

    //Clear used words on wordToGuess change
    useEffect(() => {
        setUsedWords([]);
    }, [wordToGuess]);


    return (
        <div>
            <Table currentLetters={currentLetters} cluedUsedWords={cluedUsedWords} />
        </div>
    );
};

export default WordleGame;
