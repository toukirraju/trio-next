import { RE_DIGIT } from '@/utils/strings';
import React, { useMemo } from 'react';
var InputOtp = function (_a) {
    var value = _a.value, valueLength = _a.valueLength, _b = _a.color, color = _b === void 0 ? 'default' : _b, _c = _a.shape, shape = _c === void 0 ? 'smooth' : _c, onChange = _a.onChange;
    var valueItems = useMemo(function () {
        var valueArray = value.split('');
        var items = [];
        for (var i = 0; i < valueLength; i++) {
            var char = valueArray[i];
            if (RE_DIGIT.test(char)) {
                items.push(char);
            }
            else {
                items.push('');
            }
        }
        return items;
    }, [value, valueLength]);
    var focusToNextInput = function (target) {
        var nextElementSibling = target.nextElementSibling;
        if (nextElementSibling) {
            nextElementSibling.focus();
        }
    };
    var focusToPrevInput = function (target) {
        var previousElementSibling = target.previousElementSibling;
        if (previousElementSibling) {
            previousElementSibling.focus();
        }
    };
    var inputOnChange = function (e, idx) {
        var target = e.target;
        var targetValue = target.value.trim();
        var isTargetValueDigit = RE_DIGIT.test(targetValue);
        if (!isTargetValueDigit && targetValue !== '') {
            return;
        }
        var nextInputEl = target.nextElementSibling;
        // only delete digit if next input element has no value
        if (!isTargetValueDigit && nextInputEl && nextInputEl.value !== '') {
            return;
        }
        targetValue = isTargetValueDigit ? targetValue : ' ';
        var targetValueLength = targetValue.length;
        if (targetValueLength === 1) {
            var newValue = value.substring(0, idx) + targetValue + value.substring(idx + 1);
            onChange(newValue);
            if (!isTargetValueDigit) {
                return;
            }
            focusToNextInput(target);
        }
        else {
            onChange(targetValue);
            target.blur();
        }
    };
    var inputOnKeyDown = function (e) {
        var key = e.key;
        var target = e.target;
        if (key === 'ArrowRight' || key === 'ArrowDown') {
            e.preventDefault();
            return focusToNextInput(target);
        }
        if (key === 'ArrowLeft' || key === 'ArrowUp') {
            e.preventDefault();
            return focusToPrevInput(target);
        }
        var targetValue = target.value;
        // keep the selection range position
        // if the same digit was typed
        target.setSelectionRange(0, targetValue.length);
        if (e.key !== 'Backspace' || target.value !== '') {
            return;
        }
        focusToPrevInput(target);
    };
    var inputOnFocus = function (e) {
        var target = e.target;
        // keep focusing back until previous input
        // element has value
        var prevInputEl = target.previousElementSibling;
        if (prevInputEl && prevInputEl.value === '') {
            return prevInputEl.focus();
        }
        target.setSelectionRange(0, target.value.length);
    };
    return (<div className="flex w-full flex-row items-center justify-center gap-3">
      {valueItems.map(function (digit, idx) { return (<input key={idx} type="text" inputMode="numeric" autoComplete="one-time-code" pattern="\d{1}" maxLength={valueLength} className={"flex w-16 flex-col items-center justify-center border py-5 text-center text-4xl text-muted-800 outline-none ring-primary-700 placeholder:text-muted-300 focus:ring-1 dark:text-muted-100 dark:placeholder:text-muted-700\n          ".concat(color === 'default'
                ? 'hover:border-muted-300 dark:hover:border-muted-600 border-muted-200 bg-white focus:bg-muted-50 dark:border-muted-700 dark:bg-muted-800 dark:focus:bg-muted-900'
                : '', "\n          ").concat(color === 'contrast'
                ? 'hover:border-muted-300 dark:hover:border-muted-700 bg-white focus:bg-muted-50 dark:border-muted-800 dark:bg-muted-950 dark:focus:bg-muted-900'
                : '', "\n          ").concat(color === 'muted'
                ? 'hover:border-muted-300 dark:hover:border-muted-600 border-muted-200 bg-muted-100 focus:bg-muted-100 dark:border-muted-700 dark:bg-muted-800 dark:focus:bg-muted-900'
                : '', "\n          ").concat(color === 'mutedContrast'
                ? 'hover:border-muted-300 dark:hover:border-muted-700 border-muted-200 bg-muted-100 focus:bg-muted-100 dark:border-muted-800 dark:bg-muted-950 dark:focus:bg-muted-900'
                : '', "\n          ").concat(shape === 'rounded' ? 'rounded-md' : '', "\n          ").concat(shape === 'smooth' ? 'rounded-lg' : '', "\n          ").concat(shape === 'curved' ? 'rounded-xl' : '', "\n          ").concat(shape === 'full' ? 'rounded-full' : '', "\n          ")} value={digit} onChange={function (e) { return inputOnChange(e, idx); }} onKeyDown={inputOnKeyDown} onFocus={inputOnFocus} placeholder="0"/>); })}
    </div>);
};
export default InputOtp;
//# sourceMappingURL=InputOtp.jsx.map