import React, { FC } from 'react';

export enum Clue {
    wrong,
    contained,
    exact
}

type CellProps = {
    letter?: string
    clue?: Clue
}



const Cell: FC<CellProps> = ({letter, clue}) => {

    return (
        <div className={"text-[2rem] font-semibold aspect-square border-[var(--text-color)] border-2 flex items-center justify-center flex-1 min-w-[3.25rem] uppercase rounded-sm" +
            ' data-[clue="1"]:bg-yellow-500' +
            ' data-[clue="2"]:bg-green-600'}
             children={letter ?? ""}
             data-clue={clue ?? ""}
        />
    );
};

export default Cell;
