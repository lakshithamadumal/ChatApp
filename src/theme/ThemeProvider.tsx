import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "nativewind";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

export type ThemeOption = "light" | "dark" | "system";
const THEME_KEY = "@app_color_scheme";

type ThemeContextType = {
  preference: ThemeOption;
  applied: "light" | "dark";
  setPreference: (themeOption: ThemeOption) => Promise<void>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [getpreferenceState, setpreferenceState] =
    useState<ThemeOption>("system");
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    async () => {
      try {
        const SavedTheme = await AsyncStorage.getItem(THEME_KEY);
        if (SavedTheme === "light" || SavedTheme === "dark") {
          setpreferenceState(SavedTheme);
          setColorScheme(SavedTheme);
        } else {
          setpreferenceState("system");
          setColorScheme("system");
        }
      } catch (error) {
        console.log("Error loading theme preference:", error);
      } finally {
        setReady(true);
      }
    };
  }, [setColorScheme]);

  const setPreference = async (themeOption: ThemeOption) => {
    try {
      if (themeOption === "system") {
        await AsyncStorage.removeItem(THEME_KEY);
        setpreferenceState("system");
        setColorScheme("system");
      } else {
        await AsyncStorage.setItem(THEME_KEY, themeOption);
        setpreferenceState(themeOption);
        setColorScheme(themeOption);
      }
    } catch (error) {
      console.log("Error saving theme preference:", error);
    }
  };

  if (!isReady) {
    return <ActivityIndicator style={{ flex: 1 }} />;
  }

  return (
    <ThemeContext.Provider
      value={{
        preference: getpreferenceState,
        applied: colorScheme ?? "light",
        setPreference,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
