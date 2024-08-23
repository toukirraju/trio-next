// @ts-ignore
import colorNamer from "color-namer";
// @ts-ignore
import convert from "color-convert";
const CMY_HUES = [180, 300, 60];
const RGB_HUES = [360, 240, 120, 0];
export function getTextColor(color) {
    const rgbColor = convert.hex.rgb(color);
    if (!rgbColor) {
        return "#333";
    }
    const [r, g, b] = rgbColor;
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luma < 120 ? "#FFF" : "#333";
}
function hueShift(hues, hue, intensity) {
    const closestHue = hues.sort((a, b) => Math.abs(a - hue) - Math.abs(b - hue))[0], hueShift = closestHue - hue;
    return Math.round(intensity * hueShift * 0.5);
}
function lighten(hex, intensity) {
    if (!hex) {
        return "";
    }
    const [h, s, v] = convert.hex.hsv(hex);
    const hue = h + hueShift(CMY_HUES, h, intensity);
    const saturation = s - Math.round(s * intensity);
    const value = v + Math.round((100 - v) * intensity);
    return `#${convert.hsv.hex([hue, saturation, value])}`;
}
function darken(hex, intensity) {
    if (!hex) {
        return "";
    }
    const inverseIntensity = 1 - intensity;
    const [h, s, v] = convert.hex.hsv(hex);
    const hue = h + hueShift(RGB_HUES, h, inverseIntensity);
    const saturation = s + Math.round((100 - s) * inverseIntensity);
    const value = v - Math.round(v * inverseIntensity);
    return `#${convert.hsv.hex([hue, saturation, value])}`;
}
export function isValidHexColorCode(str) {
    return /^#([0-9A-Fa-f]{3}){1,2}$/.test(str);
}
export function getColorName(color) {
    const { name } = colorNamer(`#${color}`.replace("##", "#")).ntc[0];
    const sanitizedName = name
        .replace(/['/]/gi, "")
        .replace(/\s+/g, "-")
        .toLowerCase();
    return sanitizedName;
}
export function sixDigitsColorHex(hexColor) {
    const hexValue = hexColor.replace("#", "");
    return `#${hexValue.length === 3
        ? hexValue.replace(/(.)/g, "$1$1")
        : hexValue.padEnd(6, "0")}`;
}
function hexToRgba(hex, alpha) {
    // Remove the leading # if present
    hex = hex.replace(/^#/, "");
    // Parse r, g, b values
    let r, g, b;
    if (hex.length === 3) {
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
    }
    else if (hex.length === 6) {
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
    }
    else {
        throw new Error("Invalid hex color code");
    }
    if (alpha !== undefined) {
        // return `${r} ${g} ${b} / ${alpha}`;
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    else {
        return `${r} ${g} ${b}`;
    }
}
export default function getColorPalette(baseColor, option) {
    if (!baseColor) {
        return;
    }
    const fullColorCode = sixDigitsColorHex(baseColor);
    const name = getColorName(fullColorCode);
    const response = {
        name,
        colors: {},
    };
    const intensityMap = {
        '25': 0.97,
        '50': 0.95,
        '100': 0.9,
        '200': 0.75,
        '300': 0.6,
        '400': 0.3,
        '500': 0,
        '600': 0.9,
        '700': 0.75,
        '800': 0.6,
        '900': 0.45,
        '950': 0.29,
        'light': 0.95, // Same as '50'
        'dark': 0.45, // Same as '900'
    };
    const convertColor = (color) => {
        if (option?.colorType === "rgb") {
            return hexToRgba(color, option.alpha);
        }
        return color;
    };
    const shadesToGenerate = option?.shades || Object.keys(intensityMap);
    shadesToGenerate.forEach((shade) => {
        if (shade === '500') {
            response.colors[shade] = convertColor(fullColorCode);
        }
        else {
            const intensity = intensityMap[shade];
            const color = shade < '500' || shade === 'light'
                ? lighten(fullColorCode, intensity)
                : darken(fullColorCode, intensity);
            response.colors[Number(shade) ? Number(shade) : shade] = convertColor(color);
        }
    });
    return response;
}
//# sourceMappingURL=colors.js.map