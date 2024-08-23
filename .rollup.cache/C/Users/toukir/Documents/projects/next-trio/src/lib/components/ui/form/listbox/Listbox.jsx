import { __rest } from "tslib";
import React, { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { inputVariants } from '../../variants/input-variants';
import Avatar from '../../avatar/Avatar';
import Loader from '../../loader/Loader';
import { ReIcon } from '@/components/ReIcon/ReIcon';
import Tag from '../../tag/Tag';
var ListBox = function (_a) {
    var value = _a.value, selected = _a.selected, setSelected = _a.setSelected, label = _a.label, multiple = _a.multiple, _b = _a.size, size = _b === void 0 ? 'md' : _b, _c = _a.color, color = _c === void 0 ? 'default' : _c, _d = _a.shape, shape = _d === void 0 ? 'smooth' : _d, disabled = _a.disabled, _e = _a.items, items = _e === void 0 ? [] : _e, classNames = _a.classNames, _f = _a.loading, loading = _f === void 0 ? false : _f, error = _a.error, props = __rest(_a, ["value", "selected", "setSelected", "label", "multiple", "size", "color", "shape", "disabled", "items", "classNames", "loading", "error"]);
    return (<div className={"relative w-full ".concat(classNames)}>
      <Listbox value={selected} onChange={setSelected} multiple={multiple}>
        <div className="relative z-0 w-full font-sans">
          {!!label && <label className="font-sans text-[.85rem] text-muted-400">{label}</label>}
          <Listbox.Button className={inputVariants({
            size: size,
            color: color,
            shape: shape,
            className: "group/listbox-button relative text-start\n              ".concat(size === 'sm' && (selected === null || selected === void 0 ? void 0 : selected.icon) ? 'pe-2 ps-8' : '', "\n              ").concat(size === 'md' && (selected === null || selected === void 0 ? void 0 : selected.icon) ? 'pe-3 ps-10' : '', "\n              ").concat(size === 'lg' && (selected === null || selected === void 0 ? void 0 : selected.icon) ? 'pe-4 ps-12' : '', "\n              ").concat(size === 'sm' && (selected === null || selected === void 0 ? void 0 : selected.image) ? 'pe-2 ps-8' : '', "\n              ").concat(size === 'md' && (selected === null || selected === void 0 ? void 0 : selected.image) ? 'pe-3 ps-11' : '', "\n              ").concat(size === 'lg' && (selected === null || selected === void 0 ? void 0 : selected.image) ? 'pe-4 ps-12' : '', "\n              ").concat(size === 'sm' && !(selected === null || selected === void 0 ? void 0 : selected.icon) ? 'px-2' : '', "\n              ").concat(size === 'md' && !(selected === null || selected === void 0 ? void 0 : selected.icon) ? 'px-3' : '', "\n              ").concat(size === 'lg' && !(selected === null || selected === void 0 ? void 0 : selected.icon) ? 'px-4' : '', "\n              ").concat(size === 'sm' && !(selected === null || selected === void 0 ? void 0 : selected.image) ? 'px-2' : '', "\n              ").concat(size === 'md' && !(selected === null || selected === void 0 ? void 0 : selected.image) ? 'px-3' : '', "\n              ").concat(size === 'lg' && !(selected === null || selected === void 0 ? void 0 : selected.image) ? 'px-4' : '', "\n              ").concat(error ? '!border-danger-500' : '', "\n              ").concat(disabled ? '!pointer-events-none !cursor-not-allowed !opacity-50' : '', "\n              ").concat(loading ? '!text-transparent !pointer-events-none !select-none' : '', "\n            ")
        })} {...props}>
            <span className="block truncate">{selected === null || selected === void 0 ? void 0 : selected.name}</span>

            <div className={"absolute start-0 top-0 z-0 flex items-center justify-center text-muted-400 transition-colors duration-300 peer-focus-visible:text-primary-500 dark:text-muted-500 \n                ".concat(size === 'sm' ? 'h-8 w-8' : '', " \n                ").concat(size === 'md' ? 'h-10 w-10' : '', " \n                ").concat(size === 'lg' ? 'h-12 w-12' : '')}>
              {!!(selected === null || selected === void 0 ? void 0 : selected.icon) && !(selected === null || selected === void 0 ? void 0 : selected.image) ? (<ReIcon iconName={selected === null || selected === void 0 ? void 0 : selected.icon} className={"\n                    ".concat(size === 'sm' ? 'h-3 w-3' : '', " \n                    ").concat(size === 'md' ? 'h-4 w-4' : '', " \n                    ").concat(size === 'lg' ? 'h-5 w-5' : '', "\n                    ").concat(error ? '!text-danger-500' : '', "\n                  ")}/>) : ('')}
              {!!(selected === null || selected === void 0 ? void 0 : selected.image) && !(selected === null || selected === void 0 ? void 0 : selected.icon) ? (<Avatar src={selected === null || selected === void 0 ? void 0 : selected.image} text={selected === null || selected === void 0 ? void 0 : selected.name.substring(0, 1)} size={size === 'lg' ? 'xxs' : 'xxxs'}/>) : ('')}
            </div>
            {!!loading ? (<div className={"absolute end-0 top-0 z-0 flex items-center justify-center text-muted-400 transition-colors duration-300 peer-focus-visible:text-primary-500 dark:text-muted-500 \n                  ".concat(size === 'sm' ? 'h-8 w-8' : '', " \n                  ").concat(size === 'md' ? 'h-10 w-10' : '', " \n                  ").concat(size === 'lg' ? 'h-12 w-12' : '')}>
                <Loader classNames={"dark:text-muted-200\n                ".concat(color === 'muted' || color === 'mutedContrast'
                ? 'text-muted-400'
                : 'text-muted-300', "\n              ")} size={20} thickness={4}/>
              </div>) : ('')}
            <span className={"pointer-events-none absolute end-0 top-0 flex items-center justify-center\n                ".concat(size === 'sm' ? 'h-8 w-8' : '', " \n                ").concat(size === 'md' ? 'h-10 w-10' : '', " \n                ").concat(size === 'lg' ? 'h-12 w-12' : '', "\n                ").concat(loading ? '!text-transparent !opacity-0' : '', "\n              ")}>
              <ReIcon iconName="BsChevronExpand" className="h-4 w-4 text-muted-400 transition-transform duration-300 group-focus/listbox-button:rotate-180" aria-hidden="true"/>
            </span>
          </Listbox.Button>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className={"slimscroll absolute z-0 mt-1 w-full overflow-auto border !p-2 text-base shadow-lg shadow-muted-300/30 ring-1 ring-primary-500 ring-opacity-5 focus:outline-none dark:shadow-muted-800/20 sm:text-sm\n                ".concat((selected === null || selected === void 0 ? void 0 : selected.image) ? 'max-h-[255px]' : 'max-h-60', "\n                ").concat(shape === 'rounded' ? 'rounded-md' : '', "\n                ").concat(shape === 'smooth' ? 'rounded-lg' : '', "\n                ").concat(shape === 'rounded' ? 'rounded-md' : '', "\n                ").concat(shape === 'curved' ? 'rounded-xl' : '', "\n                ").concat(shape === 'full' ? 'rounded-xl' : '', "\n                ").concat(color === 'default'
            ? 'border-muted-200 bg-white dark:border-muted-700 dark:bg-muted-800'
            : '', "\n                ").concat(color === 'contrast'
            ? 'border-muted-200 bg-white dark:border-muted-800 dark:bg-muted-950'
            : '', "\n                ").concat(color === 'muted'
            ? 'border-muted-200 bg-white dark:border-muted-700 dark:bg-muted-800'
            : '', "\n                ").concat(color === 'mutedContrast'
            ? 'border-muted-200 bg-white dark:border-muted-800 dark:bg-muted-950'
            : '', "\n              ")}>
              {items.map(function (item, itemIdx) { return (<Listbox.Option key={itemIdx} className={function (_a) {
                var active = _a.active;
                return "relative flex select-none items-center gap-2 p-2 transition-colors duration-300 cursor-pointer \n                  ".concat(active
                    ? 'bg-primary-500/10 text-primary-700 dark:bg-primary-500/20'
                    : 'text-muted-600 dark:text-muted-400', "\n                  ").concat(shape === 'rounded' ? 'rounded-md' : '', "\n                  ").concat(shape === 'smooth' ? 'rounded-lg' : '', "\n                  ").concat(shape === 'rounded' ? 'rounded-md' : '', "\n                  ").concat(shape === 'curved' ? 'rounded-xl' : '', "\n                  ").concat(shape === 'full' ? 'rounded-xl' : '', "\n                  ");
            }} value={item}>
                  {function (_a) {
                var selected = _a.selected;
                return (<>
                        {!!(item === null || item === void 0 ? void 0 : item.icon) && !(item === null || item === void 0 ? void 0 : item.image) ? (<span className={"pointer-events-none flex items-center justify-center"}>
                            <ReIcon iconName={item === null || item === void 0 ? void 0 : item.icon} className="h-5 w-5 text-muted-400 transition-colors duration-300" aria-hidden="true"/>
                          </span>) : ('')}
                        {!!(item === null || item === void 0 ? void 0 : item.image) && !(item === null || item === void 0 ? void 0 : item.icon) ? (<Avatar src={item === null || item === void 0 ? void 0 : item.image} text={item === null || item === void 0 ? void 0 : item.name.substring(0, 1)} size="xxs"/>) : ('')}
                        <span className={"block truncate text-sm"}>{item.name}</span>
                        {item.count && (<Tag variant="solid" shape="smooth" color="primary" className="relative z-0 ms-auto flex items-center">
                            {item.count}
                          </Tag>)}
                        {/* {selected ? (
                      <span className="relative z-0 ms-auto flex items-center pe-2 text-primary-600">
                        <ReIcon
                          iconName="AiOutlineCheck"
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                      </span>
                    ) : null} */}
                      </>);
            }}
                </Listbox.Option>); })}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>);
};
export default ListBox;
//# sourceMappingURL=Listbox.jsx.map