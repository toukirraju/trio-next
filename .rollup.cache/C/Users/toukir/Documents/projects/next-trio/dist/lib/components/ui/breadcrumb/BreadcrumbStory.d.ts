import React from 'react';
declare function BreadcrumbStory(args: any): React.JSX.Element;
declare namespace BreadcrumbStory {
    var argTypes: {
        separator: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        back: {
            control: string;
            description: string;
        };
    };
}
export default BreadcrumbStory;
