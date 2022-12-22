import React, { FC } from 'react';
import {Clue} from "./gameTypes";


type CellProps = {
    letter?: string
    clue?: Clue
}

const Cell: FC<CellProps> = ({letter, clue}) => {

    return (
        <div className={"[--accent-color:theme(colors.yellow.400)]" +
            " aspect-square border-[var(--accent-color)] border-2 flex uppercase rounded-lg" +
            " items-center justify-center w-[clamp(3.25rem,1.5rem+5vh+5vw,2.5rem+2vh)]" +
            ' data-[clue]:text-stone-900 data-[clue]:bg-[var(--accent-color)]' +
            ' data-[clue="0"]:[--accent-color:theme(colors.gray.600)] data-[clue="0"]:text-text-primary' +
            ' data-[clue="1"]:[--accent-color:theme(colors.gray.200)]' +
            ' data-[clue="2"]'}
             children={letter}
             data-clue={clue}
        />
    );
};

export default Cell;
