// import getColorPalette from "@/utils/colors";
// import React from "react";
// import { PaletteGeneratorProps } from "../types";

// const PaletteGenerator = ({
//     color,
//     shadeName,
//     getPalette,
//     config
// }: PaletteGeneratorProps) => {
//     const [defaultColor, setDefaultColor] = React.useState(color || "#0a6b56");

//     React.useEffect(() => {
//         setDefaultColor(color);
//     }, [color]);
//     // Memoize the generated palette to avoid recalculating on every render
//     const generatedPalette = React.useMemo(() => {
//         return getColorPalette(defaultColor, {
//             colorType: config?.colorType || "hex",
//             shades: config?.shades || ["25", "50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950", "light", "dark"],
//             ...(config?.alpha && { alpha: config.alpha }),
//         });
//     }, [defaultColor, config]);

//     // Call getPalette once palette is generated
//     React.useEffect(() => {

//         if (generatedPalette && generatedPalette.name) {
//             getPalette({
//                 name: shadeName ? shadeName : generatedPalette.name,
//                 colors: generatedPalette.colors,
//             });
//         }
//     }, [generatedPalette, getPalette]);



//     // Define a function to determine text color based on shade
//     const getTextColor = (shade: string) => {
//         const numericShade = parseInt(shade, 10);
//         return numericShade >= 500 || shade === "dark" ? "#ffffff" : "#000000"; // dark text for light shades, white text for dark shades
//     };

//     return (
//         <div className="rounded-md shadow-md overflow-hidden" style={{ background: defaultColor }}>
//             <div className="p-2 pb-8">
//                 <h1 className='capitalize font-bold'>{shadeName} </h1>
//                 <p className="text-xs">{generatedPalette.name}</p>

//                 <div className="flex justify-between">
//                     <span>{defaultColor}</span>
//                     <input
//                         id='color-picker'
//                         type="color"
//                         value={defaultColor}
//                         onChange={(e) => setDefaultColor(e.target.value)}
//                     />
//                 </div>
//             </div>
//             <div className='flex text-sm flex-nowrap justify-center'>
//                 {Object.entries(generatedPalette.colors).map(([key, value]) => (
//                     <div className='flex items-center justify-center min-w-3 flex-1 flex-grow flex-col p-6' key={key} style={{ backgroundColor: value, color: getTextColor(key) }}>
//                         {/* color shades  */}
//                     </div>
//                 ))}
//             </div>

//         </div>
//     );
// };

// export default PaletteGenerator;

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

    return (
        <div className="rounded-md shadow-lg overflow-hidden shadow-slate-800" style={{ background: defaultColor }}>
            <div className="p-2 pb-8">
                <h1 className='capitalize font-bold'>{shadeName} </h1>
                <p className="text-xs">{generatedPalette.name}</p>

                <div className="flex justify-between">
                    <span>{defaultColor}</span>
                    <input
                        id='color-picker'
                        type="color"
                        value={defaultColor}
                        onChange={(e) => setDefaultColor(e.target.value)}
                    />
                </div>
            </div>
            <div className='flex text-sm flex-wrap justify-center'>
                {Object.entries(generatedPalette.colors).map(([key, value]) => (
                    <div
                        className='flex items-center justify-center flex-grow flex-col'
                        key={key}
                        style={{
                            backgroundColor: value,
                            color: getTextColor(key),
                            width: 'calc(8vw + 15px)',
                            height: 'calc(8vh + 10px)',
                            fontSize: 'calc(0.8vw + 6px)',
                            padding: 'calc(0.5vw + 1px)',
                        }}
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