"use client"
import getColorPalette, { hexToHSL, hexToRgba, hslToHex } from '@/utils/colors';
import { useState, useLayoutEffect, useMemo } from 'react';

export type ShadeOption = '25' | '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950' | 'light' | 'dark';
export type AlgorithmOption = "base-500" | "base-primary";
export type ColorType = "hex" | "rgb";
type GeneratedShades = {
    [key in ShadeOption]?: string;
};

export type TwConfig = {
    shades?: ShadeOption[],
    algorithm?: AlgorithmOption,
    colorType?: ColorType,
    alpha?: number
}

type UseTWVariableColor = (
    variable: string,
    options?: TwConfig
) => [
        GeneratedShades,
        string,
        React.Dispatch<React.SetStateAction<string>>
    ];


const useTWVariableColor: UseTWVariableColor = (variable, options = {}) => {
    const [variableColor, setVariableColor] = useState('#000000');
    const [generatedShades, setGeneratedShades] = useState<GeneratedShades>({});

    if (!variable) {
        console.error(`Variable not passed as props. Please pass props like useTWVariableColor('primary',{shades:['light','dark']})`);
        return [generatedShades, variable, setVariableColor] as [
            GeneratedShades,
            string,
            React.Dispatch<React.SetStateAction<string>>
        ];
    }

    const memoizedOptions = useMemo(() => options, [options]);

    // useLayoutEffect(() => {
    //     const styleSheet = document.styleSheets[0];

    //     const updateColorVariables = () => {
    //         let rootRule = styleSheet.cssRules[0] as CSSStyleRule;
    //         if (!rootRule || rootRule.selectorText !== ':root') {
    //             styleSheet.insertRule(':root {}', 0);
    //             rootRule = styleSheet.cssRules[0] as CSSStyleRule;
    //         }

    //         // Set base variable
    //         rootRule.style.setProperty(`--${variable}`, variableColor);

    //         const newGeneratedShades: GeneratedShades = {};

    //         // Set shades based on algorithm
    //         if (memoizedOptions?.algorithm === "base-500") {
    //             // Use getColorPalette function
    //             const palette = getColorPalette(variableColor, {
    //                 colorType: memoizedOptions.colorType,
    //                 alpha: memoizedOptions.alpha,
    //                 shades: memoizedOptions.shades
    //             });

    //             if (palette) {
    //                 Object.entries(palette.colors).forEach(([shade, color]) => {
    //                     rootRule.style.setProperty(`--${variable}-${shade}`, color);
    //                     newGeneratedShades[shade as ShadeOption] = color;
    //                 });
    //             }
    //         } else {
    //             // Use the existing base-primary algorithm
    //             const [h, s, l] = variableColor.startsWith('#')
    //                 ? hexToHSL(variableColor)
    //                 : hexToHSL(`rgb(${variableColor})`);

    //             // Generate shades
    //             memoizedOptions?.shades?.forEach((shade) => {
    //                 let shadeValue: string;
    //                 if (shade === 'light') {
    //                     shadeValue = hslToHex(h, s, adjustLightness(l, 'light'));
    //                 } else if (shade === 'dark') {
    //                     shadeValue = hslToHex(h, s, adjustLightness(l, 'dark'));
    //                 } else {
    //                     shadeValue = hslToHex(h, s, adjustLightness(l, shade));
    //                 }

    //                 // Convert to RGB if colorType is rgb
    //                 if (memoizedOptions.colorType === "rgb") {
    //                     shadeValue = hexToRgba(shadeValue, memoizedOptions?.alpha);
    //                 }

    //                 rootRule.style.setProperty(`--${variable}-${shade}`, shadeValue);
    //                 newGeneratedShades[shade] = shadeValue;
    //             });
    //         }
    //         // Update state with new generated shades if they have changed
    //         setGeneratedShades(prevShades => {
    //             if (JSON.stringify(prevShades) !== JSON.stringify(newGeneratedShades)) {
    //                 return newGeneratedShades;
    //             }
    //             return prevShades;
    //         });
    //     };

    //     updateColorVariables();
    // }, [variableColor, variable, memoizedOptions]);

    useLayoutEffect(() => {
        const styleSheet = document.styleSheets[0];

        const updateColorVariables = () => {
            let rootRule = styleSheet.cssRules[0] as CSSStyleRule;
            if (!rootRule || rootRule.selectorText !== ':root') {
                styleSheet.insertRule(':root {}', 0);
                rootRule = styleSheet.cssRules[0] as CSSStyleRule;
            }

            // Set base variable
            rootRule.style.setProperty(`--${variable}`, variableColor);

            const newGeneratedShades: GeneratedShades = {};

            // Generate shades based on the selected algorithm
            const shades = generateShades(variableColor, memoizedOptions);

            // Set CSS variables for each shade
            Object.entries(shades).forEach(([shade, color]) => {
                rootRule.style.setProperty(`--${variable}-${shade}`, color);
                newGeneratedShades[shade as ShadeOption] = color;
            });

            // Update state with new generated shades if they have changed
            setGeneratedShades(prevShades => {
                if (JSON.stringify(prevShades) !== JSON.stringify(newGeneratedShades)) {
                    return newGeneratedShades;
                }
                return prevShades;
            });
        };

        updateColorVariables();
    }, [variableColor, variable, memoizedOptions]);


    return [generatedShades, variable, setVariableColor] as [
        GeneratedShades,
        string,
        React.Dispatch<React.SetStateAction<string>>
    ];



};


const adjustLightness = (l: number, shade: string) => {
    const shadeMap = {
        '25': 0.97,
        '50': 0.95,
        '100': 0.9,
        '200': 0.8,
        '300': 0.7,
        '400': 0.6,
        '500': 0.5,
        '600': 0.4,
        '700': 0.3,
        '800': 0.2,
        '900': 0.1,
        '950': 0.05,
        'dark': 0.05,
        "light": 0.97,
    } as Record<string, number>;
    return Math.round((shadeMap[shade] || 0.5) * 100);
};


// Helper function to generate shades based on the selected algorithm
const generateShades = (baseColor: string, options: TwConfig): GeneratedShades => {
    if (options?.algorithm === "base-500") {
        const palette = getColorPalette(baseColor, {
            colorType: options.colorType,
            alpha: options.alpha,
            shades: options.shades
        })
        return palette?.colors || {};
    } else {
        const [h, s, l] = baseColor.startsWith('#')
            ? hexToHSL(baseColor)
            : hexToHSL(`rgb(${baseColor})`);

        // return options?.shades?.reduce((acc, shade) => {
        //     let shadeValue: string;
        //     if (shade === 'light') {
        //         shadeValue = hslToHex(h, s, adjustLightness(l, 'light'));
        //     } else if (shade === 'dark') {
        //         shadeValue = hslToHex(h, s, adjustLightness(l, 'dark'));
        //     } else {
        //         shadeValue = hslToHex(h, s, adjustLightness(l, shade));
        //     }

        //     if (options.colorType === "rgb") {
        //         shadeValue = hexToRgba(shadeValue, options?.alpha);
        //     }

        //     acc[shade] = shadeValue;
        //     return acc;
        // }, {} as GeneratedShades);

        const shades = options?.shades?.reduce((acc, shade) => {
            let shadeValue: string;
            if (shade === 'light') {
                shadeValue = hslToHex(h, s, adjustLightness(l, 'light'));
            } else if (shade === 'dark') {
                shadeValue = hslToHex(h, s, adjustLightness(l, 'dark'));
            } else {
                shadeValue = hslToHex(h, s, adjustLightness(l, shade));
            }

            if (options.colorType === "rgb") {
                shadeValue = hexToRgba(shadeValue, options?.alpha);
            }

            acc[shade] = shadeValue;
            return acc;
        }, {} as GeneratedShades);

        return shades || {};
    }
};


export default useTWVariableColor;




