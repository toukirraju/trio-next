import React, { type FC } from 'react';
export interface DatePickerProps extends Omit<React.HTMLProps<HTMLInputElement>, 'size' | 'value'> {
    value?: Date;
    valueFormat?: string;
    icon?: string;
    label?: string;
    shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full';
    size?: 'sm' | 'md' | 'lg';
    color?: 'default' | 'contrast' | 'muted' | 'mutedContrast';
    placeholder?: string;
    minDate?: Date;
    disabled?: boolean;
    loading?: boolean;
}
declare const DatePicker: FC<DatePickerProps>;
export default DatePicker;
