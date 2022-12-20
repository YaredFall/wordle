import React, {FC, useEffect, useMemo, useState} from 'react';
import Table from "./Table";
import VirtualKeyboard, {DELETE_CHAR, SUBMIT_CHAR} from "./VirtualKeyboard";
import words from "../../assets/wordList.json"


export enum Clue {
    absent,
    present,
    exact
}
export type cluedWord = {
    word: string
    clues: Clue[]
}

enum GameState {
    playing,
    win,
    lose,
    paused
}

type WordleGameProps = {
    wordLength?: number
    maxTries?: number
}

const WordleGame: FC<WordleGameProps> = ({wordLength = 5, maxTries = 6}) => {

    const filteredWords = useMemo(() => {
        return words.filter(w => w.length === wordLength)
    }, [wordLength])

    const [gameState, setGameState] = useState(GameState.playing);
    const [wordToGuess, setWordToGuess] = useState(filteredWords[~~(Math.random() * filteredWords.length)]);
    const [currentLetters, setCurrentLetters] = useState<string[]>([]);
    const [usedWords, setUsedWords] = useState<string[]>([])

    const cluedUsedWords = useMemo(() => {
        return usedWords.map(w => ({word: w, clues: [...w].map((l, i) => {
            if (wordToGuess[i] === l)
                return Clue.exact
            else if (wordToGuess.includes(l))
                return Clue.present
            else
                return Clue.absent
        })
        }))
    }, [usedWords]);

    const onKeyPress = (letter: string) => (e: React.MouseEvent) => {
        if (gameState !== GameState.playing) return

        if (letter === SUBMIT_CHAR) {
            if (currentLetters.length === wordLength) {
                const currentWord = currentLetters.join("");
                if (filteredWords.includes(currentWord)) {
                    setUsedWords([...usedWords, currentWord])
                    setCurrentLetters([])
                }
                else {
                    //TODO: proper messaging
                    alert("Word not in list!")
                }

            } else {
                //TODO: proper messaging
                alert(`Word length must be ${wordLength}!`)
            }
        } else if (letter === DELETE_CHAR) {
            if (currentLetters.length === 0) return
                setCurrentLetters(currentLetters.slice(0, -1))
        } else {
            if (currentLetters.length < wordLength)
                setCurrentLetters([...currentLetters, letter])
        }
    }

    //TODO: better algo
    const keyLetterClue = useMemo(() => (letter: string) => {
        const allLetters = usedWords.join("");
        const allClues = cluedUsedWords.map(e => e.clues).flat()

        const ids = [...allLetters].map((l, i) => letter === l ? i : null).filter(e => e !== null)
        if (ids.length > 0)
            return Math.max(...allClues.filter((c, i) => ids.includes(i)))

        return undefined
    }, [cluedUsedWords]);

    //Clear used words on wordToGuess change
    // useEffect(() => {
    //     setUsedWords([]);
    // }, [wordToGuess]);


    useEffect(() => {
        if (usedWords.includes(wordToGuess)) {
            setGameState(GameState.win)

        } else if (usedWords.length === maxTries) {
            setGameState(GameState.lose)
        }
    }, [usedWords]);

    useEffect(() => {
        //TODO: proper messaging
        switch (gameState) {
            case GameState.win:
                alert("Congrats!")
                break
            case GameState.lose:
                alert("Close guess! Better luck next time!")
        }
    }, [gameState]);



    return (
        <div className={"flex flex-col items-center h-full"}>
            <Table rows={maxTries} currentLetters={currentLetters} cluedUsedWords={cluedUsedWords} />
            <VirtualKeyboard onKeyClick={onKeyPress} keyLetterClue={keyLetterClue} />
        </div>
    );
};

export default WordleGame;
