import React, {FC} from 'react';
import Row from "./Row";
import {Clue} from "./Cell";

const tries = 6;

type TableProps = {
    usedWords?: string[],
    currentLetters?: string[]
}

const Table: FC<TableProps> = ({usedWords= ["aboba"], currentLetters= ["a", "b"]}) => {

    return (
        <div className={"flex flex-col gap-2"}>
        </div>
    );
};

export default Table;
