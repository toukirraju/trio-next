import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from "../ThemeContext";
import ColorPalette from "./ColorPalette";
const ColorChangerSecondary = () => {
    const { theme, changeTheme } = useTheme();
    const handleChange = (e) => {
        changeTheme({
            name: theme?.name,
            colorVars: {
                primary: theme?.colorVars?.primary,
                secondary: e.target.value,
            },
        });
    };
    return (_jsx("div", { className: "p-4", children: _jsx(ColorPalette, { variable: "secondary", value: theme?.colorVars?.secondary, onChange: handleChange }) }));
};
export default ColorChangerSecondary;
//# sourceMappingURL=ColorChangerSecondary.js.map