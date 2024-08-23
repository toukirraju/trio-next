import React from 'react';
import Avatar from './Avatar';
var AvatarGroup = function (_a) {
    var avatars = _a.avatars, _b = _a.limit, limit = _b === void 0 ? 4 : _b, _c = _a.size, size = _c === void 0 ? 'xs' : _c;
    return (<div className="flex items-center">
      {avatars.slice(0, limit).map(function (avatar, index) {
            var _a;
            return (<Avatar key={index} overlaps size={size} src={avatar.src} alt={(_a = avatar.alt) !== null && _a !== void 0 ? _a : 'avatar image'}/>);
        })}

      {avatars.length > limit && (<Avatar overlaps size={size} text={"+".concat(avatars.length - limit)}/>)}
    </div>);
};
export default AvatarGroup;
//# sourceMappingURL=AvatarGroup.jsx.map