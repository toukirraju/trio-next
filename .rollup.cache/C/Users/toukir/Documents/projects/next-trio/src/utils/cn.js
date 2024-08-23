import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export const cn = (...args) => {
    return twMerge(clsx(args));
};
//# sourceMappingURL=cn.js.map