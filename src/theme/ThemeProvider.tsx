import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";

export type ThemeOption = "light" | "dark" | "system";
const THEME_KEY = "@app_color_scheme";

type ThemeContextType = {
  preference: ThemeOption;
  applied: "light" | "dark";
  setPreference: (themeOption: ThemeOption) => Promise<void>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ childern }: { childern: React.ReactNode }) {
  const { getColorScheme, setColorScheme } = useColorScheme();
  const [getpreference, setpreference] = useState<ThemeOption>("system");
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    () => {
      try {
        const SavedTheme = await AsyncStorage.getItem(THEME_KEY);
        if (SavedTheme === "light" || SavedTheme === "dark") {
          setpreference(SavedTheme);
          setColorScheme(SavedTheme);
        } else {
          setpreference("system");
          setColorScheme("system");
        }
      } catch (error) {
        console.log("Error loading theme preference:", error);
      } finally {
        setReady(true);
      }
    };
  }, [setColorScheme]);

  const preference = async (themeOption: ThemeOption) => {
    try {
      if (themeOption === "system") {
        await AsyncStorage.removeItem(THEME_KEY);
        setpreference("system");
        setColorScheme("system");
      } else {
        await AsyncStorage.setItem(THEME_KEY, themeOption);
        setpreference(themeOption);
        setColorScheme(themeOption);
      }
    } catch (error) {
      console.log("Error saving theme preference:", error);
    }
  };
}
