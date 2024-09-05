
import useTWVariableColor, { TwConfig } from "@/lib/hooks/useTWVariableColor";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { updateStyles } from "./components/dynamicStyles";

type ThemeContextType = {
  theme: ThemeType;
  themeList: ThemeType[];
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  addTheme: (theme: ThemeType) => void;
  removeTheme: (themeName: string) => void;
  toggleTheme: (newTheme: ThemeType) => void;
  toggleDarkMode: (mode: string) => void;
  changeTheme: (theme: Partial<ThemeType>) => void;
};

type ThemeType = {
  name: string;
  mode: string;
  colorVars: Record<string, string>;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: ThemeType;
  themeLoader?: React.ReactNode;
  config: TwConfig & { variables: Record<string, string> };
};


export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme,
  themeLoader,
  config,
}) => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<ThemeType>(() => ({
    name: "default",
    mode: "light",
    colorVars: config.variables,
  }));
  const [themeList, setThemeList] = useState<ThemeType[]>([]);

  const colorHooks =
    Object.entries(config.variables).map(([key, value]) =>
      useTWVariableColor(key, {
        shades: config.shades,
        algorithm: config.algorithm,
        colorType: config.colorType,
        alpha: config.alpha,
      }))

  useEffect(() => {
    const initTheme = async () => {
      const localTheme = localStorage.getItem("localTheme");
      const localThemeList = localStorage.getItem("themeList");

      if (localTheme && localThemeList) {
        const themeObj = JSON.parse(localTheme);
        setTheme(themeObj);
        setThemeList(JSON.parse(localThemeList));

        Object.entries(themeObj.colorVars).forEach(([key, value], index) => {
          colorHooks[index][2](value as string);
        });

        applyDarkMode(themeObj.mode);
      } else if (defaultTheme) {
        setTheme(defaultTheme);
        Object.entries(defaultTheme.colorVars).forEach(([key, value], index) => {
          colorHooks[index][2](value);
        });
        setThemeList([defaultTheme]);
        localStorage.setItem("localTheme", JSON.stringify(defaultTheme));
        localStorage.setItem("themeList", JSON.stringify([defaultTheme]));
        applyDarkMode(defaultTheme.mode);
      } else {
        localStorage.setItem("localTheme", JSON.stringify(theme));
        setThemeList([theme]);
        localStorage.setItem("themeList", JSON.stringify([theme]));
      }
      setLoading(false);
    };

    initTheme();
  }, [theme.name]);


  // initialized styleSheet
  useEffect(() => {
    if (theme) {
      updateStyles(theme, colorHooks);
    }
  }, [theme, colorHooks]);

  const applyDarkMode = (mode: string) => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else if (mode === "light") {
      document.documentElement.classList.remove("dark");
    } else if (mode === "system") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
    localStorage.setItem("darkMode", mode);
  };

  const changeTheme = (theme: Partial<ThemeType>) => {
    const themeExist = themeList.find(t => t.name === theme.name);
    if (themeExist) {
      setTheme(t => ({ ...t, ...theme }));
      Object.entries(theme.colorVars ?? {}).forEach(([key, value], index) => {
        colorHooks[index][2](value);
      });

      const updatedThemeList = themeList.map(t =>
        t.name === theme.name ? { ...t, ...theme } : t
      );
      setThemeList(updatedThemeList);
      localStorage.setItem("localTheme", JSON.stringify(theme));
      localStorage.setItem("themeList", JSON.stringify(updatedThemeList));
    } else {
      console.error(`theme ${theme.name} not found in the themeList.`);
    }
  }

  const toggleTheme = (newTheme: ThemeType) => {
    setTheme(newTheme);
    localStorage.setItem("localTheme", JSON.stringify(newTheme));
  };

  const toggleDarkMode = (mode: string) => {
    // toggle dark,light,system mode and update theme mode and theme list and local storage accordingly
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
      setTheme({ ...theme, mode: "dark" });
      localStorage.setItem("localTheme", JSON.stringify({ ...theme, mode: "dark" }));
      const updatedThemeList = themeList.map(t => t.name === theme.name ? { ...t, mode: "dark" } : t);
      setThemeList(updatedThemeList);
      localStorage.setItem("themeList", JSON.stringify(updatedThemeList));
    } else if (mode === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
      setTheme({ ...theme, mode: "light" });
      localStorage.setItem("localTheme", JSON.stringify({ ...theme, mode: "light" }));
      const updatedThemeList = themeList.map(t => t.name === theme.name ? { ...t, mode: "light" } : t);
      setThemeList(updatedThemeList);
      localStorage.setItem("themeList", JSON.stringify(updatedThemeList));
    } else if (mode === "system") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("darkMode", "true");
        setTheme({ ...theme, mode: "system" });
        localStorage.setItem("localTheme", JSON.stringify({ ...theme, mode: "system" }));
        const updatedThemeList = themeList.map(t => t.name === theme.name ? { ...t, mode: "system" } : t);
        setThemeList(updatedThemeList);
        localStorage.setItem("themeList", JSON.stringify(updatedThemeList));
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("darkMode", "false");
        setTheme({ ...theme, mode: "system" });
        localStorage.setItem("localTheme", JSON.stringify({ ...theme, mode: "system" }));
        const updatedThemeList = themeList.map(t => t.name === theme.name ? { ...t, mode: "system" } : t);
        setThemeList(updatedThemeList);
        localStorage.setItem("themeList", JSON.stringify(updatedThemeList));
      }
    }
  }

  const addTheme = (newTheme: ThemeType) => {
    //add theme to themeList if it doesn't exist and set it as the current theme with light mode
    const themeExist = themeList.find(t => t.name === newTheme.name);
    if (!themeExist) {
      setThemeList([...themeList, { ...newTheme, mode: "light" }]);
      localStorage.setItem("themeList", JSON.stringify([...themeList, { ...newTheme, mode: "light" }]));
    } else {
      console.error(`theme ${newTheme.name} already exists in the themeList`);
    }
  };

  const removeTheme = (themeName: string) => {
    if (themeName === "default") {
      console.warn("Default theme cannot be removed.");
      return;
    }
    setThemeList(prev => {
      const updated = prev.filter(t => t.name !== themeName);
      localStorage.setItem("themeList", JSON.stringify(updated));
      if (theme.name === themeName) {
        const defaultTheme = updated[0];
        setTheme(defaultTheme);
        localStorage.setItem("localTheme", JSON.stringify(defaultTheme));
      }
      return updated;
    });
  };


  const contextValue = useMemo(() => ({
    theme,
    themeList,
    setTheme,
    addTheme,
    removeTheme,
    toggleTheme,
    toggleDarkMode,
    changeTheme,
  }), [theme, themeList]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {loading && themeLoader ? themeLoader : children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};