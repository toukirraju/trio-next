import { ReIcon } from "@/components/ReIcon/ReIcon";
import { cn } from "@/utils/cn";
var TimelineItem = function (_a) {
    var icon = _a.icon, children = _a.children, isLast = _a.isLast;
    return (<div className={cn("flex", !isLast && "mb-8")}>
            <div className="relative flex flex-col items-center">
                <div className="w-9 h-9 border border-muted-300 dark:border-muted-400 rounded-full bg-muted-50 dark:bg-muted-700 text-muted-600 dark:text-muted-400 flex items-center justify-center z-10">

                    {icon && (typeof icon === 'string' ? (<ReIcon iconName={icon}/>) : icon)}
                </div>
                {!isLast && (<div className="h-full w-[1px] bg-muted-300 dark:bg-muted-700 absolute top-8"></div>)}
            </div>
            {/* children */}
            {children}
        </div>);
};
export default TimelineItem;
//# sourceMappingURL=TimelineItem.jsx.map