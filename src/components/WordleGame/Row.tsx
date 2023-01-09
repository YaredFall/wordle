import { FC } from 'react';
import Cell from "./Cell";
import {Clue} from "./gameTypes";

type RowProps = {
    length?: number
    letters?: string[]
    clues?: Clue[]
    hintDirection?: "up" | "down"
}

const Row: FC<RowProps> = ({length = 5, letters, clues, hintDirection: hintDirection}) => {

    return (
        <div className={"flex flex-row gap-[inherit] justify-center relative"}>
            {[...Array(length)].map((e, i) => (
                <Cell key={i} letter={letters && letters[i]} clue={clues && clues[i]} animationDelay={clues ? i * 125 : 0} 
                    hintDirection={hintDirection}/>
            ))}
        </div>
    );
};

export default Row;
