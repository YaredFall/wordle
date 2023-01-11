import { FC } from 'react';
import Cell from './Cell';
import { Clue } from './gameTypes';

type HelpModalProps = {

}

const HelpModal: FC<HelpModalProps> = ({ }) => {

    return (
        <article className={"w-[70vw] h-[70vh] lg:w-[35vw] flex flex-col gap-3 text-xl"}>
            <h2 className="text-3xl font-bold">How to play</h2>
            <ul className="pl-2">
                <li>Guess the word in 6 tries</li>
                <li>Each guess must be a walid 5-letter word</li>
                <li>The color of the cells will change to show hints of how close your guess was</li>
            </ul>
            <h4 className="text-2xl font-bold">For example</h4>
            <div className={"grid grid-cols-[min-content_min-content_auto] grid-rows-3 gap-2 items-center"}>
                <Cell letter="f" clue={Clue.exact} />
                <p>-</p>
                <p>Letter F is in the word and in the correct spot</p>
                <Cell letter="a" clue={Clue.present} />
                <p>-</p>
                <p>Letter A is in the word but in the wrong spot</p>
                <Cell letter="q" clue={Clue.absent} />
                <p>-</p>
                <p>Letter Q is not in the word</p>
            </div>
        </article>
    );
};

export default HelpModal;
