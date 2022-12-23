import React, { FC, useEffect, useRef } from 'react';
import { Clue } from "./gameTypes";
import { CSSTransition } from 'react-transition-group';


type CellProps = {
    letter?: string
    clue?: Clue
    animationDelay?: number;
}

const Cell: FC<CellProps> = ({ letter, clue, animationDelay=0 }) => {
    const cellRef = useRef<HTMLDivElement>(null)
    
    return (
        <CSSTransition
            in={clue !== undefined}
            nodeRef={cellRef}
            timeout={250 + animationDelay}
            classNames={{
                enter: "animate-vibrate",
                enterDone: "animate-vibrate"
            }}
        >
            <div ref={cellRef} className={"[--accent-color:theme(colors.yellow.400)] transition-colors duration-[250ms]" +
                " aspect-square border-[var(--accent-color)] border-2 flex uppercase rounded-lg" +
                " items-center justify-center w-[calc(2rem+3vmax)] sm:w-[3.25rem]" +
                ' data-[clue]:text-stone-900 data-[clue]:bg-[var(--accent-color)]' +
                ' data-[clue="0"]:[--accent-color:theme(colors.gray.600)] data-[clue="0"]:text-text-primary' +
                ' data-[clue="1"]:[--accent-color:theme(colors.gray.200)]' +
                ' data-[clue="2"]' +
                (!letter && !clue ? " text-transparent" : "")
            }
                children={letter}
                data-clue={clue}
                style={{
                    animationDelay: `${animationDelay}ms`,
                    transitionDelay: `${animationDelay}ms`
                }}
            />
        </CSSTransition>
    );
};

export default Cell;
