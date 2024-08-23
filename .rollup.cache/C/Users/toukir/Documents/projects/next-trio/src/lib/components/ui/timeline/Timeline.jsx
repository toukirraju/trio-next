import React from 'react';
import TimelineItem from './components/TimelineItem';
import TimelineContainer from './components/TimelineContainer';
import TimelineTitle from './components/TimelineTitle';
import TimelineSubtitle from './components/TimelineSubtitle';
import TimelineContent from './components/TimelineContent';
var Timeline = function (_a) {
    var activities = _a.activities, content = _a.content, title = _a.title, subtitle = _a.subtitle;
    return (<div className="container mx-auto p-4">
            
            <div className="relative">
                {activities === null || activities === void 0 ? void 0 : activities.map(function (activity, index) { return (<TimelineItem key={index} icon={activity === null || activity === void 0 ? void 0 : activity.icon} isLast={index === (activities === null || activities === void 0 ? void 0 : activities.length) - 1}>
                        <TimelineContainer>
                            {/* check title is string or component */}

                            {title ? (typeof title === 'string' ? (<TimelineTitle>{title}</TimelineTitle>) : (<TimelineTitle>{title(activity)}</TimelineTitle>)) : (activity === null || activity === void 0 ? void 0 : activity.title) ? (<TimelineTitle>
                                        {typeof activity.title === 'string' ? activity.title : activity.title.name}
                                    </TimelineTitle>) : null}

                            {/* check title is string or component */}
                            {subtitle ? (typeof subtitle === 'string' ? (<TimelineSubtitle>{subtitle}</TimelineSubtitle>) : (<TimelineSubtitle>{subtitle(activity)}</TimelineSubtitle>)) : (activity === null || activity === void 0 ? void 0 : activity.subtitle) ? (<TimelineSubtitle>{activity.subtitle}</TimelineSubtitle>) : null}


                            {/* check content is string or component */}
                            {content && (typeof content === 'string' ? (<TimelineContent>{content}</TimelineContent>) : (<TimelineContent>{content(activity)}</TimelineContent>))}
                        </TimelineContainer>
                    </TimelineItem>); })}
            </div>
        </div>);
};
export default Timeline;
//# sourceMappingURL=Timeline.jsx.map