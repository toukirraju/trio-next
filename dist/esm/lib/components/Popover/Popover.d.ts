import * as React from "react";
import { Placement } from "@floating-ui/react";
interface PopoverOptions {
    initialOpen?: boolean;
    placement?: Placement;
    modal?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    arrowFill?: string;
    indicatorArrow?: boolean;
}
export declare function usePopover({ initialOpen, placement, modal, open: controlledOpen, onOpenChange: setControlledOpen, arrowFill, indicatorArrow, }?: PopoverOptions): {
    modal: boolean | undefined;
    labelId: string | undefined;
    descriptionId: string | undefined;
    setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>;
    setDescriptionId: React.Dispatch<React.SetStateAction<string | undefined>>;
    arrowRef: React.MutableRefObject<null>;
    arrowFill: string | undefined;
    indicatorArrow: boolean | undefined;
    onOpenChange: (open: boolean) => void;
    events: import("@floating-ui/react").FloatingEvents;
    dataRef: React.MutableRefObject<import("@floating-ui/react").ContextData>;
    nodeId: string | undefined;
    floatingId: string;
    placement: Placement;
    strategy: import("@floating-ui/utils").Strategy;
    middlewareData: import("@floating-ui/core").MiddlewareData;
    x: number;
    y: number;
    isPositioned: boolean;
    update: () => void;
    floatingStyles: React.CSSProperties;
    refs: {
        reference: React.MutableRefObject<import("@floating-ui/react-dom").ReferenceType | null>;
        floating: React.MutableRefObject<HTMLElement | null>;
        setReference: (node: import("@floating-ui/react-dom").ReferenceType | null) => void;
        setFloating: (node: HTMLElement | null) => void;
    } & import("@floating-ui/react").ExtendedRefs<import("@floating-ui/react").ReferenceType>;
    elements: {
        reference: import("@floating-ui/react-dom").ReferenceType | null;
        floating: HTMLElement | null;
    } & import("@floating-ui/react").ExtendedElements<import("@floating-ui/react").ReferenceType>;
    context: {
        placement: Placement;
        strategy: import("@floating-ui/utils").Strategy;
        x: number;
        y: number;
        middlewareData: import("@floating-ui/core").MiddlewareData;
        isPositioned: boolean;
        update: () => void;
        floatingStyles: React.CSSProperties;
        open: boolean;
        onOpenChange: (open: boolean, event?: Event, reason?: import("@floating-ui/react").OpenChangeReason) => void;
        events: import("@floating-ui/react").FloatingEvents;
        dataRef: React.MutableRefObject<import("@floating-ui/react").ContextData>;
        nodeId: string | undefined;
        floatingId: string;
        refs: import("@floating-ui/react").ExtendedRefs<import("@floating-ui/react").ReferenceType>;
        elements: import("@floating-ui/react").ExtendedElements<import("@floating-ui/react").ReferenceType>;
    };
    getReferenceProps: (userProps?: React.HTMLProps<Element>) => Record<string, unknown>;
    getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
    getItemProps: (userProps?: Omit<React.HTMLProps<HTMLElement>, "selected" | "active"> & {
        active?: boolean;
        selected?: boolean;
    }) => Record<string, unknown>;
    open: boolean;
    setOpen: (open: boolean) => void;
};
export declare const usePopoverContext: () => {
    modal: boolean | undefined;
    labelId: string | undefined;
    descriptionId: string | undefined;
    setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>;
    setDescriptionId: React.Dispatch<React.SetStateAction<string | undefined>>;
    arrowRef: React.MutableRefObject<null>;
    arrowFill: string | undefined;
    indicatorArrow: boolean | undefined;
    onOpenChange: (open: boolean) => void;
    events: import("@floating-ui/react").FloatingEvents;
    dataRef: React.MutableRefObject<import("@floating-ui/react").ContextData>;
    nodeId: string | undefined;
    floatingId: string;
    placement: Placement;
    strategy: import("@floating-ui/utils").Strategy;
    middlewareData: import("@floating-ui/core").MiddlewareData;
    x: number;
    y: number;
    isPositioned: boolean;
    update: () => void;
    floatingStyles: React.CSSProperties;
    refs: {
        reference: React.MutableRefObject<import("@floating-ui/react-dom").ReferenceType | null>;
        floating: React.MutableRefObject<HTMLElement | null>;
        setReference: (node: import("@floating-ui/react-dom").ReferenceType | null) => void;
        setFloating: (node: HTMLElement | null) => void;
    } & import("@floating-ui/react").ExtendedRefs<import("@floating-ui/react").ReferenceType>;
    elements: {
        reference: import("@floating-ui/react-dom").ReferenceType | null;
        floating: HTMLElement | null;
    } & import("@floating-ui/react").ExtendedElements<import("@floating-ui/react").ReferenceType>;
    context: {
        placement: Placement;
        strategy: import("@floating-ui/utils").Strategy;
        x: number;
        y: number;
        middlewareData: import("@floating-ui/core").MiddlewareData;
        isPositioned: boolean;
        update: () => void;
        floatingStyles: React.CSSProperties;
        open: boolean;
        onOpenChange: (open: boolean, event?: Event, reason?: import("@floating-ui/react").OpenChangeReason) => void;
        events: import("@floating-ui/react").FloatingEvents;
        dataRef: React.MutableRefObject<import("@floating-ui/react").ContextData>;
        nodeId: string | undefined;
        floatingId: string;
        refs: import("@floating-ui/react").ExtendedRefs<import("@floating-ui/react").ReferenceType>;
        elements: import("@floating-ui/react").ExtendedElements<import("@floating-ui/react").ReferenceType>;
    };
    getReferenceProps: (userProps?: React.HTMLProps<Element>) => Record<string, unknown>;
    getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
    getItemProps: (userProps?: Omit<React.HTMLProps<HTMLElement>, "selected" | "active"> & {
        active?: boolean;
        selected?: boolean;
    }) => Record<string, unknown>;
    open: boolean;
    setOpen: (open: boolean) => void;
} & {
    setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>;
    setDescriptionId: React.Dispatch<React.SetStateAction<string | undefined>>;
};
export declare function Popover({ children, modal, ...restOptions }: {
    children: React.ReactNode;
} & PopoverOptions): import("react/jsx-runtime").JSX.Element;
interface PopoverTriggerProps {
    children: React.ReactNode;
    asChild?: boolean;
}
export declare const PopoverTrigger: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLElement> & PopoverTriggerProps, "ref"> & React.RefAttributes<HTMLElement>>;
export declare const PopoverContent: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const PopoverHeading: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
export declare const PopoverDescription: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
export declare const PopoverClose: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
export {};
