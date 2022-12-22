export enum Clue {
    absent,
    present,
    exact
}
export type cluedWord = {
    word: string
    clues: Clue[]
}

export enum GameState {
    playing,
    win,
    lose,
    paused
}
