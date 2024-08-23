import React from 'react';
declare function CardStory(args: any): React.JSX.Element;
declare namespace CardStory {
    var argTypes: {
        children: {
            control: string;
            description: string;
        };
        color: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        className: {
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
        shadow: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
    };
}
export default CardStory;
