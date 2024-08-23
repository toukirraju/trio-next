"use client";
import getColorPalette from '@/utils/colors';
import { useState, useEffect } from 'react';
const useTWVariableColor = (variable, options) => {
    const [variableColor, setVariableColor] = useState('#000000');
    if (!variable) {
        console.error(`Variable not passed as props. Please pass props like useTWVariableColor('primary',{shades:['light','dark']})`);
        return [variableColor, setVariableColor];
    }
    useEffect(() => {
        const styleSheet = document.styleSheets[0];
        const updateColorVariables = () => {
            let rootRule = styleSheet.cssRules[0];
            if (!rootRule || rootRule.selectorText !== ':root') {
                styleSheet.insertRule(':root {}', 0);
                rootRule = styleSheet.cssRules[0];
            }
            // Set base variable
            rootRule.style.setProperty(`--${variable}`, variableColor);
            if (options?.algorithm === "base-500") {
                // Use getColorPalette function
                const palette = getColorPalette(variableColor, {
                    colorType: options.colorType,
                    alpha: options.alpha,
                    shades: options.shades
                });
                if (palette) {
                    Object.entries(palette.colors).forEach(([shade, color]) => {
                        rootRule.style.setProperty(`--${variable}-${shade}`, color);
                    });
                }
            }
            else {
                // Use the existing base-primary algorithm
                const [h, s, l] = variableColor.startsWith('#')
                    ? hexToHSL(variableColor)
                    : hexToHSL(`rgb(${variableColor})`);
                // Generate shades
                options?.shades?.forEach((shade) => {
                    if (shade === 'light') {
                        const shadeValue = hslToHex(h, s, adjustLightness(l, 'light'));
                        rootRule.style.setProperty(`--${variable}-${shade}`, shadeValue);
                    }
                    else if (shade === 'dark') {
                        const shadeValue = hslToHex(h, s, adjustLightness(l, 'dark'));
                        rootRule.style.setProperty(`--${variable}-${shade}`, shadeValue);
                    }
                    else {
                        const shadeValue = hslToHex(h, s, adjustLightness(l, shade));
                        rootRule.style.setProperty(`--${variable}-${shade}`, shadeValue);
                    }
                });
            }
        };
        updateColorVariables();
    }, [variableColor, variable, options]);
    return [variableColor, setVariableColor];
};
const adjustLightness = (l, shade) => {
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
        "light": 0.95,
    };
    return Math.round((shadeMap[shade] || 0.5) * 100);
};
export default useTWVariableColor;
// Color conversion functions
function hexToHSL(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result || result.length < 4)
        return [0, 0, 0]; // Return black color if invalid hex
    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    let l = (max + min) / 2;
    if (max !== min) {
        if (l < 0.5) {
            s = (max - min) / (max + min);
        }
        else {
            s = (max - min) / (2.0 - max - min);
        }
        switch (max) {
            case r:
                h = (g - b) / (max - min);
                break;
            case g:
                h = 2.0 + (b - r) / (max - min);
                break;
            case b:
                h = 4.0 + (r - g) / (max - min);
                break;
        }
    }
    h = Math.round(h * 60);
    if (h < 0)
        h += 360;
    l = Math.round(l * 100);
    s = Math.round(s * 100);
    return [h, s, l];
}
function hslToHex(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;
    if (s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        const hue2rgb = (p, q, t) => {
            if (t < 0)
                t += 1;
            if (t > 1)
                t -= 1;
            if (t < 1 / 6)
                return p + (q - p) * 6 * t;
            if (t < 1 / 2)
                return q;
            if (t < 2 / 3)
                return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    const toHex = (x) => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
//# sourceMappingURL=useTWVariableColor.js.map