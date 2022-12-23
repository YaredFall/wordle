import React, { FC, useEffect, useRef } from 'react';
import { Clue } from "./gameTypes";
import { CSSTransition } from 'react-transition-group';
import CellHint from './CellHint';


type CellProps = {
    letter?: string
    clue?: Clue
    animationDelay?: number;
    hintDirection?: "up" | "down"
}

const Cell: FC<CellProps> = ({ letter, clue, animationDelay = 0 , hintDirection}) => {
    const cellRef = useRef<HTMLDivElement>(null)

    return (
        <>
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
                    " aspect-square border-[var(--accent-color)] border-2 flex uppercase rounded-lg hover:z-50" +
                    " items-center justify-center w-[calc(2rem+3vmax)] sm:w-[3.25rem]" +
                    (clue !== undefined ? ' text-stone-900 bg-[var(--accent-color)] cursor-help' : '') +
                    (clue === 0 ? ' [--accent-color:theme(colors.gray.600)] text-text-primary' :
                        clue === 1 ? ' [--accent-color:theme(colors.gray.200)]' : '') +
                    (!letter && !clue ? " text-transparent" : "")
                }
                    children={letter}
                    style={{
                        animationDelay: `${animationDelay}ms`,
                        transitionDelay: `${animationDelay}ms`
                    }}
                />
            </CSSTransition>
            {letter && clue !== undefined && <CellHint clue={clue} letter={letter} hintDirection={hintDirection} />}
        </>
    );
};

export default Cell;
