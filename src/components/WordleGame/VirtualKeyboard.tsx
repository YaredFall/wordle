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
        <div className={"flex flex-col flex-1 items-center pt-[8%] pb-[42%] justify-center gap-1"}>
            {layout.map((row, i) => (
                <div key={i} className={"flex flex-row gap-[inherit]"}
                     children={[...row].map((letter, j) => (
                         <button key={j}
                                 children={letter.replace("✓", "Enter")}
                                 onClick={onKeyClick && onKeyClick(letter)}
                                 data-clue={keyLetterClue && keyLetterClue(letter)}
                                 // disabled={keyLetterClue && keyLetterClue(letter) === 0 ? true : undefined}
                                 className={"uppercase [--accent-color:theme(colors.yellow.400)]" +
                                     ' data-[clue]:text-stone-900 data-[clue]:bg-[var(--accent-color)]' +
                                     ' data-[clue="0"]:[--accent-color:theme(colors.gray.600)] data-[clue="0"]:text-text-primary' +
                                     ' data-[clue="1"]:[--accent-color:theme(colors.gray.200)]' +
                                     ' data-[clue="2"]'}
                         />
                     ))}
                />
            ))}
        </div>
    );
};

export default VirtualKeyboard;
