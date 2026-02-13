'use client';
import React from "react";
import { ThemeProviderContext } from "./ThemeContext.js";
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;


export const ThemeProvider = ({ children, storageKey = "deyv-theme" }) => {
    const [theme, setTheme] = React.useState(() => {
        return localStorage.getItem('deyv-theme') || (prefersDark ? "dark" : "light")
    }); 
    React.useEffect(() => {
        const html = document.documentElement;
        html.setAttribute("data-theme", theme);
        setTheme(theme);
    }, [theme]);

    
    const setHandleTheme = (theme) => {
        localStorage.setItem(storageKey, theme);
        setTheme(theme)
    }

    const value = {
        theme,
        setTheme: setHandleTheme,
    };

    return (
        <ThemeProviderContext value={value}>
            {children}
        </ThemeProviderContext>
    );
};