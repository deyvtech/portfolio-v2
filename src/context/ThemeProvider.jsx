'use client';
import React from "react";
import { ThemeProviderContext } from "./ThemeContext.js";

export const ThemeProvider = ({ children, storageKey = "bytehive-theme" }) => {
    const [theme, setTheme] = React.useState("dark"); 

    React.useEffect(() => {
        const storedTheme = localStorage.getItem(storageKey);
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        
        const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
        setTheme(initialTheme);
    }, [storageKey]);

    React.useEffect(() => {
        const html = document.documentElement;
        html.classList.remove("light", "dark");
        html.classList.add(theme);
        html.setAttribute("data-theme", theme);
        localStorage.setItem(storageKey, theme);
    }, [theme, storageKey]);

    const value = {
        theme,
        setTheme,
    };

    return (
        <ThemeProviderContext value={value}>
            {children}
        </ThemeProviderContext>
    );
};