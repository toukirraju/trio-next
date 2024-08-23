import React from 'react';
import Timeline from './Timeline';
export default {
    title: 'UI/Timeline',
    component: Timeline,
    tags: ['autodocs'],
};
var Template = function (args) { return <Timeline {...args}/>; };
// Sample activities data
var activities = [
    {
        title: 'Project Start',
        subtitle: 'Kickoff meeting',
        icon: '🚀',
    },
    {
        title: { type: 'milestone', name: 'Phase 1 Complete' },
        subtitle: 'Major milestone achieved',
        icon: '🏆',
    },
    {
        title: 'Ongoing Development',
        subtitle: 'Sprint 3',
        icon: '💻',
    },
];
// Basic usage
export var Default = Template.bind({});
Default.args = {
    activities: activities,
};
// With custom content
export var WithCustomContent = Template.bind({});
WithCustomContent.args = {
    activities: activities,
    content: function (activity) { return (<div>
      <p>Custom content for: {activity.title.name || activity.title}</p>
      <p>Icon: {activity.icon}</p>
    </div>); },
};
// With custom title
export var WithCustomTitle = Template.bind({});
WithCustomTitle.args = {
    activities: activities,
    title: function (activity) { return (<span style={{ color: 'blue' }}>
      {activity.title.name || activity.title}
    </span>); },
};
// With custom subtitle
export var WithCustomSubtitle = Template.bind({});
WithCustomSubtitle.args = {
    activities: activities,
    subtitle: function (activity) { return (<span style={{ fontStyle: 'italic' }}>{activity.subtitle}</span>); },
};
// With all custom props
export var FullyCustomized = Template.bind({});
FullyCustomized.args = {
    activities: activities,
    title: function (activity) { return (<h3 style={{ color: 'green' }}>
      {activity.title.name || activity.title}
    </h3>); },
    subtitle: function (activity) { return (<p style={{ fontWeight: 'bold' }}>{activity.subtitle}</p>); },
    content: function (activity) { return (<div style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
      <p>Details for: {activity.title.name || activity.title}</p>
      <p>Status: In Progress</p>
    </div>); },
};
// With string props
export var StringProps = Template.bind({});
StringProps.args = {
    activities: activities,
    title: 'Generic Title',
    subtitle: 'Generic Subtitle',
    content: 'This content appears for all activities',
};
// Empty timeline
export var EmptyTimeline = Template.bind({});
EmptyTimeline.args = {
    activities: [],
};
// Single item timeline
export var SingleItemTimeline = Template.bind({});
SingleItemTimeline.args = {
    activities: [activities[0]],
};
//# sourceMappingURL=Timeline.stories.jsx.map