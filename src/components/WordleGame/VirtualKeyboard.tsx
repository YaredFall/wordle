import React, { FC } from 'react';
import { Clue } from "./gameTypes";


export const SUBMIT_CHAR = "✓";
export const DELETE_CHAR = "⌫";

const layout = [
    "qwertyuiop",
    "asdfghjkl",
    `${SUBMIT_CHAR}zxcvbnm${DELETE_CHAR}`
]

type VirtualKeyboardProps = {
    onKeyClick?: (letter: string) => (e: React.MouseEvent) => void
    keyLetterClue?: (letter: string) => Clue | undefined
}

const VirtualKeyboard: FC<VirtualKeyboardProps> = ({ onKeyClick, keyLetterClue }) => {

    return (
        <div className={"flex flex-col gap-1 items-center justify-center"}>
            {layout.map((row, i) => (
                <div key={i} className={"flex flex-row gap-[inherit]"}
                    children={[...row].map((letter, j) => (
                        <button key={j}
                            children={letter.replace("✓", "Enter")}
                            onClick={onKeyClick && onKeyClick(letter)}
                            className={"uppercase border border-[#00000031] bg-[var(--accent-color,var(--btn-bg-color))] transition-colors" +
                                (keyLetterClue === undefined ? "" :
                                    ((keyLetterClue(letter) !== undefined ? " animate-vibrate" : "") +
                                        (keyLetterClue(letter) === 0 ? ' [--accent-color:theme(colors.accent-tertiary)] text-white' :
                                            keyLetterClue(letter) === 1 ? ' [--accent-color:theme(colors.accent-secondary)] text-stone-900' :
                                                keyLetterClue(letter) === 2 ? ' [--accent-color:theme(colors.accent-primary)] text-stone-900' : '')))
                            }
                        />
                    ))}
                />
            ))}
        </div>
    );
};

export default VirtualKeyboard;
