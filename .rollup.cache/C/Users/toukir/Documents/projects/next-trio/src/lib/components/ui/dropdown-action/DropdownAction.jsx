import React from 'react';
import Dropdown from '../dropdown/Dropdown';
import { ReIcon } from '@/components/ReIcon/ReIcon';
var DropdownAction = function (_a) {
    var title = _a.title, orientation = _a.orientation, showAll = _a.showAll, _b = _a.toggleIcon, toggleIcon = _b === void 0 ? '' : _b, toggleImage = _a.toggleImage, children = _a.children, _c = _a.className, classes = _c === void 0 ? '' : _c;
    return (<Dropdown title={title !== null && title !== void 0 ? title : ''} indicator={false} showAll={showAll !== null && showAll !== void 0 ? showAll : ''} orientation={orientation} toggleIcon={toggleIcon} toggleClassNames="border-muted-200 dark:border-transparent shadow-lg shadow-muted-300/30 dark:shadow-muted-800/30 dark:hover:bg-muted-900 border dark:hover:border-muted-800 rounded-full" toggleImage={toggleImage ? (<>{toggleImage}</>) : (<ReIcon iconName={toggleIcon} className="h-5 w-5 text-muted-400 transition-colors duration-300 group-hover:text-primary-500"/>)} className={"".concat(classes)}>
      {children}
    </Dropdown>);
};
export default DropdownAction;
//# sourceMappingURL=DropdownAction.jsx.map