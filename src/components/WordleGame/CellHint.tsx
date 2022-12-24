import { FC } from 'react';
import { Clue } from './gameTypes';

type CellHintProps = {
    clue: Clue
    letter: string
    hintDirection?: "up" | "down"
}

const CellHint: FC<CellHintProps> = ({ clue, letter, hintDirection = "down" }) => {

    return (
        <div className={"hint absolute text-xl sm:text-lg font-medium max-w-[23ch] rounded-lg lg:py-3 px-5 opacity-0 z-[60] h-[calc(2*(2rem+3vmax)-2rem)] sm:h-[5rem] transition-opacity duration-500" +
            (hintDirection === "down" ? " top-[calc(3.75rem+3vmax)] sm:top-[calc(1.5*3.25rem-0.25rem)] lg:top-0" :
                " top-[calc(-3.75rem-6vmax)] sm:top-[calc(-6.5rem)] lg:bottom-0 lg:top-auto") +
            " lg:left-[-2rem] lg:translate-x-[-100%] lg:h-auto pointer-events-none flex items-center" +
            (clue !== undefined ? ' bg-[var(--accent-color)]' : '') +
            (clue === 0 ? ' [--accent-color:theme(colors.accent-tertiary)]' :
                clue === 1 ? ' [--accent-color:theme(colors.accent-secondary)] text-text-primary-light' :
                    clue === 2 ? ' [--accent-color:theme(colors.accent-primary)] text-text-primary-light' : '')}
            children={
                clue === 0 ? `Letter ${letter?.toUpperCase()} not in the word` :
                    clue === 1 ? `Letter ${letter?.toUpperCase()} in the wrong spot, but in the word` :
                        clue === 2 ? `Letter ${letter?.toUpperCase()} is in the word and in correct spot` :
                            ""
            }
        />
    );
};

export default CellHint;
