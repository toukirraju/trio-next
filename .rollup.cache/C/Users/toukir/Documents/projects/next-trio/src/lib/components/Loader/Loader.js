import { jsx as _jsx } from "react/jsx-runtime";
const Loader = ({ thickness = 5, classNames, size = 50 }) => {
    return (_jsx("span", { className: classNames, children: _jsx("svg", { className: `loader`, viewBox: "0 0 50 50", height: size, width: size, children: _jsx("circle", { className: "path", cx: "25", cy: "25", r: "20", fill: "none", strokeWidth: thickness }) }) }));
};
export default Loader;
//# sourceMappingURL=Loader.js.map