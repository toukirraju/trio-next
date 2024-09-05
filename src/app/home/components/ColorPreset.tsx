import React, { useState, useCallback } from 'react';
import { useTheme } from './theme/ThemeContext';
import getColorPalette from '@/utils/colors';



const ColorPreset: React.FC = () => {
    const [presetVariable, setPresetVariable] = useState<string>('');
    const { theme, setTheme } = useTheme();


    const handleSetColor = useCallback((preset: string, color: string) => {
        if (!preset) {
            alert("Please select a preset variable first");
            return;
        }

        const generatedPalette = getColorPalette(color, {
            colorType: "hex",
            shades: ["25", '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', "950", 'light', 'dark']
        });

        setTheme(prevTheme => {
            const updatedShades = prevTheme.shades.map(shade =>
                shade.name === preset
                    ? { ...shade, color, shade: generatedPalette.colors }
                    : shade
            );

            const updatedTheme = {
                ...prevTheme,
                shades: updatedShades
            };

            // Update local storage
            localStorage.setItem("trio-theme", JSON.stringify(updatedTheme));

            // Check for existing style element
            let styleElement = document.getElementById('trio-theme-style');

            if (!styleElement) {
                // Create a new style element if it doesn't exist
                styleElement = document.createElement('style');
                styleElement.id = 'trio-theme-style';
                document.head.appendChild(styleElement);
            }

            // Update CSS variables
            let cssRules = ':root {';
            updatedShades.forEach(shade => {
                Object.entries(shade.shade).forEach(([key, value]) => {
                    cssRules += `--${shade.name}-${key}: ${value};`;
                });
            });
            cssRules += '}';
            styleElement.textContent = cssRules;

            return updatedTheme;
        });
    }, [setTheme]);

    const presetColors = [
        { name: "Red", color: "#FF0000" },
        { name: "Green", color: "#00FF00" },
        { name: "Blue", color: "#0000FF" },
        { name: "Pink", color: "#FF00FF" },
        { name: "Yellow", color: "#FFFF00" },
        { name: "Cyan", color: "#00FFFF" },
        { name: "Orange", color: "#FFA500" },
        { name: "Purple", color: "#800080" },
    ];

    return (
        <div>
            <p className="text-gray-500 text-sm mb-2">Preset</p>
            <select
                value={presetVariable}
                onChange={(e) => setPresetVariable(e.target.value)}
                className="bg-gray-200 py-1 px-2 rounded-md border shadow-sm hover:bg-gray-300 text-sm text-gray-600 mb-2"
            >
                <option value="">Select preset</option>
                {theme?.shades?.map(shade => (
                    <option key={shade.name} value={shade.name}>{shade.name}</option>
                ))}
            </select>

            <div className="flex gap-2 flex-wrap">
                {presetColors.map(({ name, color }) => (
                    <button
                        key={name}
                        onClick={() => handleSetColor(presetVariable, color)}
                        className="bg-gray-200 py-1 px-2 flex items-center gap-2 rounded-md border shadow-sm hover:bg-gray-300 text-sm text-gray-600"
                    >
                        <div className="h-[15px] w-[15px] rounded-full" style={{ backgroundColor: color }} />
                        {name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ColorPreset;