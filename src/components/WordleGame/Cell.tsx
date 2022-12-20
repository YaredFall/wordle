import React, { FC } from 'react';
import {Clue} from "./WordleGame";



type CellProps = {
    letter?: string
    clue?: Clue
}



const Cell: FC<CellProps> = ({letter, clue}) => {

    return (
        <div className={"aspect-square border-[var(--text-color)] border-2 flex uppercase rounded" +
            " items-center justify-center flex-grow-[1] flex-shrink-[0] w-full min-w-[3.25rem] max-w-[20%]" +
            ' data-[clue="1"]:bg-yellow-500' +
            ' data-[clue="2"]:bg-green-600'}
             children={letter}
             data-clue={clue}
        />
    );
};

export default Cell;
