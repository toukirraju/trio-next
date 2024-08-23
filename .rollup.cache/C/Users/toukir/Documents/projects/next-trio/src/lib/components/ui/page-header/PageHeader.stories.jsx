import React from 'react';
import PageHeader from './PageHeader'; // Update the path if needed
// Meta configuration for Storybook
var meta = {
    title: 'UI/PageHeader',
    component: PageHeader,
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        description: { control: 'text' },
        cta: { control: 'text' }
    }
};
export default meta;
// Template for stories
var Template = function (args) { return <PageHeader {...args}/>; };
// Default story
export var Default = Template.bind({});
Default.args = {
    title: 'Page Title',
    description: 'This is the page description.',
    cta: <button className="bg-blue-500 text-white px-4 py-2 rounded">Call to Action</button>
};
// Without Description story
export var WithoutDescription = Template.bind({});
WithoutDescription.args = {
    title: 'Page Title',
    cta: <button className="bg-blue-500 text-white px-4 py-2 rounded">Call to Action</button>
};
// Without CTA story
export var WithoutCTA = Template.bind({});
WithoutCTA.args = {
    title: 'Page Title',
    description: 'This is the page description.'
};
// Custom Styling story
export var CustomStyling = Template.bind({});
CustomStyling.args = {
    title: 'Custom Styled Title',
    description: 'This page header has custom styling.',
    cta: (<button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">Custom CTA</button>)
};
//# sourceMappingURL=PageHeader.stories.jsx.map