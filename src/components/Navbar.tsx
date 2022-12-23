import React, { FC } from 'react';
import ThemeToggle from "./ThemeToggle";

type NavbarProps = {

}

const Navbar: FC<NavbarProps> = ({ }) => {

    return (
        <header className={"text-3xl sm:text-xl w-full flex flex-row items-center bg-[var(--navbar-color)] p-2 border-b border-zinc-300 dark:border-transparent"}>
            <a className={"decoration-0 select-none cursor-pointer text-xl text-[inherit] hover:text-[inherit]"}
                href={"/"}
                children={"Game Radish"} />
            <nav>
            
            </nav>
            <ThemeToggle className={"ml-auto bg-[var(--bg-color)] dark:border-transparent border border-zinc-300 align-middle"} />
        </header>
    );
};

export default Navbar;
