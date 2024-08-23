import React from 'react';
declare function AvatarGroupStory(args: any): React.JSX.Element;
declare namespace AvatarGroupStory {
    var argTypes: {
        size: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        avatars: {
            control: {
                type: string;
                of: {
                    type: string;
                    properties: {
                        image: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                    };
                };
            };
            description: string;
        };
        limit: {
            control: {
                type: string;
            };
            description: string;
        };
    };
}
export default AvatarGroupStory;
