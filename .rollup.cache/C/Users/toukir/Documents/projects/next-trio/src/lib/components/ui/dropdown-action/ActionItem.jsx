import { ReIcon } from '@/components/ReIcon/ReIcon';
import React from 'react';
var ActionItem = function (_a) {
    var href = _a.href, icon = _a.icon, image = _a.image, text = _a.text, subtext = _a.subtext, _b = _a.shape, shape = _b === void 0 ? 'smooth' : _b;
    return (<a href={href ? href : '#'} className={"\n      group/option mx-2 flex cursor-pointer items-center gap-3 px-4 py-3 transition-colors duration-300 hover:bg-muted-100 dark:hover:bg-muted-800\n      ".concat(shape === 'rounded' && 'rounded-md', "\n      ").concat(shape === 'smooth' && 'rounded-lg', "\n      ").concat(shape === 'curved' && 'rounded-xl', "\n    ")}>
      {image ? <>{image}</> : ''}
      {icon ? (<ReIcon iconName={icon !== null && icon !== void 0 ? icon : ''} className="h-5 w-5 text-muted-400 transition-colors duration-300 group-hover/option:text-primary-500"/>) : ('')}
      <div className="font-sans">
        <span className="block cursor-pointer text-xs font-normal leading-tight text-muted-800 dark:text-muted-100">
          {text}
        </span>
        <span className="block text-xs leading-tight text-muted-400">{subtext}</span>
      </div>
    </a>);
};
export default ActionItem;
//# sourceMappingURL=ActionItem.jsx.map