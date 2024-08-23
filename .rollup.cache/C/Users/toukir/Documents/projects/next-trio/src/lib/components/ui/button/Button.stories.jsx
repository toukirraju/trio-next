import { __assign } from "tslib";
import Button from './Button';
var meta = {
    title: 'UI/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['solid', 'pastel', 'outlined'],
        },
        color: {
            control: 'select',
            options: ['default', 'secondary', 'muted', 'primary', 'info', 'success', 'warning', 'error'],
        },
        shape: {
            control: 'select',
            options: ['straight', 'rounded', 'smooth', 'curved', 'full'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        shadow: {
            control: 'select',
            options: ['none', 'default', 'secondary', 'muted', 'primary', 'info', 'success', 'warning', 'error'],
        },
        loading: {
            control: 'boolean',
        },
    },
};
export default meta;
export var Default = {
    args: {
        children: 'Button',
        variant: 'solid',
        color: 'default',
        shape: 'smooth',
        size: 'md',
        shadow: 'none',
        loading: false,
    },
};
export var Primary = {
    args: __assign(__assign({}, Default.args), { color: 'primary' }),
};
export var Secondary = {
    args: __assign(__assign({}, Default.args), { color: 'secondary' }),
};
export var Loading = {
    args: __assign(__assign({}, Default.args), { loading: true }),
};
export var Outlined = {
    args: __assign(__assign({}, Default.args), { variant: 'outlined' }),
};
export var Pastel = {
    args: __assign(__assign({}, Default.args), { variant: 'pastel' }),
};
export var Small = {
    args: __assign(__assign({}, Default.args), { size: 'sm' }),
};
export var Large = {
    args: __assign(__assign({}, Default.args), { size: 'lg' }),
};
export var FullyRounded = {
    args: __assign(__assign({}, Default.args), { shape: 'full' }),
};
export var WithShadow = {
    args: __assign(__assign({}, Default.args), { shadow: 'default' }),
};
//# sourceMappingURL=Button.stories.jsx.map