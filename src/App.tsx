import React, { FC } from 'react';
import Navbar from "./components/Navbar";
import WordleGame from "./components/WordleGame/WordleGame";

const App: FC = ({}) => {

    return (
        <>
            <Navbar />
            <main className={"flex h-full flex-col items-center p-2 mt-4"} children={<WordleGame />}/>
        </>
    );
};

export default App;
