import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Popover, PopoverContent, PopoverTrigger } from "../../Popover/Popover";
import { BiCog } from "react-icons/bi";
import ColorPalette from "./ColorPalette";
import { useTheme } from "../ThemeContext";
import AddTheme from "./AddTheme";
import ContextMenu from "../../ContextMenu/ContextMenu";
const ThemeController = () => {
    const { theme, changeTheme, themeList, toggleTheme, removeTheme, toggleDarkMode, } = useTheme();
    const handleChangePrimary = (e) => {
        changeTheme({
            name: theme?.name,
            colorVars: {
                primary: e.target.value,
                secondary: theme?.colorVars?.secondary,
            },
        });
    };
    const handleChangeSecondary = (e) => {
        changeTheme({
            name: theme?.name,
            colorVars: {
                primary: theme?.colorVars?.primary,
                secondary: e.target.value,
            },
        });
    };
    return (_jsxs(Popover, { indicatorArrow: true, arrowFill: typeof window !== "undefined" &&
            localStorage.getItem("darkMode") === "true"
            ? "var(--primary-800)"
            : "var(--primary-100)", children: [_jsx(PopoverTrigger, { className: "absolute bottom-4 right-4 shadow-md bg-primary  text-primary-200 cursor-pointer h-12 w-12 rounded-full flex justify-center items-center text-3xl", children: _jsx("span", { className: "animate-spin delay-1000", children: _jsx(BiCog, {}) }) }), _jsxs(PopoverContent, { className: "flex flex-col items-center gap-4 bg-primary-100 dark:bg-primary-800 text-gray-500 shadow-md rounded-md px-3 py-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(ColorPalette, { variable: "primary", value: theme?.colorVars?.primary, onChange: handleChangePrimary }), _jsx(ColorPalette, { variable: "secondary", value: theme?.colorVars?.secondary, onChange: handleChangeSecondary })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("button", { className: `${theme?.mode === "dark" ? "bg-primary-900" : "bg-primary"} text-gray-500 px-4 py-2 border  rounded-md`, onClick: () => toggleDarkMode("dark"), children: "Dark" }), _jsx("button", { className: `${theme?.mode === "light" ? "bg-primary-900" : "bg-primary"} text-gray-500 px-4 py-2 border  rounded-md`, onClick: () => toggleDarkMode("light"), children: "Light" }), _jsx("button", { className: `${theme?.mode === "system" ? "bg-primary-900" : "bg-primary"} text-gray-500 px-4 py-2 border  rounded-md`, onClick: () => toggleDarkMode("system"), children: "System" })] }), _jsxs("div", { className: "flex  items-center gap-2 ", children: [_jsx("div", { className: "flex items-center gap-2 flex-wrap max-w-72", children: themeList?.map((themeItem) => {
                                    return (_jsx(ContextMenu, { indicatorArrow: true, arrowFill: localStorage.getItem("darkMode") === "true"
                                            ? "var(--primary-700)"
                                            : "var(--primary-200)", menuItems: [
                                            _jsx("button", { className: "block w-full rounded-md text-left px-2 py-1 hover:bg-primary-100 dark:hover:bg-primary-800", onClick: () => removeTheme(themeItem.name), children: "Remove" }),
                                        ], children: _jsx("button", { className: "relative h-6 w-6 rounded-full shadow-md border-2 cursor-pointer", onClick: () => toggleTheme(themeItem), style: { backgroundColor: themeItem.colorVars.primary } }) }, themeItem.name));
                                }) }), _jsx(AddTheme, {})] })] })] }));
};
export default ThemeController;
//# sourceMappingURL=ThemeController.js.map