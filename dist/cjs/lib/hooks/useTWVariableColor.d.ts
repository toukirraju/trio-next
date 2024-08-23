type TWVariableColorProps = {
    variable: string;
};
declare const useTWVariableColor: (props: TWVariableColorProps) => (string | import("react").Dispatch<import("react").SetStateAction<string>>)[];
export default useTWVariableColor;
