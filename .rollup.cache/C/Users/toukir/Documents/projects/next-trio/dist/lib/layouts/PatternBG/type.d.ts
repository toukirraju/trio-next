export interface PatternBGProps {
    children?: React.ReactNode;
    className?: string;
    height?: string;
    width?: string;
    backgroundSize?: "auto" | "cover" | "contain" | "inherit" | "initial" | "unset" | "revert" | "none" | "initial" | "100% ";
    backgroundRepeat?: "repeat" | "no-repeat" | "repeat-x" | "repeat-y" | "round" | "space" | "initial" | "inherit";
    backgroundPosition?: "top" | "bottom" | "center" | "left" | "right" | "initial" | "inherit";
    backgroundAttachment?: "scroll" | "fixed" | "local" | "initial" | "inherit";
    backgroundClip?: "border-box" | "padding-box" | "content-box" | "text" | "initial" | "inherit";
    backgroundImage?: string;
}
