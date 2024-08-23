declare const TimelineItem: ({ icon, children, isLast }: {
    icon?: string;
    children: React.ReactNode;
    isLast?: boolean;
}) => import("react").JSX.Element;
export default TimelineItem;
