import Button from './Button';
const meta = {
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
export const Default = {
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
export const Primary = {
    args: {
        ...Default.args,
        color: 'primary',
    },
};
export const Secondary = {
    args: {
        ...Default.args,
        color: 'secondary',
    },
};
export const Loading = {
    args: {
        ...Default.args,
        loading: true,
    },
};
export const Outlined = {
    args: {
        ...Default.args,
        variant: 'outlined',
    },
};
export const Pastel = {
    args: {
        ...Default.args,
        variant: 'pastel',
    },
};
export const Small = {
    args: {
        ...Default.args,
        size: 'sm',
    },
};
export const Large = {
    args: {
        ...Default.args,
        size: 'lg',
    },
};
export const FullyRounded = {
    args: {
        ...Default.args,
        shape: 'full',
    },
};
export const WithShadow = {
    args: {
        ...Default.args,
        shadow: 'default',
    },
};
//# sourceMappingURL=Button.stories.jsx.map