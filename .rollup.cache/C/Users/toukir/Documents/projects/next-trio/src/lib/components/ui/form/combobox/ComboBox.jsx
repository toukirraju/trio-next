'use client';
import { __rest } from "tslib";
import React, { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { inputVariants } from '../../variants/input-variants';
import Loader from '../../loader/Loader';
import Avatar from '../../avatar/Avatar';
import { ReIcon } from '@/components/ReIcon/ReIcon';
var ComboBox = function (_a) {
    var value = _a.value, selected = _a.selected, setSelected = _a.setSelected, label = _a.label, _b = _a.size, size = _b === void 0 ? 'md' : _b, _c = _a.color, color = _c === void 0 ? 'default' : _c, _d = _a.shape, shape = _d === void 0 ? 'smooth' : _d, disabled = _a.disabled, _e = _a.loading, loading = _e === void 0 ? false : _e, _f = _a.items, items = _f === void 0 ? [] : _f, classNames = _a.classNames, error = _a.error, props = __rest(_a, ["value", "selected", "setSelected", "label", "size", "color", "shape", "disabled", "loading", "items", "classNames", "error"]);
    var _g = useState(''), query = _g[0], setQuery = _g[1];
    var filteredItems = query === ''
        ? items
        : items.filter(function (item) {
            return item.name
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.toLowerCase().replace(/\s+/g, ''));
        });
    return (<div className={"relative w-full ".concat(classNames)}>
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          {!!label && <label className="font-sans text-[.85rem] text-muted-400">{label}</label>}
          <div className="relative z-0 w-full font-sans">
            <Combobox.Input className={inputVariants({
            size: size,
            color: color,
            shape: shape,
            className: "peer relative text-start\n                ".concat(size === 'sm' && (selected === null || selected === void 0 ? void 0 : selected.icon) ? 'pe-2 ps-8' : '', "\n                ").concat(size === 'md' && (selected === null || selected === void 0 ? void 0 : selected.icon) ? 'pe-3 ps-10' : '', "\n                ").concat(size === 'lg' && (selected === null || selected === void 0 ? void 0 : selected.icon) ? 'pe-4 ps-12' : '', "\n                ").concat(size === 'sm' && (selected === null || selected === void 0 ? void 0 : selected.image) ? 'pe-2 ps-8' : '', "\n                ").concat(size === 'md' && (selected === null || selected === void 0 ? void 0 : selected.image) ? 'pe-3 ps-11' : '', "\n                ").concat(size === 'lg' && (selected === null || selected === void 0 ? void 0 : selected.image) ? 'pe-4 ps-12' : '', "\n                ").concat(size === 'sm' && !(selected === null || selected === void 0 ? void 0 : selected.icon) ? 'px-2' : '', "\n                ").concat(size === 'md' && !(selected === null || selected === void 0 ? void 0 : selected.icon) ? 'px-3' : '', "\n                ").concat(size === 'lg' && !(selected === null || selected === void 0 ? void 0 : selected.icon) ? 'px-4' : '', "\n                ").concat(size === 'sm' && !(selected === null || selected === void 0 ? void 0 : selected.image) ? 'px-2' : '', "\n                ").concat(size === 'md' && !(selected === null || selected === void 0 ? void 0 : selected.image) ? 'px-3' : '', "\n                ").concat(size === 'lg' && !(selected === null || selected === void 0 ? void 0 : selected.image) ? 'px-4' : '', "\n                ").concat(error ? '!border-error-500' : '', "\n                ").concat(disabled ? '!pointer-events-none !cursor-not-allowed !opacity-50' : '', "\n                ").concat(loading
                ? 'pointer-events-none !text-transparent !shadow-none placeholder:!text-transparent !select-none'
                : '', "\n              ")
        })} displayValue={function (item) { return item.name; }} onChange={function (event) { return setQuery(event.target.value); }} {...props}/>
            <div className={"absolute start-0 top-0 z-0 flex items-center justify-center text-muted-400 transition-colors duration-300 peer-focus-visible:text-primary-500 dark:text-muted-500 \n                ".concat(size === 'sm' ? 'h-8 w-8' : '', " \n                ").concat(size === 'md' ? 'h-10 w-10' : '', " \n                ").concat(size === 'lg' ? 'h-12 w-12' : '')}>
              {!!(selected === null || selected === void 0 ? void 0 : selected.icon) && !(selected === null || selected === void 0 ? void 0 : selected.image) ? (<ReIcon iconName={selected === null || selected === void 0 ? void 0 : selected.icon} className={"\n                    ".concat(size === 'sm' ? 'h-3 w-3' : '', " \n                    ").concat(size === 'md' ? 'h-4 w-4' : '', " \n                    ").concat(size === 'lg' ? 'h-5 w-5' : '', "\n                    ").concat(error ? '!text-error-500' : '', "\n                  ")}/>) : ('')}
              {!!(selected === null || selected === void 0 ? void 0 : selected.image) && !(selected === null || selected === void 0 ? void 0 : selected.icon) ? (<Avatar src={selected === null || selected === void 0 ? void 0 : selected.image} text={selected === null || selected === void 0 ? void 0 : selected.name.substring(0, 1)} size={size === 'lg' ? 'xxs' : 'xxxs'}/>) : ('')}
            </div>
            {!!loading ? (<div className={"absolute end-0 top-0 z-0 flex items-center justify-center text-muted-400 transition-colors duration-300 peer-focus-visible:text-primary-500 dark:text-muted-500 \n                  ".concat(size === 'sm' ? 'h-8 w-8' : '', " \n                  ").concat(size === 'md' ? 'h-10 w-10' : '', " \n                  ").concat(size === 'lg' ? 'h-12 w-12' : '')}>
                <Loader classNames={"dark:text-muted-200\n                ".concat(color === 'muted' || color === 'mutedContrast'
                ? 'text-muted-400'
                : 'text-muted-300', "\n              ")} size={20} thickness={4}/>
              </div>) : ('')}
            <Combobox.Button className={"peer:focus-visible:[&>svg]:rotate-180 absolute end-0 top-0 flex items-center justify-center\n                ".concat(size === 'sm' ? 'h-8 w-8' : '', " \n                ").concat(size === 'md' ? 'h-10 w-10' : '', " \n                ").concat(size === 'lg' ? 'h-12 w-12' : '', "\n                ").concat(loading ? '!pointer-events-none !text-transparent !opacity-0 !select-none' : '', "\n              ")}>
              <ReIcon iconName="MdOutlineKeyboardArrowUp" className="h-4 w-4 text-muted-400 transition-transform duration-300" aria-hidden="true"/>
            </Combobox.Button>
          </div>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" afterLeave={function () { return setQuery(''); }}>
            <Combobox.Options className={"slimscroll absolute z-0 mt-1 w-full overflow-auto border !p-2 text-base shadow-lg shadow-muted-300/30 ring-1 ring-primary-500 ring-opacity-5 focus:outline-none dark:shadow-muted-800/20 sm:text-sm\n                ".concat(shape === 'rounded' ? 'rounded-md' : '', "\n                ").concat(shape === 'smooth' ? 'rounded-lg' : '', "\n                ").concat(shape === 'rounded' ? 'rounded-md' : '', "\n                ").concat(shape === 'curved' ? 'rounded-xl' : '', "\n                ").concat(shape === 'full' ? 'rounded-xl' : '', "\n                ").concat(color === 'default'
            ? 'border-muted-200 bg-white dark:border-muted-700 dark:bg-muted-800'
            : '', "\n                ").concat(color === 'contrast'
            ? 'border-muted-200 bg-white dark:border-muted-800 dark:bg-muted-950'
            : '', "\n                ").concat(color === 'muted'
            ? 'border-muted-200 bg-white dark:border-muted-700 dark:bg-muted-800'
            : '', "\n                ").concat(color === 'mutedContrast'
            ? 'border-muted-200 bg-white dark:border-muted-800 dark:bg-muted-950'
            : '', "\n              ")}>
              {filteredItems.length === 0 && query !== '' ? (<div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>) : (filteredItems.map(function (item) { return (<Combobox.Option key={item.id} className={function (_a) {
                var active = _a.active;
                return "relative flex cursor-default select-none items-center gap-2 p-2 transition-colors duration-300 \n                      ".concat(active
                    ? 'bg-primary-500/10 text-primary-700 dark:bg-primary-500/20'
                    : 'text-muted-600 dark:text-muted-400', "\n                      ").concat(shape === 'rounded' ? 'rounded-md' : '', "\n                      ").concat(shape === 'smooth' ? 'rounded-lg' : '', "\n                      ").concat(shape === 'rounded' ? 'rounded-md' : '', "\n                      ").concat(shape === 'curved' ? 'rounded-xl' : '', "\n                      ").concat(shape === 'full' ? 'rounded-xl' : '', "\n                    ");
            }} value={item}>
                    {function (_a) {
                var selected = _a.selected, active = _a.active;
                return (<>
                        {!!(item === null || item === void 0 ? void 0 : item.icon) && !(item === null || item === void 0 ? void 0 : item.image) ? (<span className={"pointer-events-none flex items-center justify-center"}>
                            <ReIcon iconName={item === null || item === void 0 ? void 0 : item.icon} className="h-5 w-5 text-muted-400 transition-colors duration-300" aria-hidden="true"/>
                          </span>) : ('')}
                        {!!(item === null || item === void 0 ? void 0 : item.image) && !(item === null || item === void 0 ? void 0 : item.icon) ? (<Avatar src={item === null || item === void 0 ? void 0 : item.image} text={item === null || item === void 0 ? void 0 : item.name.substring(0, 1)} size="xxs"/>) : ('')}
                        <span className={"block truncate ".concat(selected ? 'font-medium' : 'font-normal')}>
                          {item.name}
                        </span>
                        {selected ? (<span className={"relative z-0 ms-auto flex items-center pe-2 text-primary-600 ".concat(active ? '' : '')}>
                            <ReIcon iconName="GoCheck" className="h-4 w-4" aria-hidden="true"/>
                          </span>) : null}
                      </>);
            }}
                  </Combobox.Option>); }))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>);
};
export default ComboBox;
//# sourceMappingURL=ComboBox.jsx.map