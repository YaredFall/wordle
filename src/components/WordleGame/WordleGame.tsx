import React, {FC, useEffect, useMemo, useRef, useState} from 'react';
import Table from "./Table";
import VirtualKeyboard, {DELETE_CHAR, SUBMIT_CHAR} from "./VirtualKeyboard";
import words from "../../assets/wordList.json"
import GameResults from "./GameResults";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {Clue, GameState} from "./gameTypes";
import ControlBar from './ControlBar';


const getWord = (wordList: string[]) => {
    return wordList[~~(Math.random() * wordList.length)]
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
    const [wordToGuess, setWordToGuess] = useState(getWord(filteredWords));
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

    //TODO: better algo
    const keyLetterClue = useMemo(() => (letter: string) => {
        const allLetters = usedWords.join("");
        const allClues = cluedUsedWords.map(e => e.clues).flat()

        const ids = [...allLetters].map((l, i) => letter === l ? i : null).filter(e => e !== null)
        if (ids.length > 0)
            return Math.max(...allClues.filter((c, i) => ids.includes(i)))

        return undefined
    }, [cluedUsedWords]);


    const onVKbKeyPress = (letter: string) => () => {
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

    //Clear used words on wordToGuess change
    useEffect(() => {
        setUsedWords([]);
    }, [wordToGuess]);

    useEffect(() => {
        if (usedWords.includes(wordToGuess)) {
            setGameState(GameState.win)
            setShowKb(false);
        } else if (usedWords.length === maxTries) {
            setGameState(GameState.lose)
            setShowKb(false);
        }
    }, [usedWords]);

    const onRetryBtnClick = () => {
        setShowKb(true); //starts the animation
    }

    const [showKb, setShowKb] = useState(true); //controls kb/results animation
    const kbAndResultsContainerRef = useRef<HTMLDivElement>(null);

    return (
        <div className={"flex flex-col items-center h-full"}>
            <div className={"flex-1 flex flex-col justify-center pb-[max(2rem,4vh)]"}>
                <ControlBar />
                <Table rows={maxTries} currentLetters={currentLetters} cluedUsedWords={cluedUsedWords} />
            </div>
            <div className={"flex flex-col flex-1 flex-grow-[2]"}>
                <SwitchTransition>
                    <CSSTransition
                        key={showKb.toString()}
                        nodeRef={kbAndResultsContainerRef}
                        timeout={1000}
                        classNames={{
                            enter: "[scale:0]",
                            enterActive: "animate-grow-in",
                            exitActive: "animate-shrink-down",
                        }}
                        onEntering={() => {
                            //restart the game
                            if (showKb && gameState !== GameState.playing) {
                                setWordToGuess(getWord(filteredWords));
                                setGameState(GameState.playing);
                            }
                        }}
                    >
                        <div className={"flex flex-1 flex-grow-[2]"} ref={kbAndResultsContainerRef}>
                            {showKb ? <VirtualKeyboard onKeyClick={onVKbKeyPress} keyLetterClue={keyLetterClue}/>
                                :
                                <GameResults wordToGuess={wordToGuess} gameState={gameState} onRetryClick={onRetryBtnClick}/>}
                        </div>
                    </CSSTransition>
                </SwitchTransition>
                <div className={"flex-1"} />
            </div>

        </div>
    );
};

export default WordleGame;
