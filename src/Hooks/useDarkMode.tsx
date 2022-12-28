import { useEffect, useState } from "react";

/**
 * Toggles dark theme.
 * @param {boolean} to - Set enabled to true/false.
 */
const toggleTheme = (to?: boolean) => {
    console.log(to);
    if (to === undefined) {
        document.documentElement.classList.toggle("dark");
    } else if (to) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkmode", document.documentElement.classList.contains("dark").toString());
}

const useDarkMode = () => {

    useEffect(() => {
        let darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        /** Sets theme according to system preference, if there is no stored value */
        const trySetTheme = () => {
            if (storedDarkModeOption !== "true" && storedDarkModeOption !== "false") {
                toggleTheme(darkThemeMq.matches)
            }
        }
        
        const storedDarkModeOption = localStorage.getItem("darkmode");
        if (storedDarkModeOption === "true")
            toggleTheme(true);
        else if (storedDarkModeOption === "false") {
            toggleTheme(false);
        } else {
            trySetTheme();
        }

        //in case of manual deletion
        const onLocalStorageExtrernalChange = (e: StorageEvent) => {
            if (e.key === "darkmode") {
                toggleTheme(darkThemeMq.matches);
            }
        }

        darkThemeMq.addEventListener("change", trySetTheme);
        window.addEventListener("storage", onLocalStorageExtrernalChange);

        return () => {
            darkThemeMq.addEventListener("change", trySetTheme);
            window.removeEventListener("storage", onLocalStorageExtrernalChange);
        };
    }, []);

    return [toggleTheme] as const;
}

export default useDarkMode;