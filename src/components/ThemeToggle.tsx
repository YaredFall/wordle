import React, { FC } from 'react';
import useDarkMode from "../Hooks/useDarkMode";

type ThemeToggleProps = {

} & React.HTMLAttributes<HTMLButtonElement>

const ThemeToggle: FC<ThemeToggleProps> = (props) => {

    const [toggleTheme] = useDarkMode();

    return (
        <button children={"☼"} onClick={toggleTheme} title={"Change theme"} {...props} />
    );
};

export default ThemeToggle;
