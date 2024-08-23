import React, { type FC } from "react";
interface CheckboxHeadlessProps extends React.HTMLProps<HTMLInputElement> {
    label?: string;
    id?: string;
    checked?: boolean;
    children?: React.ReactNode;
}
declare const CheckboxHeadless: FC<CheckboxHeadlessProps>;
export default CheckboxHeadless;
