import { createContext } from "react";

export type ThemeOption = 'light' | 'dark' | 'system';
const THEME_KEY = '@app_color_scheme';

type ThemeContextType = {
    preference: ThemeOption;
    applied: 'light' | 'dark';
    setPreference: (themeOption: ThemeOption) => Promise<void>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);