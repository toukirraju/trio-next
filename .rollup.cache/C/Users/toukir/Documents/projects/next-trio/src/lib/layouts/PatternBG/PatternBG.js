import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../../utils/cn";
const PatternBG = ({ children, className, height, width, backgroundSize, backgroundRepeat, backgroundPosition, backgroundAttachment, backgroundClip, backgroundImage, }) => {
    return (_jsx("div", { className: cn(className && className), style: { height: height, width: width }, children: _jsx("div", { className: `h-full w-full`, style: {
                backgroundSize: backgroundSize,
                backgroundRepeat: backgroundRepeat,
                backgroundPosition: backgroundPosition,
                backgroundAttachment: backgroundAttachment,
                backgroundClip: backgroundClip,
                backgroundImage: `url(${backgroundImage})`,
            }, children: children }) }));
};
export default PatternBG;
//# sourceMappingURL=PatternBG.js.map