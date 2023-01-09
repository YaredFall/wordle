import { FC } from 'react';
import ThemeToggle from "./ThemeToggle";

type NavbarProps = {

}

const Navbar: FC<NavbarProps> = ({ }) => {

    return (
        <header className={"text-2xl sm:text-xl w-full flex flex-row items-center bg-[var(--navbar-color)] border-b border-[#00000031] transition-colors overflow-hidden"}>
            <a className={"decoration-0 select-none cursor-pointer text-[var(--text-color)] px-3 py-5 sm:py-3 hover:text-[var(--text-color)]"}
                href={"/"}
                children={"Radish Wordle"} />
            <nav>
            
            </nav>
            <ThemeToggle className={"group ml-auto text-[1.2em] px-3 py-5 sm:py-3 !bg-transparent border-none align-middle"} />
        </header>
    );
};

export default Navbar;
