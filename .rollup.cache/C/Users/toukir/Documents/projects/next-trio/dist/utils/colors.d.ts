export type Palette = {
    name: string;
    colors: {
        [key: number]: string;
    };
};
export declare function getTextColor(color: string): "#FFF" | "#333";
export declare function isValidHexColorCode(str: string): boolean;
export declare function getColorName(color: string): string;
export declare function sixDigitsColorHex(hexColor: string): string;
type ShadeOption = '25' | '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950' | 'light' | 'dark';
export default function getColorPalette(baseColor?: string, option?: {
    colorType?: "hex" | "rgb";
    alpha?: number;
    shades?: ShadeOption[];
}): Palette | undefined;
export {};
