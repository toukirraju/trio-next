// import {
//   SetStateAction,
//   createContext,
//   useContext,
//   useEffect,
//   useState,
// } from "react";
// // import Loader from "../Loader/Loader";
// import useTWVariableColor, { TwConfig } from "../../hooks/useTWVariableColor";

// type ThemeContextType = {
//   theme: {
//     name: string;
//     mode: string;
//     colorVars: {
//       primary: string;
//       secondary: string;
//     };
//   };
//   themeList: Array<{
//     name: string;
//     mode: string;
//     colorVars: {
//       primary: string;
//       secondary: string;
//     };
//   }>;
//   setTheme: React.Dispatch<
//     React.SetStateAction<{
//       name: string;
//       mode: string;
//       colorVars: {
//         primary: string;
//         secondary: string;
//       };
//     }>
//   >;
//   addTheme: (theme: {
//     name: string;
//     mode?: string;
//     colorVars: {
//       primary: string;
//       secondary: string;
//     };
//   }) => void;
//   removeTheme: (themeName: string) => void;
//   toggleTheme: (newTheme: {
//     name: string;
//     mode: string;
//     colorVars: {
//       primary: string;
//       secondary: string;
//     };
//   }) => void;
//   toggleDarkMode: (mode: string) => void;
//   changeTheme: (theme: {
//     name: string;
//     colorVars: {
//       primary: string;
//       secondary: string;
//     };
//   }) => void;
// };

// const ThemeContext = createContext<ThemeContextType>({
//   theme: {
//     name: "",
//     mode: "",
//     colorVars: {
//       primary: "",
//       secondary: "",
//     },
//   },
//   themeList: [],
//   setTheme: () => { },
//   addTheme: () => { },
//   removeTheme: () => { },
//   toggleTheme: () => { },
//   toggleDarkMode: () => { },
//   changeTheme: () => { },
// });

// type ThemeProviderProps = {
//   children: React.ReactNode;
//   defaultTheme?: {
//     name: string;
//     mode: string;
//     colorVars: {
//       primary: string;
//       secondary: string;
//     };
//   };
//   themeLoader?: React.ReactNode;
//   config?: TwConfig
// };
// export const ThemeProvider = ({
//   children,
//   defaultTheme,
//   themeLoader,
//   config
// }: ThemeProviderProps) => {
//   const [loading, setLoading] = useState(true);
//   const [primaryShade, _, setPrimary] = useTWVariableColor("primary", {
//     shades: config?.shades,
//     algorithm: config?.algorithm,
//     colorType: config?.colorType,
//     alpha: config?.alpha,
//   })

//   const [secondaryShade, __, setSecondary] = useTWVariableColor("secondary", {
//     shades: config?.shades,
//     algorithm: config?.algorithm,
//     colorType: config?.colorType,
//     alpha: config?.alpha,
//   })

//   const [themeList, setThemeList] = useState<
//     Array<{
//       name: string;
//       mode: string;
//       colorVars: {
//         primary: string;
//         secondary: string;
//       };
//     }>
//   >([]);

//   const [theme, setTheme] = useState({
//     name: "default",
//     mode: "light",
//     colorVars: {
//       primary: "#164969",
//       secondary: "#4d3cd3",
//     },
//   });
//   useEffect(() => {
//     const InitTheme = async () => {
//       // set and get from local storage
//       const localTheme = localStorage.getItem("localTheme");
//       const localThemeList = localStorage.getItem("themeList");

//       if (localTheme && localThemeList) {
//         // set theme and themeList from local storage
//         const themeObj = JSON.parse(localTheme);
//         setTheme(themeObj);
//         setThemeList(JSON.parse(localThemeList));

//         setPrimary(themeObj.colorVars.primary);
//         setSecondary(themeObj.colorVars.secondary);
//         // set dark mode local storage
//         if (themeObj.mode === "dark") {
//           document.documentElement.classList.add("dark");
//           localStorage.setItem("darkMode", "true");
//         } else if (themeObj.mode === "light") {
//           document.documentElement.classList.remove("dark");
//           localStorage.setItem("darkMode", "false");
//         } else if (themeObj.mode === "system") {
//           if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//             localStorage.setItem("darkMode", "true");
//             document.documentElement.classList.add("dark");
//           } else {
//             localStorage.setItem("darkMode", "false");
//             document.documentElement.classList.remove("dark");
//           }
//         }
//       } else if (defaultTheme) {
//         // set default theme and themeList
//         setTheme(defaultTheme);
//         setPrimary(defaultTheme.colorVars.primary);
//         setSecondary(defaultTheme.colorVars.secondary);
//         localStorage.setItem("localTheme", JSON.stringify(defaultTheme));
//         setThemeList([defaultTheme]);
//         localStorage.setItem("themeList", JSON.stringify([defaultTheme]));
//         // set dark mode local storage
//         if (defaultTheme.mode) {
//           document.documentElement.classList.add(defaultTheme.mode);
//           localStorage.setItem(
//             "darkMode",
//             defaultTheme.mode === "dark" ? "true" : "false"
//           );
//         }
//       } else {
//         // set default theme and themeList
//         localStorage.setItem("localTheme", JSON.stringify(theme));
//         setThemeList([theme]);
//         localStorage.setItem("themeList", JSON.stringify([theme]));
//       }
//       setLoading(false);
//     };

//     try {
//       InitTheme();
//     } catch (error) {
//       setLoading(false);
//     }
//   }, [theme.name]);

//   const changeTheme = ({
//     name,
//     colorVars,
//   }: {
//     name: string;
//     colorVars: { primary: string; secondary: string };
//   }) => {
//     const themeExist = themeList.find((theme) => theme.name === name);
//     if (themeExist) {
//       setTheme({
//         name,
//         mode: themeExist.mode,
//         colorVars,
//       });
//       // update primary and secondary colors
//       setPrimary(colorVars.primary);
//       setSecondary(colorVars.secondary);

//       // update theme list
//       const updatedThemeList = themeList.map((theme) => {
//         if (theme.name === name) {
//           return {
//             name,
//             mode: theme.mode,
//             colorVars,
//           };
//         } else {
//           return theme;
//         }
//       });
//       setThemeList(updatedThemeList);
//       //update localstorage
//       localStorage.setItem(
//         "localTheme",
//         JSON.stringify({ name, mode: themeExist.mode, colorVars })
//       );
//       localStorage.setItem("themeList", JSON.stringify(updatedThemeList));
//     } else {
//       console.error(`theme ${name} not found in the themeList.`);
//     }
//   };

//   const toggleTheme = (
//     newTheme: SetStateAction<{
//       name: string;
//       mode: string;
//       colorVars: { primary: string; secondary: string };
//     }>
//   ) => {
//     setTheme(newTheme);
//     //update localstorage
//     localStorage.setItem("localTheme", JSON.stringify(newTheme));
//   };

//   const toggleDarkMode = (mode: string) => {
//     // toggle dark,light,system mode
//     if (mode === "dark") {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("darkMode", "true");

//       // update theme mode
//       setTheme({ ...theme, mode: "dark" });
//       //update localstorage
//       localStorage.setItem(
//         "localTheme",
//         JSON.stringify({ ...theme, mode: "dark" })
//       );
//       //update theme list
//       const updatedThemeList = themeList.map((themeItem) => {
//         if (themeItem.name === theme.name) {
//           return { ...themeItem, mode: "dark" };
//         } else {
//           return themeItem;
//         }
//       });
//       setThemeList(updatedThemeList);
//       //update localstorage
//       localStorage.setItem("themeList", JSON.stringify(updatedThemeList));
//     } else if (mode === "light") {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("darkMode", "false");
//       // update theme mode
//       setTheme({ ...theme, mode: "light" });
//       //update localstorage
//       localStorage.setItem(
//         "localTheme",
//         JSON.stringify({ ...theme, mode: "light" })
//       );
//       //update theme list
//       const updatedThemeList = themeList.map((themeItem) => {
//         if (themeItem.name === theme.name) {
//           return { ...themeItem, mode: "light" };
//         } else {
//           return themeItem;
//         }
//       });
//       setThemeList(updatedThemeList);
//       //update localstorage
//       localStorage.setItem("themeList", JSON.stringify(updatedThemeList));
//     } else if (mode === "system") {
//       if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//         document.documentElement.classList.add("dark");
//         localStorage.setItem("darkMode", "true");
//         // update theme mode
//         setTheme({ ...theme, mode: "system" });
//         //update localstorage
//         localStorage.setItem(
//           "localTheme",
//           JSON.stringify({ ...theme, mode: "system" })
//         );
//         //update theme list
//         const updatedThemeList = themeList.map((themeItem) => {
//           if (themeItem.name === theme.name) {
//             return { ...themeItem, mode: "system" };
//           } else {
//             return themeItem;
//           }
//         });
//         setThemeList(updatedThemeList);
//         //update localstorage
//         localStorage.setItem("themeList", JSON.stringify(updatedThemeList));
//       } else {
//         document.documentElement.classList.remove("dark");
//         localStorage.setItem("darkMode", "false");
//         // update theme mode
//         setTheme({ ...theme, mode: "system" });
//         //update localstorage
//         localStorage.setItem(
//           "localTheme",
//           JSON.stringify({ ...theme, mode: "system" })
//         );
//         //update theme list
//         const updatedThemeList = themeList.map((themeItem) => {
//           if (themeItem.name === theme.name) {
//             return { ...themeItem, mode: "system" };
//           } else {
//             return themeItem;
//           }
//         });
//         setThemeList(updatedThemeList);
//         //update localstorage
//         localStorage.setItem("themeList", JSON.stringify(updatedThemeList));
//       }
//     }
//   };

//   const addTheme = (theme: {
//     name: string;
//     colorVars: { primary: string; secondary: string };
//   }) => {
//     //theme should have name and colorVars and should not be already in the themeList
//     const themeExist = themeList.find(
//       (themeItem) => themeItem.name === theme.name
//     );
//     if (!themeExist) {
//       setThemeList([...themeList, { ...theme, mode: "light" }]);
//       //update localstorage
//       localStorage.setItem(
//         "themeList",
//         JSON.stringify([...themeList, { ...theme, mode: "light" }])
//       );
//     } else {
//       console.error(`theme ${theme.name} already exists in the themeList`);
//     }
//   };

//   const removeTheme = (themeName: string) => {
//     // if theme name is default then it will not be removed and alert will be shown
//     if (themeName === "default") {
//       alert("Default theme cannot be removed.");
//       return;
//     }
//     //find theme in themeList and remove it
//     const updatedThemeList = themeList.filter(
//       (themeItem) => themeItem.name !== themeName
//     );
//     setThemeList(updatedThemeList);
//     //update localstorage
//     localStorage.setItem("themeList", JSON.stringify(updatedThemeList));

//     //remove theme from local storage
//     if (theme.name === themeName) {
//       localStorage.removeItem("localTheme");
//       setTheme(updatedThemeList[0]);
//       localStorage.setItem("localTheme", JSON.stringify(updatedThemeList[0]));
//     }
//   };

//   return (
//     <ThemeContext.Provider
//       value={{
//         theme,
//         themeList,
//         setTheme,
//         addTheme,
//         removeTheme,
//         toggleTheme,
//         toggleDarkMode,
//         changeTheme,
//       }}
//     >
//       {loading && themeLoader ? themeLoader : children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);


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

  // const contextValue: ThemeContextType = {
  //   theme,
  //   themeList,
  //   setTheme,
  //   addTheme,
  //   removeTheme,
  //   toggleTheme,
  //   toggleDarkMode,
  //   changeTheme,
  // };
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