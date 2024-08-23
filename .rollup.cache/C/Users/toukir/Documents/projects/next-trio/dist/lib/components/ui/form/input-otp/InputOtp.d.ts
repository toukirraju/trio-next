import { type FC } from 'react';
export type InputOtpProps = {
    value: string;
    valueLength: number;
    onChange: (value: string) => void;
    color?: 'default' | 'contrast' | 'muted' | 'mutedContrast';
    shape?: 'smooth' | 'rounded' | 'curved' | 'full';
};
declare const InputOtp: FC<InputOtpProps>;
export default InputOtp;
