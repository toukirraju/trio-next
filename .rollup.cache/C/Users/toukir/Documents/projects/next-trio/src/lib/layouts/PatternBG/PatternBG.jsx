import { cn } from "../../../utils/cn";
const PatternBG = ({ children, className, height, width, backgroundSize, backgroundRepeat, backgroundPosition, backgroundAttachment, backgroundClip, backgroundImage, }) => {
    return (<div className={cn(className && className)} style={{ height: height, width: width }}>
      <div className={`h-full w-full`} style={{
            backgroundSize: backgroundSize,
            backgroundRepeat: backgroundRepeat,
            backgroundPosition: backgroundPosition,
            backgroundAttachment: backgroundAttachment,
            backgroundClip: backgroundClip,
            backgroundImage: `url(${backgroundImage})`,
        }}>
        {children}
      </div>
    </div>);
};
export default PatternBG;
//# sourceMappingURL=PatternBG.jsx.map