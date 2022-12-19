import React, {FC} from 'react';
import Row from "./Row";
import {cluedWord} from "./WordleGame";

const tries = 6;

type TableProps = {
    cluedUsedWords?: cluedWord[]
    currentLetters?: string[]
}

const Table: FC<TableProps> = ({cluedUsedWords= [], currentLetters= []}) => {

    return (
        <div className={"flex flex-col gap-2"}>
            {[...Array(tries)].map((e, i) => {
                if (i < cluedUsedWords?.length)
                    return <Row key={i} letters={[...cluedUsedWords[i].word]} clues={[...cluedUsedWords[i].clues]}/>
                else if (i === cluedUsedWords?.length)
                    return <Row key={i} letters={currentLetters}/>
                else
                    return <Row key={i} />
            })}
        </div>
    );
};

export default Table;
