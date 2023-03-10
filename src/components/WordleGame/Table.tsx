import { FC } from 'react';
import Row from "./Row";
import {cluedWord} from "./gameTypes";


type TableProps = {
    rows: number
    cluedUsedWords?: cluedWord[]
    currentLetters?: string[]
}

const Table: FC<TableProps> = ({rows, cluedUsedWords= [], currentLetters= []}) => {

    return (
        <div className={"flex flex-col gap-2 justify-center"}>
            {[...Array(rows)].map((e, i) => {
                if (i < cluedUsedWords?.length)
                    return <Row key={i} letters={[...cluedUsedWords[i].word]} clues={[...cluedUsedWords[i].clues]} 
                                hintDirection={rows - i > 2 ? "down" : "up"}/>
                else if (i === cluedUsedWords?.length)
                    return <Row key={i} letters={currentLetters}/>
                else
                    return <Row key={i} />
            })}
        </div>
    );
};

export default Table;
