import { ReIcon } from '@/components/ReIcon/ReIcon';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
var Breadcrumb = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? 'slash' : _b, back = _a.back;
    var pathname = usePathname();
    var router = useRouter();
    function generateBreadcrumbs() {
        var segments = pathname.split('/').filter(Boolean);
        var breadcrumbs = segments.map(function (segment, index) {
            var title = segment
                .split('-')
                .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
                .join(' ');
            var href = '/' + segments.slice(0, index + 1).join('/');
            return { title: title, href: href };
        });
        if (segments.length === 0 || segments[0].toLowerCase() !== 'dashboard') {
            breadcrumbs.unshift({ title: 'Dashboard', href: '/dashboard' });
        }
        return breadcrumbs;
    }
    var breadcrumbs = generateBreadcrumbs();
    return (<div className="flex items-center gap-2">
      {back && (<div className="flex items-center gap-1 cursor-pointer" onClick={function () {
                router.back();
            }}>
          <ReIcon iconName="MdArrowBack" className="text-muted-400 dark:text-muted-500"/>
          <span className="hidden md:block text-sm text-muted-700 dark:text-muted-400">Back</span>
          <span className="lg:h-1 lg:w-1 rounded-full bg-muted-400 dark:bg-muted-700 ml-1"></span>
        </div>)}
      <ol className="lg:flex min-w-0 items-center whitespace-nowrap hidden" aria-label="Breadcrumb">
        {breadcrumbs.map(function (item, index) { return (<li key={index} className="text-sm text-muted-400 dark:text-muted-400">
            {breadcrumbs.length - 1 !== index ? (<Link className="flex items-center underline-offset-4 transition-colors duration-300 hover:text-primary-500 hover:underline" href={item.href}>
                {/* {item.icon ? <ReIcon iconName={item.icon} className="me-1 h-4 w-4 shrink-0" /> : ''} */}
                <span>{item.title}</span>

                {separator === 'slash' ? (<svg className="mx-2 h-5 w-5 flex-shrink-0 text-muted-400 dark:text-muted-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round"/>
                  </svg>) : ('')}
                {separator === 'chevron' ? (<svg className="mx-2 h-3 w-3 flex-shrink-0 text-muted-400 dark:text-muted-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>) : ('')}
                {separator === 'dot' ? (<svg className="mx-2 h-3 w-3 flex-shrink-0 text-muted-400 dark:text-muted-600" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <circle cx="12.1" cy="12.1" r="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                  </svg>) : ('')}
                {separator === 'arrow' ? (<svg className="mx-3 h-4 w-4 flex-shrink-0 text-muted-400 dark:text-muted-600" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7"/>
                  </svg>) : ('')}
              </Link>) : (<div className="flex items-center">
                {/* {item.icon ? <ReIcon iconName={item.icon} className="me-1 h-4 w-4 shrink-0" /> : ''} */}
                <span>{item.title}</span>
              </div>)}
          </li>); })}
      </ol>
    </div>);
};
export default Breadcrumb;
//# sourceMappingURL=Breadcrumb.jsx.map