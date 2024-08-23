import React from 'react';
type CustomCDDAType = {
    name: string;
    oldFormik?: any;
    item?: any;
    open: boolean;
    setOpen: (open: boolean) => void;
};
declare const CustomCDDA: (props: CustomCDDAType) => React.JSX.Element;
export default CustomCDDA;
