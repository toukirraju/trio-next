import { useTWVariableColor } from "@/lib";
import { useTheme } from "./theme/ThemeContext";
import { useState } from "react";
import ColorPreset from "./ColorPreset";
import ColorPalette from "./ColorPalette";

const ThemeWrapper = () => {
    const { theme, config, setTheme, toggleDarkMode } = useTheme();

    // dynamic color hooks colorHooks return [generatedShades, variable, setVariableColor]
    // const colorHooks = theme.shades.map(({ name, color }) =>
    //     useTWVariableColor(name, {
    //         shades: config.shades,
    //         algorithm: config.algorithm,
    //         colorType: config.colorType,
    //         alpha: config.alpha,
    //     })
    // );

    // const handleColorChange = (index: number, newColor: string) => {
    //     const updatedShades = [...theme.shades];
    //     updatedShades[index] = {
    //         ...updatedShades[index],
    //         color: newColor,
    //         shade: colorHooks[index][0]
    //     };

    //     const updatedTheme = {
    //         ...theme,
    //         shades: updatedShades
    //     };

    //     setTheme(updatedTheme);
    //     localStorage.setItem("trio-theme", JSON.stringify(updatedTheme));
    // };

    return (
        <main className="flex min-h-screen flex-col items-center  bg-primary-900 dark:bg-primary-dark dark:text-white">

            {/* hardcoded primary and secondary color button to change color */}

            <ColorPreset />


            {/* color palette */}
            <ColorPalette />
            {/* <div className="flex items-center gap-2">
                {colorHooks.map((colorHook, index) => (
                    <ColorPalette
                        key={index}
                        variable={colorHook[1]}
                        value={colorHook[0]['500']}
                        onChange={(e) => {
                            const newColor = e.target.value;
                            colorHook[2](newColor);
                            handleColorChange(index, newColor);
                        }}
                    />
                ))}
            </div> */}

            {/* toggle mode dark, light, system */}
            <button onClick={() => toggleDarkMode('dark')}>Dark</button>
            <button onClick={() => toggleDarkMode('light')}>Light</button>
            <button onClick={() => toggleDarkMode('system')}>System</button>
        </main>
    );
};

export default ThemeWrapper;




