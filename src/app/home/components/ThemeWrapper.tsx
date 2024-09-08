
import { ThemePalette, ThemePreset } from "./theme/components";
import { useTheme } from "./theme/ThemeContext";

const ThemeWrapper = () => {
    const { theme, config, setTheme, toggleDarkMode } = useTheme();


    return (
        <main className="flex min-h-screen flex-col items-center  bg-primary-900 dark:bg-primary-dark dark:text-white">

            <ThemePreset />


            {/* color palette */}
            <ThemePalette />

            {/* toggle mode dark, light, system */}
            <button onClick={() => toggleDarkMode('dark')}>Dark</button>
            <button onClick={() => toggleDarkMode('light')}>Light</button>
            <button onClick={() => toggleDarkMode('system')}>System</button>
        </main>
    );
};

export default ThemeWrapper;




