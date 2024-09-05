import getColorPalette from '@/utils/colors';
import React, { useCallback, useEffect } from 'react'
import { useTheme } from './theme/ThemeContext';
import { TwConfig } from '@/lib/hooks/useTWVariableColor';

const deepEqual = (obj1: any, obj2: any): boolean => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
};

const ColorPalette = () => {
    const { theme, setTheme } = useTheme();
    const [updatedTheme, setUpdatedTheme] = React.useState(theme);
    const [isPaletteChanged, setIsPaletteChanged] = React.useState(false);

    useEffect(() => {
        // Ensure updatedTheme is always initialized with the current theme
        setUpdatedTheme(theme);
        setIsPaletteChanged(false);
    }, [theme]);

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

            // Check if the theme has actually changed
            if (!deepEqual(prevTheme, newTheme)) {
                setIsPaletteChanged(true);
            } else {
                setIsPaletteChanged(false);
            }
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
            {isPaletteChanged && <button onClick={handleSaveTheme}>Save Theme</button>}
            <h1>Palettes</h1>
            {theme?.shades?.map((shade, index) => (
                <PaletteGenerator
                    key={index}
                    color={shade.color}
                    shadeName={shade.name}
                    getPalette={handleChangePalette}
                />
            ))}
        </div>
    );
};

export default ColorPalette


const PaletteGenerator = ({
    color,
    shadeName,
    getPalette,
    config
}: {
    color: string;
    shadeName?: string;
    getPalette: (palette: {
        name: string;
        colors: Record<string, string>
    }) => void;
    config?: TwConfig;
}) => {
    const [defaultColor, setDefaultColor] = React.useState(color || "#0a6b56");
    console.log(defaultColor, "default color")

    React.useEffect(() => {
        setDefaultColor(color);
    }, [color]);
    // Memoize the generated palette to avoid recalculating on every render
    const generatedPalette = React.useMemo(() => {
        return getColorPalette(defaultColor, {
            colorType: config?.colorType || "hex",
            shades: config?.shades || ["25", "50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950", "light", "dark"],
            ...(config?.alpha && { alpha: config.alpha }),
        });
    }, [defaultColor, config]);

    // Call getPalette once palette is generated
    React.useEffect(() => {

        if (generatedPalette && generatedPalette.name) {
            getPalette({
                name: shadeName ? shadeName : generatedPalette.name,
                colors: generatedPalette.colors,
            });
        }
    }, [generatedPalette, getPalette]);



    // Define a function to determine text color based on shade
    const getTextColor = (shade: string) => {
        const numericShade = parseInt(shade, 10);
        return numericShade >= 500 || shade === "dark" ? "#ffffff" : "#000000"; // dark text for light shades, white text for dark shades
    };

    return (
        <div >
            <h1 className='capitalize font-bold'>{shadeName} Shade</h1>
            <h2>color name: {generatedPalette.name}</h2>
            <div className='flex text-sm flex-wrap gap-1 justify-center'>
                <input
                    id='color-picker'
                    type="color"
                    value={defaultColor}
                    onChange={(e) => setDefaultColor(e.target.value)}
                />
                {Object.entries(generatedPalette.colors).map(([key, value]) => (
                    <div className='flex items-center justify-center w-[90px] flex-shrink-0 flex-grow-0 flex-col py-1 px-3' key={key} style={{ backgroundColor: value, color: getTextColor(key) }}>
                        <strong>{key}</strong>
                        <span>{value}</span>
                    </div>
                ))}
            </div>

        </div>
    );
};

