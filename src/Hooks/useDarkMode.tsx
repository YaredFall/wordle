const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkmode", document.documentElement.classList.contains("dark").toString());
}

const useDarkMode = () => {
    const storedDarkModeOption = localStorage.getItem("darkmode");
    if (storedDarkModeOption === "true")
        document.documentElement.classList.add("dark")
    else if (storedDarkModeOption === "false") {
        document.documentElement.classList.remove("dark")
    }

    return [toggleTheme] as const;
}

export default useDarkMode;