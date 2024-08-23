import { __rest } from "tslib";
import React from 'react';
import Avatar from '../../avatar/Avatar';
import IconButton from '../../button-icon/IconButton';
import { ReIcon } from '@/components/ReIcon/ReIcon';
import { Tooltip } from '../../tooltip/Tooltip';
var InputFileProfile = function (_a) {
    var id = _a.id, value = _a.value, preview = _a.preview, _b = _a.previewSize, previewSize = _b === void 0 ? 'lg' : _b, _c = _a.previewIcon, previewIcon = _c === void 0 ? 'fluent:person-24-filled' : _c, _d = _a.acceptedFileTypes, acceptedFileTypes = _d === void 0 ? ['image/*'] : _d, _e = _a.color, color = _e === void 0 ? 'default' : _e, _f = _a.shape, shape = _f === void 0 ? 'full' : _f, onRemoveFile = _a.onRemoveFile, props = __rest(_a, ["id", "value", "preview", "previewSize", "previewIcon", "acceptedFileTypes", "color", "shape", "onRemoveFile"]);
    return (<div className={"relative inline-flex items-center justify-center border-2 border-muted-300 dark:border-muted-700\n          ".concat(shape === 'rounded' ? 'rounded-md' : '', "\n          ").concat(shape === 'smooth' ? 'rounded-lg' : '', "\n          ").concat(shape === 'curved' ? 'rounded-xl' : '', "\n          ").concat(shape === 'full' ? 'rounded-full' : '', "\n      ")}>
      <input type="file" id={id} name={id} accept={acceptedFileTypes ? acceptedFileTypes.join(',') : undefined} {...props} className={"absolute inset-0 z-[2] h-full w-full cursor-pointer opacity-0 ".concat(value ? 'pointer-events-none' : '')}/>
      <Avatar size={previewSize} shape={shape} src={preview} text="">
        {value ? ('') : (<div className="absolute start-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-muted-500 dark:text-muted-600">
            <ReIcon iconName={previewIcon} className={"\n              ".concat(previewSize === 'lg' ? 'h-8 w-8' : '', " \n              ").concat(previewSize === 'xl' ? 'h-10 w-10' : '', "\n            ")}/>
          </div>)}
      </Avatar>

      {value ? (<div className={"absolute \n            ".concat(previewSize === 'lg' ? 'bottom-0 end-0' : '', "\n            ").concat(previewSize === 'xl' ? 'bottom-0.5 end-0.5' : '', "\n          ")} onClick={function () {
                onRemoveFile === null || onRemoveFile === void 0 ? void 0 : onRemoveFile();
            }}>
          <Tooltip content="Remove file" position="top">
            <IconButton shape="full" size="sm">
              <ReIcon iconName="LiaTimesSolid" className="h-3 w-3"/>
            </IconButton>
          </Tooltip>
        </div>) : ('')}

      {!value ? (<label htmlFor={id} className={"absolute \n            ".concat(previewSize === 'lg' ? 'bottom-0 end-0' : '', "\n            ").concat(previewSize === 'xl' ? 'bottom-0.5 end-0.5' : '', "\n          ")}>
          <Tooltip content="Add picture" position="top">
            {/* @ts-ignore */}
            <IconButton color={color} shape="full" size="sm">
              <ReIcon iconName="AiOutlinePlus" className="h-4 w-4"/>
            </IconButton>
          </Tooltip>
        </label>) : ('')}
    </div>);
};
export default InputFileProfile;
//# sourceMappingURL=InputFileProfile.jsx.map