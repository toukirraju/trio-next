import React from "react";
type TrioSVGProps = {
    svg: string | React.ReactElement;
    stroke?: string;
    fill?: string;
    width?: string | number;
    height?: string | number;
};
declare const TrioSVG: ({ svg, stroke, fill, width, height }: TrioSVGProps) => React.JSX.Element;
export default TrioSVG;
