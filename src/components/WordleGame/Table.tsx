import React, {FC} from 'react';
import Row from "./Row";
import {cluedWord} from "./WordleGame";


type TableProps = {
    rows: number
    cluedUsedWords?: cluedWord[]
    currentLetters?: string[]
}

const Table: FC<TableProps> = ({rows, cluedUsedWords= [], currentLetters= []}) => {

    return (
        <div className={"text-[2rem] font-semibold flex flex-col gap-2 w-full max-w-[65%] py-[4vh] flex-1 justify-center"}>
            {[...Array(rows)].map((e, i) => {
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
