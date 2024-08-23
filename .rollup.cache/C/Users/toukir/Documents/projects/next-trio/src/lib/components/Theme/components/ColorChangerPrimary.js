import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from "../ThemeContext";
import ColorPalette from "./ColorPalette";
const ColorChangerPrimary = () => {
    const { theme, changeTheme } = useTheme();
    const handleChange = (e) => {
        changeTheme({
            name: theme?.name,
            colorVars: {
                primary: e.target.value,
                secondary: theme?.colorVars?.secondary,
            },
        });
    };
    return (_jsx("div", { className: "p-4", children: _jsx(ColorPalette, { variable: "primary", value: theme?.colorVars?.primary, onChange: handleChange }) }));
};
export default ColorChangerPrimary;
//# sourceMappingURL=ColorChangerPrimary.js.map