import { useLayoutEffect, useState } from "react";


const useDarkMode = () => {

    
    /**
     * Toggles dark theme.
     * @param {boolean} to - Set theme to dark (true) / light (false).
     */
    const toggleTheme = (to?: boolean) => {
        console.log(to)
        if (to === undefined) {
            document.documentElement.classList.toggle("dark");
            setDarkThemeEnabled(prev => !prev)
        } else if (to) {
            document.documentElement.classList.add("dark");
            setDarkThemeEnabled(to);
        } else {
            document.documentElement.classList.remove("dark");
            setDarkThemeEnabled(to);
        }
        localStorage.setItem("darkmode", document.documentElement.classList.contains("dark").toString());
    }
    
    const storedDarkModeOption = localStorage.getItem("darkmode");
    const [darkThemeEnabled, setDarkThemeEnabled] = useState<boolean>(storedDarkModeOption === "true" ? true : false);

    useLayoutEffect(() => {
        console.log("!");
        let darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        /** Sets theme according to system preference, if there is no stored value */
        const trySetTheme = () => {
            if (storedDarkModeOption !== "true" && storedDarkModeOption !== "false") {
                toggleTheme(darkThemeMq.matches)
            }
        }
        
        if (storedDarkModeOption === "true") {
            toggleTheme(true);
        } else if (storedDarkModeOption === "false") {
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

    return [toggleTheme, darkThemeEnabled] as const;
}

export default useDarkMode;