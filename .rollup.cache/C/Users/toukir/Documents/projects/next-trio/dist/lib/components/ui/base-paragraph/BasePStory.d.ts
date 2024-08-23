import React from 'react';
declare function BasePStory(args: any): React.JSX.Element;
declare namespace BasePStory {
    var argTypes: {
        size: {
            control: string;
            options: string[];
            description: string;
        };
        as: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        lead: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        weight: {
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
        children: {
            control: string;
            description: string;
        };
        className: {
            control: string;
            description: string;
        };
    };
}
export default BasePStory;
