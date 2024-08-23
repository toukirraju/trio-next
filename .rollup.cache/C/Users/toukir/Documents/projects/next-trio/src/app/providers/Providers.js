"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PatternBG, ThemeController, ThemeProvider } from '@/lib';
import Loader from '@/lib/components/Loader/Loader';
const Providers = ({ children }) => {
    return (_jsxs(ThemeProvider, { themeLoader: _jsx(Loader, {}), children: [_jsx(ThemeController, {}), _jsx(PatternBG, { backgroundImage: "/pattern/square.svg", className: "bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] dark:from-[var(--primary-dark)] dark:to-[var(--secondary-dark)] h-screen", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundAttachment: "fixed", backgroundClip: "border-box", backgroundSize: "cover", children: children })] }));
};
export default Providers;
//# sourceMappingURL=Providers.js.map