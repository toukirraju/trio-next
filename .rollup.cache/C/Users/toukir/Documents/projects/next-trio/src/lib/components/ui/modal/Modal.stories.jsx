import React from 'react';
import Modal from './Modal';
// Meta configuration for Storybook
var meta = {
    title: 'UI/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
        open: { control: 'boolean' },
        size: {
            control: { type: 'radio', options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl'] }
        },
        classes: { control: 'object' },
        children: { control: 'text' },
        isClose: { control: 'boolean' },
        onBackdropClick: { action: 'onBackdropClick' }
    }
};
export default meta;
// Template for stories
var Template = function (args) {
    var _a = React.useState(args.open), isOpen = _a[0], setIsOpen = _a[1];
    var toggleModal = function () {
        setIsOpen(!isOpen);
        if (args.setOpen)
            args.setOpen();
    };
    return (<>
      <button onClick={toggleModal} className="bg-blue-500 text-white px-4 py-2 rounded">
        Open Modal
      </button>
      <Modal {...args} open={isOpen} setOpen={toggleModal}>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
          <h2 className="text-lg font-bold">Modal Title</h2>
          <p className="mt-2">This is the modal content.</p>
        </div>
      </Modal>
    </>);
};
// Default story
export var Default = Template.bind({});
Default.args = {
    open: false,
    size: 'md',
    isClose: true
};
// Custom Size story
export var CustomSize = function (args) {
    var _a = React.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var toggleModal = function () {
        setIsOpen(!isOpen);
    };
    return (<>
      <button onClick={toggleModal} className="bg-blue-500 text-white px-4 py-2 rounded">
        Open Large Modal
      </button>
      <Modal {...args} open={isOpen} setOpen={toggleModal}>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
          <h2 className="text-lg font-bold">Large Modal Title</h2>
          <p className="mt-2">This is the large modal content.</p>
        </div>
      </Modal>
    </>);
};
CustomSize.args = {
    open: false,
    size: 'lg',
    isClose: true
};
// Without Close Button story
export var WithoutCloseButton = Template.bind({});
WithoutCloseButton.args = {
    open: false,
    size: 'md',
    isClose: false
};
// Custom Styling
export var CustomStyling = Template.bind({});
CustomStyling.args = {
    open: false,
    size: 'md',
    isClose: true,
    classes: {
        wrapper: 'bg-red-500 p-8',
        backdrop: 'bg-opacity-50',
        dialog: 'rounded-lg shadow-lg'
    }
};
//# sourceMappingURL=Modal.stories.jsx.map