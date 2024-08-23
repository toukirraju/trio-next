import { __assign } from "tslib";
import React, { useState } from 'react';
import Drawer from './Drawer';
import Button from '../button/Button';
var meta = {
    title: 'UI/Drawer',
    component: Drawer,
    tags: ['autodocs'],
    argTypes: {
        placement: {
            control: 'select',
            options: ['left', 'right', 'top', 'bottom'],
        },
        isOpen: { control: 'boolean' },
        drawerColor: { control: 'color' },
        backdropColor: { control: 'color' },
        backdropOpacity: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
        closeOutSide: { control: 'boolean' },
        width: { control: 'text' },
    },
};
export default meta;
var DrawerTemplate = {
    render: function (args) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
        return (<div>
        <Button shape="rounded" color="primary" onClick={function () { return setIsOpen(true); }}>Open Drawer</Button>
        <Drawer {...args} isOpen={isOpen} setIsOpen={setIsOpen}>
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">Drawer Content</h2>
            <p>This is the content of the drawer.</p>
            <button onClick={function () { return setIsOpen(false); }} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Close Drawer
            </button>
          </div>
        </Drawer>
      </div>);
    },
};
export var Default = __assign(__assign({}, DrawerTemplate), { args: {
        placement: 'left',
        closeOutSide: true,
    } });
export var RightPlacement = __assign(__assign({}, DrawerTemplate), { args: {
        placement: 'right',
        closeOutSide: true,
    } });
export var TopPlacement = __assign(__assign({}, DrawerTemplate), { args: {
        placement: 'top',
        closeOutSide: true,
    } });
export var BottomPlacement = __assign(__assign({}, DrawerTemplate), { args: {
        placement: 'bottom',
        closeOutSide: true,
    } });
export var CustomColors = __assign(__assign({}, DrawerTemplate), { args: {
        placement: 'left',
        closeOutSide: true,
        drawerColor: '#f0f0f0',
        backdropColor: '#000000',
        backdropOpacity: 0.5,
    } });
export var CustomWidth = __assign(__assign({}, DrawerTemplate), { args: {
        placement: 'left',
        closeOutSide: true,
        width: '300px',
    } });
export var NoCloseOutside = __assign(__assign({}, DrawerTemplate), { args: {
        placement: 'left',
        closeOutSide: false,
    } });
//# sourceMappingURL=Drawer.stories.jsx.map