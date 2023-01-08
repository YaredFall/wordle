import React, { FC, useEffect, useRef, useState } from 'react';
import { Clue } from "./gameTypes";


export const SUBMIT_CHAR = "✓";
export const DELETE_CHAR = "⌫";

const layout = [
    "qwertyuiop",
    "asdfghjkl",
    `${SUBMIT_CHAR}zxcvbnm${DELETE_CHAR}`
]

type VirtualKeyboardProps = {
    onKeyClick?: (letter: string) => (e?: React.MouseEvent) => void
    keyLetterClue?: (letter: string) => Clue | undefined
}

const VirtualKeyboard: FC<VirtualKeyboardProps> = ({ onKeyClick, keyLetterClue }) => {

    const [pressedBtns, setPressedBtns] = useState<string[]>([])

    useEffect(() => {
        const onKeyDownHandler = (e: KeyboardEvent) => {
            let letter: string | undefined;
            if (e.code.match(/Key[A-Z]/)) {
                letter = e.code.at(-1)?.toLocaleLowerCase();
                onKeyClick && letter && onKeyClick(letter)();
            }
            else if (e.code === "Backspace") {
                letter = DELETE_CHAR;
                onKeyClick && onKeyClick(DELETE_CHAR)();
            }
            else if (e.code === "Enter") {
                letter = SUBMIT_CHAR;
                onKeyClick && onKeyClick(SUBMIT_CHAR)();
            }
            else {
                return
            }
            (document.activeElement as HTMLElement).blur();
            letter && onKeyClick && onKeyClick(letter)();
            letter && setPressedBtns(prev => {
                const l = letter as string;
                return !prev.includes(l) ? [...prev, l] : prev;
            });
        }
        const onKeyUpHandler = (e: KeyboardEvent) => {
            let letter: string | undefined;
            if (e.code.match(/Key[A-Z]/)) {
                letter = e.code.at(-1)?.toLocaleLowerCase();
            }
            else if (e.code === "Backspace") {
                letter = DELETE_CHAR;
            }
            else if (e.code === "Enter") {
                letter = SUBMIT_CHAR;
            }
            else {
                return
            }
            letter && setPressedBtns(prev => prev.filter(l => l !== letter));
        }
        document.addEventListener("keydown", onKeyDownHandler);
        document.addEventListener("keyup", onKeyUpHandler);

        return () => {
            document.removeEventListener("keydown", onKeyDownHandler);
            document.removeEventListener("keydown", onKeyUpHandler);
        };
    }, [onKeyClick])


    return (
        <div className={"flex flex-col gap-1 items-center justify-center"}>
            {layout.map((row, i) => (
                <div key={i} className={"flex flex-row gap-[inherit]"}
                    children={[...row].map((letter, j) => (
                        <button key={j}
                            children={letter.replace("✓", "Enter")}
                            onClick={onKeyClick && onKeyClick(letter)}
                            className={"uppercase border border-[#00000031] bg-[var(--accent-color,var(--btn-bg-color))] transition-colors" +
                                (pressedBtns.includes(letter) ? " active" : "") +
                                (keyLetterClue === undefined ? "" :
                                    ((keyLetterClue(letter) !== undefined ? " animate-vibrate-once" : "") +
                                        (keyLetterClue(letter) === 0 ? ' [--accent-color:theme(colors.accent-tertiary)] text-text-primary' :
                                            keyLetterClue(letter) === 1 ? ' [--accent-color:theme(colors.accent-secondary)] text-text-primary-light' :
                                                keyLetterClue(letter) === 2 ? ' [--accent-color:theme(colors.accent-primary)] text-text-primary-light' : '')))
                            }
                        />
                    ))}
                />
            ))}
        </div>
    );
};

export default VirtualKeyboard;
