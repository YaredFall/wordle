import React, { FC, useRef } from 'react';
import { BsSunFill } from "react-icons/bs";
import { HiMoon } from "react-icons/hi";
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import useDarkMode from "../Hooks/useDarkMode";


type ThemeToggleProps = {

} & React.HTMLAttributes<HTMLButtonElement>

const ThemeToggle: FC<ThemeToggleProps> = (props) => {

    const [toggleTheme, darkThemeEnabled] = useDarkMode();
    const iconNodeRef = useRef<HTMLDivElement>(null)

    return (
        <button onClick={() => toggleTheme()} title={darkThemeEnabled ? "Swithc to dark theme" : "Switch to light theme"} {...props}>
            <div className="w-[1em] aspect-square relative text-bg-secondary-light dark:text-bg-secondary group-hover:text-[var(--text-color)] transition-colors">
                <SwitchTransition>
                    <CSSTransition
                        key={darkThemeEnabled ? "Goodbye, world!" : "Hello, world!"}
                        nodeRef={iconNodeRef}
                        timeout={300}
                        classNames={{
                            enter: "animate-rotate-in",
                            exit: "animate-rotate-out"
                        }}
                    >
                        <div ref={iconNodeRef} className="absolute origin-[-2em_center]">
                            {darkThemeEnabled ? <BsSunFill /> : <HiMoon />}
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </button >
    );
};

export default ThemeToggle;
