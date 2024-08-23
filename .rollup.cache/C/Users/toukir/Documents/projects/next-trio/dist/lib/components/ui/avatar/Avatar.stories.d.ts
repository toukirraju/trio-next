import AvatarStory from './AvatarStory';
declare const _default: {
    title: string;
    component: {
        (args: any): import("react").JSX.Element;
        argTypes: {
            overlaps: {
                control: string;
                description: string;
            };
            src: {
                control: string;
                description: string;
            };
            alt: {
                control: string;
                description: string;
            };
            size: {
                control: {
                    type: string;
                };
                options: string[];
                description: string;
            };
            text: {
                control: string;
                description: string;
            };
            shape: {
                control: {
                    type: string;
                };
                options: string[];
                description: string;
            };
            mask: {
                control: {
                    type: string;
                };
                options: string[];
                description: string;
            };
            color: {
                control: {
                    type: string;
                };
                options: string[];
                description: string;
            };
        };
    };
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default _default;
export { AvatarStory };
