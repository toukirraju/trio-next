import { type FC } from 'react';
interface BreadcrumbProps {
    separator?: 'slash' | 'chevron' | 'arrow' | 'dot';
    back?: boolean;
}
declare const Breadcrumb: FC<BreadcrumbProps>;
export default Breadcrumb;
