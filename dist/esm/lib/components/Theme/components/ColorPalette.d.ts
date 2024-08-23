type ColorPaletteProps = {
    variable?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    value?: any;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const ColorPalette: ({ variable, size, value, onChange, }: ColorPaletteProps) => import("react/jsx-runtime").JSX.Element;
export default ColorPalette;
