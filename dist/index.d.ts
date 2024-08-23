import * as React$1 from 'react';
import React__default, { FC, ButtonHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as react_jsx_runtime from 'react/jsx-runtime';

declare const buttonVariants: (props?: ({
    color?: "default" | "secondary" | "muted" | "primary" | "info" | "success" | "warning" | "error" | "transparent" | null | undefined;
    variant?: "solid" | "pastel" | "outlined" | null | undefined;
    shape?: "straight" | "rounded" | "smooth" | "curved" | "full" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    shadow?: "default" | "secondary" | "muted" | "primary" | "info" | "success" | "warning" | "error" | "none" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, VariantProps<typeof buttonVariants> {
    children?: React__default.ReactNode;
    loading?: boolean;
}
declare const Button: FC<ButtonProps>;

type TrioSVGProps = {
    svg: string | React__default.ReactElement;
    stroke?: string;
    fill?: string;
    width?: string | number;
    height?: string | number;
};
declare const TrioSVG: ({ svg, stroke, fill, width, height }: TrioSVGProps) => react_jsx_runtime.JSX.Element;

type ThemeContextType = {
    theme: {
        name: string;
        mode: string;
        colorVars: {
            primary: string;
            secondary: string;
        };
    };
    themeList: Array<{
        name: string;
        mode: string;
        colorVars: {
            primary: string;
            secondary: string;
        };
    }>;
    setTheme: React.Dispatch<React.SetStateAction<{
        name: string;
        mode: string;
        colorVars: {
            primary: string;
            secondary: string;
        };
    }>>;
    addTheme: (theme: {
        name: string;
        mode?: string;
        colorVars: {
            primary: string;
            secondary: string;
        };
    }) => void;
    removeTheme: (themeName: string) => void;
    toggleTheme: (newTheme: {
        name: string;
        mode: string;
        colorVars: {
            primary: string;
            secondary: string;
        };
    }) => void;
    toggleDarkMode: (mode: string) => void;
    changeTheme: (theme: {
        name: string;
        colorVars: {
            primary: string;
            secondary: string;
        };
    }) => void;
};
type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: {
        name: string;
        mode: string;
        colorVars: {
            primary: string;
            secondary: string;
        };
    };
    themeLoader?: React.ReactNode;
};
declare const ThemeProvider: ({ children, defaultTheme, themeLoader, }: ThemeProviderProps) => react_jsx_runtime.JSX.Element;
declare const useTheme: () => ThemeContextType;

type ColorPaletteProps = {
    variable?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    value?: any;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const ColorPalette: ({ variable, size, value, onChange, }: ColorPaletteProps) => react_jsx_runtime.JSX.Element;

declare const ThemeController: () => react_jsx_runtime.JSX.Element;

type TWVariableColorProps = {
    variable: string;
};
declare const useTWVariableColor: (props: TWVariableColorProps) => (string | React$1.Dispatch<React$1.SetStateAction<string>>)[];

interface PatternBGProps {
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

declare const PatternBG: ({ children, className, height, width, backgroundSize, backgroundRepeat, backgroundPosition, backgroundAttachment, backgroundClip, backgroundImage, }: PatternBGProps) => react_jsx_runtime.JSX.Element;

export { Button, ColorPalette, PatternBG, ThemeController, ThemeProvider, TrioSVG, useTWVariableColor, useTheme };
