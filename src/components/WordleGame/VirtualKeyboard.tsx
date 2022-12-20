import React, { FC } from 'react';
import {Clue} from "./WordleGame";

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

const VirtualKeyboard: FC<VirtualKeyboardProps> = ({onKeyClick, keyLetterClue}) => {

    return (
        <div className={"flex flex-col flex-1 items-center justify-center gap-1"}>
            {layout.map((row, i) => (
                <div key={i} className={"flex flex-row gap-[inherit]"}
                     children={[...row].map((letter, j) => (
                         <button key={j} className={"uppercase"}
                                 children={letter.replace("✓", "Enter")}
                                 onClick={onKeyClick && onKeyClick(letter)}
                                 data-key-clue={keyLetterClue && keyLetterClue(letter)}
                         />
                     ))}
                />
            ))}
        </div>
    );
};

export default VirtualKeyboard;
