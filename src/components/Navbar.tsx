import React, { FC } from 'react';
import ThemeToggle from "./ThemeToggle";

type NavbarProps = {

}

const Navbar: FC<NavbarProps> = ({}) => {

    return (
        <header className={"w-full flex flex-row items-center dark:bg-bg-primary bg-bg-primary-light p-2"}>
            <a className={"decoration-0 select-none cursor-pointer text-xl text-[inherit] hover:text-[inherit]"}
               href={"/"}
               children={"Game Radish"} />
            <nav>

            </nav>
            <ThemeToggle className={"ml-auto bg-bg-tertiary"} />
        </header>
    );
};

export default Navbar;
