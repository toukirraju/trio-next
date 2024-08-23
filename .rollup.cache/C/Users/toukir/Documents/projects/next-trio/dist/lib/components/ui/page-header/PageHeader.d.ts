import React, { ReactNode } from 'react';
type PageHeaderProps = {
    title: string;
    description?: string;
    cta?: ReactNode;
    badge?: any;
};
declare const PageHeader: ({ title, description, cta, badge }: PageHeaderProps) => React.JSX.Element;
export default PageHeader;
