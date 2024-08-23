import { Tab, TabGroup, TabList } from '@headlessui/react';
import React from 'react';
import Tag from '../tag/Tag';
import ListBox from '../form/listbox/Listbox';
var Tabs = function (_a) {
    var data = _a.data, selectedItem = _a.selectedItem, setSelectedItem = _a.setSelectedItem;
    return (<div>
      <TabGroup className="bg-muted-100 dark:bg-gray-800 px-1 rounded-md mt-2 hidden md:block">
        <TabList className="flex gap-4">
          {data.map(function (item) { return (<Tab onClick={function () { return setSelectedItem(item); }} key={item.name} className="py-1 px-3 flex gap-2 items-center text-sm text-gray-600 dark:text-gray-300 focus:outline-none border-2 border-transparent data-[selected]:border-b-2 data-[selected]:border-b-primary-500 dark:hover:bg-slate-700 hover:bg-slate-200">
              {item.name}
              {item.count && (<Tag variant="solid" shape="rounded">
                  {item.count}
                </Tag>)}
            </Tab>); })}
        </TabList>
      </TabGroup>

      <div className="block md:hidden">
        <ListBox selected={selectedItem} setSelected={setSelectedItem} items={data} classNames="z-[4]"/>
      </div>
    </div>);
};
export default Tabs;
//# sourceMappingURL=Tabs.jsx.map