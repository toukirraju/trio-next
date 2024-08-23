import React, { type FC } from 'react';
interface RadioHeadlessProps extends React.HTMLProps<HTMLInputElement> {
    id?: string;
    label?: string;
    name?: string;
    checked?: boolean;
    children?: React.ReactNode;
}
declare const RadioHeadless: FC<RadioHeadlessProps>;
export default RadioHeadless;
