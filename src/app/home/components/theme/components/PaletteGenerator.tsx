
import React from "react";
import { PaletteGeneratorProps } from "../types";
import { getColorPalette } from "../utils";

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

    const generatedPalette = React.useMemo(() => {
        return getColorPalette(defaultColor, {
            colorType: config?.colorType || "hex",
            shades: config?.shades || ["25", "50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950", "light", "dark"],
            ...(config?.alpha && { alpha: config.alpha }),
        });
    }, [defaultColor, config]);

    React.useEffect(() => {
        if (generatedPalette && generatedPalette.name) {
            getPalette({
                name: shadeName ? shadeName : generatedPalette.name,
                colors: generatedPalette.colors,
            });
        }
    }, [generatedPalette, getPalette, shadeName]);

    const getTextColor = (shade: string) => {
        const numericShade = parseInt(shade, 10);
        return numericShade >= 500 || shade === "dark" ? "#ffffff" : "#000000";
    };

    // Function to copy color code to clipboard
    const copyToClipboard = (colorCode: string) => {
        navigator.clipboard.writeText(colorCode)
            .then(() => alert(`Copied ${colorCode} to clipboard!`))
            .catch((err) => alert('Failed to copy color code.'));
    };

    return (
        <div className="rounded-md shadow-md overflow-hidden shadow-slate-800 max-w-md" style={{ background: defaultColor }}>
            <div className="p-2 flex flex-col gap-1 box">
                <h1 className='capitalize text-2xl drop-shadow-xl font-bold'>{shadeName} </h1>
                <p className="text-xs">{generatedPalette.name}</p>

                <div className="flex justify-between ">
                    {/* <span>{defaultColor}</span> */}
                    <input
                        id='color-input'
                        type="text"
                        value={defaultColor}
                        onChange={(e) => setDefaultColor(e.target.value)}
                        className="bg-transparent w-full outline-none "
                    />
                    <label htmlFor={`color-picker-${shadeName}`} className="cursor-pointer h-7 w-7 bg-white rounded-lg shadow-md flex justify-center items-center">
                        <div className="h-5 w-5 bg-primary-200 rounded-md flex justify-center items-center">
                            <div className="h-3 w-3 rounded-md flex justify-center items-center" style={{ background: defaultColor }}>
                                <input
                                    className="sr-only "
                                    id={`color-picker-${shadeName}`}
                                    type="color"
                                    value={defaultColor}
                                    onChange={(e) => setDefaultColor(e.target.value)}
                                />
                            </div>
                        </div>
                    </label>
                </div>
            </div>
            <div className='flex text-sm flex-wrap justify-center'>
                {Object.entries(generatedPalette.colors).map(([key, value]) => (
                    <div
                        className='flex items-center justify-center flex-grow flex-col cursor-pointer'
                        title="Double click to copy color code"
                        key={key}
                        style={{
                            backgroundColor: value,
                            color: getTextColor(key),
                            width: 'calc(5vw + 25px)',
                            height: 'calc(5vh + 10px)',
                            fontSize: 'calc(0.5vw + 6px)',
                            padding: 'calc(0.3vw + 1px)',
                        }}
                        onDoubleClick={() => copyToClipboard(value)} // Copy color code on double click
                    >
                        <strong>{key}</strong>
                        <span>{value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PaletteGenerator;