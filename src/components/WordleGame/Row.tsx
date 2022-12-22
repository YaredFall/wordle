import React, {FC} from 'react';
import Cell from "./Cell";
import {Clue} from "./gameTypes";

type RowProps = {
    length?: number
    letters?: string[]
    clues?: Clue[]
}

const Row: FC<RowProps> = ({length = 5, letters, clues}) => {

    return (
        <div className={"flex flex-row gap-[inherit] justify-center"}>
            {[...Array(length)].map((e, i) => (
                <Cell key={i} letter={letters && letters[i]} clue={clues && clues[i]} />
            ))}
        </div>
    );
};

export default Row;
