import { __assign } from "tslib";
import React, { useState } from 'react';
import RadioHeadless from './RadioHeadless';
// Meta configuration for Storybook
var meta = {
    title: 'Ui/RadioHeadless',
    component: RadioHeadless,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        name: { control: 'text' },
        checked: { control: 'boolean' },
        onChange: { action: 'onChange' }
    }
};
export default meta;
var Template = function (args) {
    var _a = useState(args.checked || false), checked = _a[0], setChecked = _a[1];
    return <RadioHeadless {...args} checked={checked} onChange={function () { return setChecked(!checked); }}/>;
};
// Default story
export var Default = Template.bind({});
Default.args = {
    id: 'default-radio',
    label: 'Default Radio',
    name: 'default-radio-group',
    children: <div className="p-4 border border-gray-300 rounded">Custom Radio Content</div>
};
// Without Label story
export var WithoutLabel = Template.bind({});
WithoutLabel.args = __assign(__assign({}, Default.args), { id: 'without-label-radio', label: undefined });
// Checked story
export var Checked = Template.bind({});
Checked.args = __assign(__assign({}, Default.args), { id: 'checked-radio', label: 'Checked Radio', checked: true });
// Custom Content story
export var CustomContent = Template.bind({});
CustomContent.args = __assign(__assign({}, Default.args), { id: 'custom-content-radio', label: 'Custom Content Radio', children: (<div className="p-4 bg-blue-100 border border-blue-300 rounded-lg">
      <h3 className="text-lg font-bold">Custom Radio</h3>
      <p>This is a custom radio button with rich content.</p>
    </div>) });
// Radio Group story
export var RadioGroup = function () {
    var _a = useState('option1'), selected = _a[0], setSelected = _a[1];
    var handleChange = function (event) {
        setSelected(event.target.value);
    };
    return (<div className="space-y-4">
      <RadioHeadless id="option1" name="radio-group" value="option1" checked={selected === 'option1'} onChange={handleChange}>
        <div className={"p-4 border rounded ".concat(selected === 'option1' ? 'bg-blue-100 border-blue-300' : 'border-gray-300')}>
          Option 1
        </div>
      </RadioHeadless>
      <RadioHeadless id="option2" name="radio-group" value="option2" checked={selected === 'option2'} onChange={handleChange}>
        <div className={"p-4 border rounded ".concat(selected === 'option2' ? 'bg-blue-100 border-blue-300' : 'border-gray-300')}>
          Option 2
        </div>
      </RadioHeadless>
      <RadioHeadless id="option3" name="radio-group" value="option3" checked={selected === 'option3'} onChange={handleChange}>
        <div className={"p-4 border rounded ".concat(selected === 'option3' ? 'bg-blue-100 border-blue-300' : 'border-gray-300')}>
          Option 3
        </div>
      </RadioHeadless>
    </div>);
};
//# sourceMappingURL=RadioHeadless.stories.jsx.map