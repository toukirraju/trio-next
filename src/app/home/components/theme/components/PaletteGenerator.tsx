import getColorPalette from "@/utils/colors";
import React from "react";
import { PaletteGeneratorProps } from "../types";

const PaletteGenerator = ({
    color,
    shadeName,
    getPalette,
    config
}: PaletteGeneratorProps) => {
    const [defaultColor, setDefaultColor] = React.useState(color || "#0a6b56");

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

export default PaletteGenerator;