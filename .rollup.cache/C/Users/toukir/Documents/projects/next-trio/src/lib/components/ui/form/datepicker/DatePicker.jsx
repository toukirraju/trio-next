import { __rest } from "tslib";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { cva } from 'class-variance-authority';
import { add, eachDayOfInterval, endOfMonth, endOfWeek, format, getDay, isBefore, isEqual, isSameMonth, isToday, parse, startOfToday, startOfWeek } from 'date-fns';
import Input from '../input/Input';
import { ReIcon } from '@/components/ReIcon/ReIcon';
import Button from '../../button/Button';
var colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7'
];
var dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var numberRegex = /^-?\d*\.?\d+$/;
var pickerStyles = cva('mx-auto flex w-full py-2 items-center justify-center text-xs ', {
    variants: {
        isToday: { true: '', false: '' },
        isSelected: { true: '', false: '' },
        isSameMonth: {
            true: '',
            false: ''
        }
    },
    compoundVariants: [
        {
            isSelected: true,
            className: 'font-medium'
        },
        {
            isToday: true,
            className: 'font-medium bg-primary-500 text-white'
        },
        {
            isSelected: true,
            isToday: true,
            className: 'bg-primary-500 text-white'
        },
        {
            isSelected: false,
            isToday: false,
            isSameMonth: true,
            className: 'text-center hover:bg-muted-100 hover:text-primary-500 dark:hover:bg-muted-800 disabled:dark:hover:bg-transparent disabled:text-muted-300 dark:disabled:text-muted-700 disabled:cursor-not-allowed'
        },
        {
            isSelected: false,
            isToday: false,
            isSameMonth: false,
            className: 'text-muted-300 dark:hover:bg-muted-800 disabled:dark:hover:bg-transparent disabled:cursor-not-allowed'
        },
        {
            isSelected: true,
            isToday: false,
            className: 'bg-primary-500 text-white'
        }
    ]
});
var DatePicker = function (_a) {
    var value = _a.value, _b = _a.valueFormat, valueFormat = _b === void 0 ? 'yyyy-MM-dd' : _b, //MMM dd
    icon = _a.icon, _c = _a.shape, shape = _c === void 0 ? 'smooth' : _c, _d = _a.size, size = _d === void 0 ? 'md' : _d, _e = _a.color, color = _e === void 0 ? 'default' : _e, label = _a.label, placeholder = _a.placeholder, minDate = _a.minDate, disabled = _a.disabled, _f = _a.loading, loading = _f === void 0 ? false : _f, props = __rest(_a, ["value", "valueFormat", "icon", "shape", "size", "color", "label", "placeholder", "minDate", "disabled", "loading"]);
    var _g = useState(false), pickerOpen = _g[0], setPickerOpen = _g[1];
    var _h = useState(false), showOverlay = _h[0], setShowOverlay = _h[1];
    var _j = useState(false), clicked = _j[0], setClicked = _j[1];
    var _k = useState(''), overlayInput = _k[0], setOverlayInput = _k[1];
    var pickerRef = useRef(null);
    useOnClickOutside(pickerRef, function () { return setPickerOpen(false); });
    var today = startOfToday();
    var _l = useState(value || today), selectedDay = _l[0], setSelectedDay = _l[1];
    var _m = useState(format(today, 'MMM-yyyy')), currentMonth = _m[0], setCurrentMonth = _m[1];
    var firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());
    var onChange = props.onChange;
    useEffect(function () {
        if (onChange) {
            onChange({
                target: {
                    value: selectedDay
                }
            });
        }
    }, [onChange, selectedDay]);
    var displayValue = useMemo(function () { return (clicked ? format(selectedDay, valueFormat) : ''); }, [selectedDay, valueFormat, clicked]);
    var days = eachDayOfInterval({
        start: startOfWeek(firstDayCurrentMonth),
        end: endOfWeek(endOfMonth(firstDayCurrentMonth))
    });
    function previousMonth() {
        var firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
    }
    function nextMonth() {
        var firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
    }
    function handleFocused() {
        setPickerOpen(true);
        setClicked(true);
    }
    function handleOverlayYear(e) {
        var value = e.target.value;
        if ((value != '' && !numberRegex.test(value)) || value.length > 4) {
            return;
        }
        setOverlayInput(value);
    }
    function handleConfirm() {
        var newDate = new Date().setFullYear(+overlayInput);
        setCurrentMonth(format(newDate, 'MMM-yyyy'));
        setShowOverlay(false);
    }
    function handleGotoMonth(month) {
        var year = numberRegex.test(overlayInput) && overlayInput.length == 4
            ? +overlayInput
            : today.getFullYear();
        var newDate = new Date().setFullYear(year, month);
        setCurrentMonth(format(newDate, 'MMM-yyyy'));
        setShowOverlay(false);
    }
    function isdisabled(date) {
        if (minDate) {
            return isBefore(date, minDate);
        }
        return false;
    }
    return (<div ref={pickerRef} className="relative w-full font-sans">
      <Input type="text" label={label} shape={shape} size={size} color={color} icon={icon} placeholder={placeholder} onFocus={handleFocused} value={displayValue} disabled={disabled} loading={loading} {...props}/>
      <div className={"absolute start-0 top-full isolate z-10 mt-2 w-full border border-muted-200 bg-white p-5 shadow-lg shadow-muted-300/30 dark:border-muted-800 dark:bg-muted-950 dark:shadow-muted-800/20 \n          ".concat(pickerOpen ? 'block' : 'hidden', "\n          ").concat(shape === 'rounded' ? 'rounded-md' : '', "     \n          ").concat(shape === 'smooth' ? 'rounded-lg' : '', "    \n          ").concat(shape === 'curved' ? 'rounded-xl' : '', "    \n          ").concat(shape === 'full' ? 'rounded-xl' : '', "   \n        ")}>
        <div className="w-full text-xs text-muted-800 dark:text-muted-100">
          <div className="flex items-center justify-between">
            <button type="button" onClick={previousMonth} className="flex flex-none items-center justify-center p-1.5 text-muted-500 hover:text-muted-400">
              <span className="sr-only">Previous month</span>
              <ReIcon iconName="BiSolidChevronLeft" className="h-5 w-5" aria-hidden="true"/>
            </button>
            <button type="button" onClick={function () { return setShowOverlay(true); }} className="text-sm font-medium text-muted-800 hover:underline dark:text-muted-100">
              {format(firstDayCurrentMonth, 'MMMM yyyy')}
            </button>
            <button onClick={nextMonth} type="button" className="text-muted-500 flex flex-none items-center justify-center p-1.5 hover:text-muted-400">
              <span className="sr-only">Next month</span>
              <ReIcon iconName="BiSolidChevronRight" className="h-5 w-5" aria-hidden="true"/>
            </button>
          </div>
          <div className="mt-3 grid grid-cols-7">
            {dayLabels.map(function (dayLabel, index) { return (<div key={index} className="py-2 text-center text-[0.65rem] font-normal uppercase text-muted-400">
                {dayLabel}
              </div>); })}
          </div>
          <div className="grid grid-cols-7 text-sm">
            {days.map(function (day, dayIdx) { return (<div key={day.toString()} className={"".concat(dayIdx === 0 ? colStartClasses[getDay(day)] : '')}>
                <button type="button" onClick={function () {
                setSelectedDay(day);
                setPickerOpen(false);
            }} disabled={isdisabled(day)} className={"".concat(pickerStyles({
                isSelected: isEqual(day, selectedDay),
                isToday: isToday(day),
                isSameMonth: isSameMonth(day, firstDayCurrentMonth)
            }), "\n                  ").concat(shape === 'rounded' ? 'rounded-md' : '', "     \n                  ").concat(shape === 'smooth' ? 'rounded-lg' : '', "    \n                  ").concat(shape === 'curved' ? 'rounded-xl' : '', "    \n                  ").concat(shape === 'full' ? 'rounded-full' : '', " \n                  ")}>
                  <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
                </button>
              </div>); })}
          </div>
        </div>

        <div className={"absolute inset-0 flex flex-col justify-between rounded-lg bg-white p-5 text-white transition-all duration-300 dark:bg-muted-950 \n            ".concat(showOverlay ? 'z-[2] opacity-100' : '-z-[1] opacity-0', " \n          ")}>
          <div>
            <input type="text" pattern="(^\d{4}$)|(^\d{4}-\d{2}-\d{2}$)" placeholder="4-digit year" value={overlayInput} onChange={handleOverlayYear} className="mx-auto block w-4/5 border-b border-muted-200 bg-transparent py-1 text-center text-base text-muted-800 focus:outline-none dark:border-muted-800 dark:text-muted-100"/>

            <button type="button" onClick={function () { return setShowOverlay(false); }} className="absolute end-2 top-0 p-2 text-2xl opacity-70">
              &times;
            </button>
          </div>

          <div className="grid grid-cols-3">
            {months.map(function (month, index) { return (<button key={index} type="button" data-month={index + 1} onClick={function () { return handleGotoMonth(index); }} className={"\n                  py-2 text-sm text-muted-800/70 hover:bg-muted-100 hover:text-muted-800 dark:text-muted-400 dark:hover:bg-muted-800 dark:hover:text-white\n                  ".concat(shape === 'rounded' ? 'rounded-md' : '', "     \n                  ").concat(shape === 'smooth' ? 'rounded-lg' : '', "    \n                  ").concat(shape === 'curved' ? 'rounded-xl' : '', "    \n                  ").concat(shape === 'full' ? 'rounded-full' : '', " \n                ")}>
                {month}
              </button>); })}
          </div>

          <Button type="button" color="primary" shape={shape} onClick={handleConfirm} disabled={overlayInput.length != 4} className="mx-auto !h-auto !px-3 !py-[.35rem]">
            Confirm
          </Button>
        </div>
      </div>
    </div>);
};
export default DatePicker;
//# sourceMappingURL=DatePicker.jsx.map