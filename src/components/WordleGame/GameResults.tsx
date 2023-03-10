import { FC } from 'react';
import { GameState } from "./gameTypes";


type GameResultsProps = {
    wordToGuess: string
    gameState: GameState
    onRetryClick?: () => void
}

const GameResults: FC<GameResultsProps> = ({ gameState, wordToGuess, onRetryClick }) => {

    const won = gameState === GameState.win;
    const lost = gameState === GameState.lose;
    
    
    return (
        <div className={"flex flex-col gap-4 items-center justify-center font-bold"} >
            <div className={"text-3xl text-zinc-900 text-center py-3 px-6 rounded-lg flex flex-col items-center justify-center w-full " +
                (won ? "bg-accent-primary" : "bg-accent-secondary")}
                children={won ? "Great guess!" : lost ? `Nope! It was "${wordToGuess.toUpperCase()}"` : "Game is paused"}
            />
            <button autoFocus className={"bg-transparent hover:bg-transparent hover:text-bg-secondary-light dark:hover:text-bg-secondary opacity-0 animate-fade-in-delayed"} onClick={onRetryClick} children={"Try again"} />
        </div>
    );
};

export default GameResults;
