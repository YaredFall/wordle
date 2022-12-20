import React, { FC } from 'react';
import {Clue} from "./WordleGame";



type CellProps = {
    letter?: string
    clue?: Clue
}



const Cell: FC<CellProps> = ({letter, clue}) => {

    return (
        <div className={"[--accent-color:theme(colors.yellow.400)]" +
            " aspect-square border-[var(--accent-color)] border-2 flex uppercase rounded" +
            " items-center justify-center flex-grow-[1] flex-shrink-[0] w-full min-w-[3.25rem] max-w-[20%]" +
            ' data-[clue]:text-stone-900 data-[clue]:bg-[var(--accent-color)]' +
            ' data-[clue="0"]:[--accent-color:theme(colors.gray.600)] data-[clue="0"]:text-gray-50' +
            ' data-[clue="1"]:[--accent-color:theme(colors.gray.200)]' +
            ' data-[clue="2"]'}
             children={letter}
             data-clue={clue}
        />
    );
};

export default Cell;
