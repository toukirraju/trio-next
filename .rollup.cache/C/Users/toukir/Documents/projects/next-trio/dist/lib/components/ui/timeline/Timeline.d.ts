import React from 'react';
interface Activity {
    [key: string]: any;
    title?: string | {
        type: string;
        name: string;
    };
    subtitle?: string;
    icon?: string;
}
export interface TimelineProps {
    activities: Activity[];
    content?: string | ((activity: Activity) => React.ReactNode);
    title?: string | ((activity: Activity) => React.ReactNode);
    subtitle?: string | ((activity: Activity) => React.ReactNode);
}
declare const Timeline: React.FC<TimelineProps>;
export default Timeline;
