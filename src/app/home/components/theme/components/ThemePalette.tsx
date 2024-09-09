
import React, { useCallback, useEffect } from 'react'
import { useTheme } from '../ThemeContext';
import { isObjectEqual } from '../utils';
import { PaletteGenerator } from '.';

const ThemePalette = () => {
    const { theme, setTheme } = useTheme();
    const [updatedTheme, setUpdatedTheme] = React.useState(theme);
    const [isPaletteChanged, setIsPaletteChanged] = React.useState(false);
    const isInitialMount = React.useRef(true);

    useEffect(() => {
        // Ensure updatedTheme is always initialized with the current theme
        setUpdatedTheme(theme);
        setIsPaletteChanged(false)
    }, [theme]);


    useEffect(() => {
        // Skip the check on initial mount
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }

        // Check if the theme has actually changed
        if (!isObjectEqual(theme, updatedTheme)) {
            setIsPaletteChanged(true);
        } else {
            setIsPaletteChanged(false);
        }
    }, [updatedTheme, theme]);

    const handleChangePalette = useCallback((palette: { name: string; colors: Record<string, string> }) => {
        // set updated theme with new palette
        // also update style element with new palette
        // set isPaletteChanged to true if palette is changed
        setUpdatedTheme(prevTheme => {
            if (!prevTheme || !prevTheme.shades) {
                console.error('Previous theme or shades are undefined');
                return prevTheme; // Return previous state if it's invalid
            }

            const newTheme = {
                ...prevTheme,
                shades: prevTheme.shades.map(shade =>
                    shade.name === palette.name
                        ? { ...shade, shade: palette.colors, color: palette.colors['500'] }
                        : shade
                )
            };

            // Update style element
            let styleElement = document.getElementById('trio-theme-style');
            if (!styleElement) {
                styleElement = document.createElement('style');
                styleElement.id = 'trio-theme-style';
                document.head.appendChild(styleElement);
            }

            let cssRules = ':root {';
            newTheme.shades.forEach(shade => {
                Object.entries(shade.shade).forEach(([key, value]) => {
                    cssRules += `--${shade.name}-${key}: ${value};`;
                });
            });
            cssRules += '}';
            styleElement.textContent = cssRules;

            return newTheme;
        });
    }, []);

    if (!updatedTheme || !updatedTheme.shades) {
        return <div>Loading...</div>; // Or any other appropriate loading state
    }

    const handleSaveTheme = () => {
        // Save theme to local storage
        // Reset palette changed state
        console.log('Saving theme', updatedTheme);
        // Save theme to local storage
        localStorage.setItem("trio-theme", JSON.stringify(updatedTheme));
        // Update the theme context
        setTheme(updatedTheme);
        // Reset palette changed state
        setIsPaletteChanged(false);

    };


    return (
        <div>
            <button className='bg-cyan-700 border rounded-md py-2 px-3 disabled:bg-slate-400 disabled:text-gray-500 disabled:cursor-not-allowed transition-all duration-300' disabled={!isPaletteChanged} onClick={handleSaveTheme}>Save Theme</button>



            <h1>Palettes</h1>

            <div className='flex flex-col gap-2'>
                {theme?.shades?.map((shade, index) => (
                    <PaletteGenerator
                        key={index}
                        color={shade.color}
                        shadeName={shade.name}
                        getPalette={handleChangePalette}
                    />
                ))}
            </div>
        </div>
    );
};

export default ThemePalette





