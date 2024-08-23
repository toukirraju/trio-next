import React from 'react';
import { buttonVariants } from '../variants/button-variants';
import Loader from '../Loader/Loader';
const Button = ({ children, variant, color, shape, size = 'md', shadow, className: classes, loading = false, ...props }) => {
    return (<button className={buttonVariants({
            variant,
            color,
            shape,
            size,
            shadow,
            className: `inline-flex items-center gap-1 whitespace-nowrap text-center text-sm ${loading ? 'relative !text-transparent pointer-events-none' : ''} ${classes}`
        })} {...props}>
      {children}
      {loading ? (<Loader classNames={`absolute top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2`} size={20} thickness={4}/>) : ('')}
    </button>);
};
export default Button;
//# sourceMappingURL=Button.jsx.map