'use client';
import React from 'react';
import BaseHeading from '../base-heading/BaseHeading';
import BaseParagraph from '../base-paragraph/BaseParagraph';
var PageHeader = function (_a) {
    var title = _a.title, description = _a.description, cta = _a.cta, badge = _a.badge;
    return (<div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        {/* TILE & DESCRIPTION */}
        <div className="mb-4 md:mb-0 md:mr-4">
          <div className="flex items-center gap-x-2">
            <BaseHeading size="2xl" as="h2" lead="tight" weight="semibold">
              {title}
            </BaseHeading>
            {badge && badge}
          </div>
          <BaseParagraph size="sm" lead="normal">
            {description}
          </BaseParagraph>
        </div>
        {/* CTA BUTTONS */}
        {cta}
      </div>
    </div>);
};
export default PageHeader;
//# sourceMappingURL=PageHeader.jsx.map