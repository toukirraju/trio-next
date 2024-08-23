type ShadeOption = '25' | '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950' | 'light' | 'dark';
declare const useTWVariableColor: (variable: string, options?: {
    shades?: ShadeOption[];
    algorithm?: "base-500" | "base-primary";
    colorType?: "hex" | "rgb";
    alpha?: number;
}) => (string | import("react").Dispatch<import("react").SetStateAction<string>>)[];
export default useTWVariableColor;
