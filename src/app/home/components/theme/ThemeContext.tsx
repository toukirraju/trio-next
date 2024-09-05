
import useTWVariableColor, { TwConfig } from "@/lib/hooks/useTWVariableColor";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type ThemeContextType = {
  config: TwConfig;
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  toggleDarkMode: (mode: string) => void;
  changeTheme: (theme: Partial<ThemeType>) => void;
};

type ThemeType = {
  name: string;
  mode: string;
  shades: Array<{
    name: string;
    color: string;
    shade: Record<string, string>;
  }>
};

const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: ThemeType;
  themeLoader?: React.ReactNode;
  config: TwConfig;
};

const defaultThemePreset = {
  name: "default",
  mode: "light",
  shades: [
    {
      name: "primary",
      color: "#0fffff",
      shade: {
        "25": "#F7FFFF",
        "50": "#F2FFFF",
        "100": "#E8FFFF",
        "200": "#C4FFFF",
        "300": "#9EFFFF",
        "400": "#57FFFF",
        "500": "#0fffff",
        "600": "#0BDBE6",
        "700": "#08A7BF",
        "800": "#067C99",
        "900": "#035373",
        "950": "#01314A",
        "light": "#F7FFFF",
        "dark": "#01314A"
      }
    },
    {
      name: "secondary",
      color: "#0f6fff",
      shade: {
        "25": "#f7fffe",
        "50": "#f2fffe",
        "100": "#e8f7ff",
        "200": "#c4e4ff",
        "300": "#9eb5ff",
        "400": "#578cff",
        "500": "#0f6fff",
        "600": "#0b2ce6",
        "700": "#0839bf",
        "800": "#063599",
        "900": "#035373",
        "950": "#011b4a",
        "light": "#f7fdff",
        "dark": "#010c4a"
      }
    }
  ]
}


export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  themeLoader,
  config,
}) => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<ThemeType>(() => ({

  } as ThemeType));


  // dynamic color hooks
  // const colorHooks = theme.shades.map(({ name, color }) =>
  //   useTWVariableColor(name, {
  //     shades: config.shades,
  //     algorithm: config.algorithm,
  //     colorType: config.colorType,
  //     alpha: config.alpha,
  //   })
  // );



  // initialized theme 
  useEffect(() => {
    const initTheme = async () => {
      // get local storage theme 
      const localTheme = localStorage.getItem("trio-theme");

      if (localTheme) {
        const themeObj = JSON.parse(localTheme) as ThemeType;
        setTheme(themeObj);

        // set color hooks
        // themeObj.shades.forEach((shade, index) => {
        //   colorHooks[index][2](shade.color);
        // });

        // apply dark mode
        applyDarkMode(themeObj.mode);

      } else {
        setTheme(defaultThemePreset);
        localStorage.setItem("trio-theme", JSON.stringify(defaultThemePreset));
      }
      setLoading(false);
    };

    initTheme();
  }, [
    theme.name,
    theme.mode,
  ]);


  // apply dark mode
  const applyDarkMode = (mode: string) => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      // set data-mode attribute for dark mode
      document.documentElement.setAttribute("data-mode", "dark");
    } else if (mode === "light") {
      document.documentElement.classList.remove("dark");
      // set data-mode attribute for light mode
      document.documentElement.setAttribute("data-mode", "light");
    } else if (mode === "system") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
        // set data-mode attribute for dark mode
        document.documentElement.setAttribute("data-mode", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        // set data-mode attribute for light mode
        document.documentElement.setAttribute("data-mode", "light");
      }
    }
    localStorage.setItem("theme-mode", mode);
  };

  const changeTheme = (theme: Partial<ThemeType>) => {
    // change theme color variables
    setTheme(prev => {
      const updatedTheme = { ...prev, ...theme };
      localStorage.setItem("trio-theme", JSON.stringify(updatedTheme));
      return updatedTheme;
    });
  }


  const toggleDarkMode = (mode: string) => {
    // toggle dark,light,system mode and update theme mode and theme list and local storage accordingly
    applyDarkMode(mode);
    setTheme(prev => {
      const updatedTheme = { ...prev, mode };
      localStorage.setItem("trio-theme", JSON.stringify(updatedTheme));
      return updatedTheme;
    });


  }




  const contextValue = useMemo(() => ({
    config,
    theme,
    setTheme,
    toggleDarkMode,
    changeTheme,
  }), [
    config,
    theme,
    setTheme,
    toggleDarkMode,
    changeTheme,
  ]);

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