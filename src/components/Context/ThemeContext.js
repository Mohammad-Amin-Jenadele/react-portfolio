import { createContext,useContext,useState } from "react";

const ThemeContext = createContext(undefined)

export function ThemeProvider({children}){
    const [darkMode,setDarkMode] = useState(false)

    function toggleDarkMode(){
        setDarkMode(previousDarkModeState => !previousDarkModeState)
    }
    return(
        <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    const themeContext = useContext(ThemeContext)

    if (themeContext===undefined){
        throw new Error('useTheme must be used inside ThemeProvider')
    }
    return themeContext
}