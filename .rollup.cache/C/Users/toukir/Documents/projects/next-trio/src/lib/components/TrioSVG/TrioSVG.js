import { jsx as _jsx } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
const TrioSVG = ({ svg, stroke, fill, width, height }) => {
    if (typeof svg === "string") {
        return (_jsx(StringSVG, { svg: svg, stroke: stroke, fill: fill, width: width, height: height }));
    }
    return (_jsx(SVGComponent, { svg: svg, stroke: stroke, fill: fill, width: width, height: height }));
};
export default TrioSVG;
// This component will change the stroke color of the SVG file which is located in the public folder
const StringSVG = ({ svg, stroke, fill, width, height }) => {
    const [svgContent, setSvgContent] = useState(null);
    useEffect(() => {
        const fetchSvg = async () => {
            try {
                let svgUrl = "";
                if (typeof svg === "string") {
                    svgUrl = svg;
                }
                else {
                    throw new Error("Invalid SVG prop");
                }
                const response = await fetch(svgUrl, { mode: "no-cors" });
                if (!response.ok) {
                    throw new Error("Failed to fetch SVG");
                }
                const svgText = await response.text();
                setSvgContent(svgText);
            }
            catch (error) {
                console.error("Error fetching SVG:", error);
            }
        };
        fetchSvg();
    }, [svg]);
    if (!svgContent) {
        // Render loading state or placeholder
        return null;
    }
    // Parse SVG and get root element
    const svgDOM = new DOMParser().parseFromString(svgContent, "text/xml");
    const svgEl = svgDOM.childNodes[0];
    if (svgEl.tagName !== "svg") {
        return null;
    }
    // Update root props only
    if (width)
        svgEl.setAttribute("width", String(width));
    if (height)
        svgEl.setAttribute("height", String(height));
    // Update children stroke recursively
    if (stroke) {
        svgEl.childNodes.forEach((child) => {
            if (child instanceof Element) {
                updateStrokeColorRecursively(child, stroke);
            }
        });
    }
    // update the fill color
    if (fill) {
        svgEl.childNodes.forEach((child) => {
            if (child instanceof Element) {
                child.setAttribute("fill", fill);
            }
        });
    }
    // Serialize to string
    const updatedSVGString = new XMLSerializer().serializeToString(svgEl);
    return (_jsx("div", { style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }, dangerouslySetInnerHTML: { __html: updatedSVGString } }));
};
// Update stroke color recursively
const updateStrokeColorRecursively = (element, stroke) => {
    if (element.tagName === "path") {
        element.setAttribute("stroke", stroke);
    }
    if (element.children) {
        Array.from(element.children).forEach((child) => {
            updateStrokeColorRecursively(child, stroke);
        });
    }
};
// This component will change the stroke color of the SVG file like <svg>...</svg>
const SVGComponent = ({ svg, stroke, fill = "none", width, height, }) => {
    const updatedSvg = React.cloneElement(svg, {
        width: width ||
            svg.props.width,
        height: height ||
            svg.props.height,
        fill,
        children: React.Children.map(svg.props.children, (child) => {
            if (React.isValidElement(child)) {
                return convertToReactElement(child, stroke);
            }
            return child;
        }),
    });
    return updatedSvg;
};
// Convert to React element
const convertToReactElement = (element, stroke) => {
    const { style, children, ...rest } = element.props;
    const attrs = {};
    Object.keys(rest).forEach((key) => {
        const camelKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        attrs[camelKey] = rest[key];
    });
    const props = {
        style: {
            ...style,
            stroke,
        },
        children: React.Children.map(children, (child) => {
            return React.isValidElement(child)
                ? convertToReactElement(child, stroke)
                : child;
        }),
    };
    return React.createElement(element.type, { ...attrs, ...props });
};
//# sourceMappingURL=TrioSVG.js.map