type ThemeContextType = {
    theme: {
        name: string;
        mode: string;
        colorVars: {
            primary: string;
            secondary: string;
        };
    };
    themeList: Array<{
        name: string;
        mode: string;
        colorVars: {
            primary: string;
            secondary: string;
        };
    }>;
    setTheme: React.Dispatch<React.SetStateAction<{
        name: string;
        mode: string;
        colorVars: {
            primary: string;
            secondary: string;
        };
    }>>;
    addTheme: (theme: {
        name: string;
        mode?: string;
        colorVars: {
            primary: string;
            secondary: string;
        };
    }) => void;
    removeTheme: (themeName: string) => void;
    toggleTheme: (newTheme: {
        name: string;
        mode: string;
        colorVars: {
            primary: string;
            secondary: string;
        };
    }) => void;
    toggleDarkMode: (mode: string) => void;
    changeTheme: (theme: {
        name: string;
        colorVars: {
            primary: string;
            secondary: string;
        };
    }) => void;
};
type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: {
        name: string;
        mode: string;
        colorVars: {
            primary: string;
            secondary: string;
        };
    };
    themeLoader?: React.ReactNode;
};
export declare const ThemeProvider: ({ children, defaultTheme, themeLoader, }: ThemeProviderProps) => import("react").JSX.Element;
export declare const useTheme: () => ThemeContextType;
export {};
