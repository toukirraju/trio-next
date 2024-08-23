import React from 'react';
import FlexTable from './FlexTable';
import FlexTableHeading from './FlexTableHeading';
import Checkbox from '../../form/checkbox/Checkbox';
import FlexTableRow from './FlexTableRow';
import FlexTableCell from './FlexTableCell';
import Avatar from '../../avatar/Avatar';
import Button from '../../button/Button';
import ToggleBox from '../../toggle-box/ToggleBox';
import Image from 'next/image';
import { ReIcon } from '@/components/ReIcon/ReIcon';
import ToggleSwitch from '../../form/toggle-switch/ToggleSwitch';
var team = [
    {
        id: 0,
        src: '/assets/avatars/22.svg',
        name: 'Anna Vrinkof',
        role: 'UI/UX designer',
        expertise: 'UX Design',
        rate: 49,
        status: 'Available'
    },
    {
        id: 1,
        src: '/assets/avatars/3.svg',
        name: 'John Cambell',
        role: 'Sales manager',
        expertise: 'Management ',
        rate: 74,
        status: 'Hired'
    },
    {
        id: 2,
        src: '/assets/avatars/9.svg',
        name: 'Beth Delanoe',
        role: 'Product designer',
        expertise: 'Product',
        rate: 43,
        status: 'Available'
    },
    {
        id: 3,
        src: '/assets/avatars/14.svg',
        name: 'Andrew Higgs',
        role: 'Project manager',
        expertise: 'Project',
        rate: 69,
        status: 'New'
    }
];
var property = [
    {
        groupId: 'group1',
        title: 'group 1',
        groupItems: [
            {
                id: 0,
                src: '/assets/avatars/22.svg',
                location: '345 1/2 3rd St SE',
                listingPrice: '2000000000',
                purchasePrice: '5000000000',
                bed: 2,
                bath: 1,
                garage: 0,
                length: '768sqft',
                globalMarketplace: false,
                personalPage: true,
                sponsors: [
                    '/img/illustrations/layouts/course-1.jpg',
                    '/img/illustrations/layouts/course-2.png'
                ]
            },
            {
                id: 2,
                src: '/assets/avatars/24.svg',
                location: '345 1/2 3rd St SE',
                listingPrice: '2000000000',
                purchasePrice: '5000000000',
                bed: 2,
                bath: 1,
                garage: 0,
                length: '768sqft',
                globalMarketplace: false,
                personalPage: true,
                sponsors: [
                    '/img/illustrations/layouts/course-1.jpg',
                    '/img/illustrations/layouts/course-2.png'
                ]
            },
            {
                id: 3,
                src: '/assets/avatars/25.svg',
                location: '345 1/2 3rd St SE',
                listingPrice: '2000000000',
                purchasePrice: '5000000000',
                bed: 2,
                bath: 1,
                garage: 0,
                length: '768sqft',
                globalMarketplace: false,
                personalPage: true,
                sponsors: [
                    '/img/illustrations/layouts/course-1.jpg',
                    '/img/illustrations/layouts/course-2.png'
                ]
            }
        ]
    },
    {
        groupId: 'group2',
        title: 'group 2',
        groupItems: [
            {
                id: 4,
                src: '/assets/avatars/22.svg',
                location: '345 1/2 3rd St SE',
                listingPrice: '2000000000',
                purchasePrice: '5000000000',
                bed: 2,
                bath: 1,
                garage: 0,
                length: '768sqft',
                globalMarketplace: false,
                personalPage: true,
                sponsors: [
                    '/img/illustrations/layouts/course-1.jpg',
                    '/img/illustrations/layouts/course-2.png'
                ]
            },
            {
                id: 5,
                src: '/assets/avatars/24.svg',
                location: '345 1/2 3rd St SE',
                listingPrice: '2000000000',
                purchasePrice: '5000000000',
                bed: 2,
                bath: 1,
                garage: 0,
                length: '768sqft',
                globalMarketplace: false,
                personalPage: true,
                sponsors: [
                    '/img/illustrations/layouts/course-1.jpg',
                    '/img/illustrations/layouts/course-2.png'
                ]
            },
            {
                id: 6,
                src: '/assets/avatars/25.svg',
                location: '345 1/2 3rd St SE',
                listingPrice: '2000000000',
                purchasePrice: '5000000000',
                bed: 2,
                bath: 1,
                garage: 0,
                length: '768sqft',
                globalMarketplace: false,
                personalPage: true,
                sponsors: [
                    '/img/illustrations/layouts/course-1.jpg',
                    '/img/illustrations/layouts/course-2.png'
                ]
            }
        ]
    },
    {
        id: 7,
        src: '/assets/avatars/22.svg',
        location: '345 1/2 3rd St SE',
        listingPrice: '2000000000',
        purchasePrice: '5000000000',
        bed: 2,
        bath: 1,
        garage: 0,
        length: '768sqft',
        globalMarketplace: false,
        personalPage: true,
        sponsors: ['/img/illustrations/layouts/course-1.jpg', '/img/illustrations/layouts/course-2.png']
    },
    {
        id: 8,
        src: '/assets/avatars/24.svg',
        location: '345 1/2 3rd St SE',
        listingPrice: '2000000000',
        purchasePrice: '5000000000',
        bed: 2,
        bath: 1,
        garage: 0,
        length: '768sqft',
        globalMarketplace: false,
        personalPage: true,
        sponsors: ['/img/illustrations/layouts/course-1.jpg', '/img/illustrations/layouts/course-2.png']
    },
    {
        id: 9,
        src: '/assets/avatars/25.svg',
        location: '345 1/2 3rd St SE',
        listingPrice: '2000000000',
        purchasePrice: '5000000000',
        bed: 2,
        bath: 1,
        garage: 0,
        length: '768sqft',
        globalMarketplace: false,
        personalPage: true,
        sponsors: ['/img/illustrations/layouts/course-1.jpg', '/img/illustrations/layouts/course-2.png']
    }
];
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Table/Flex Table',
    component: FlexTable,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered'
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs']
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
};
export var Default = {
    render: function (args) {
        return (<>
        <FlexTable rowgap="none" header={<>
              <FlexTableHeading type="shrink">
                <Checkbox color="primary"/>
              </FlexTableHeading>
              <FlexTableHeading type="grow">Member</FlexTableHeading>
              <FlexTableHeading type="stable">Expertise</FlexTableHeading>
              <FlexTableHeading type="stable">Rate</FlexTableHeading>
              <FlexTableHeading type="stable">Status</FlexTableHeading>
              <FlexTableHeading type="stable">Actions</FlexTableHeading>
            </>} body={<>
              {team.map(function (item, index) {
                    return (
                    // table row
                    <FlexTableRow rounded="none" key={index}>
                    {/* cell 1 */}
                    <FlexTableCell type="shrink">
                      <Checkbox value="" shape="rounded" color="primary"/>
                    </FlexTableCell>

                    {/* cell 2 */}
                    <FlexTableCell type="grow" label="Member">
                      <div className="flex items-center">
                        <Avatar src={item.src} size="sm"/>
                        <div className="ms-3 leading-none">
                          <h4 className="font-sans text-sm font-medium">{item.name}</h4>
                          <p className="text-muted-400 font-sans text-xs font-normal">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </FlexTableCell>

                    {/* cell 3 */}
                    <FlexTableCell type="stable" label="Expertise" light>
                      {item.expertise}
                    </FlexTableCell>

                    {/* cell 4 */}
                    <FlexTableCell type="stable" label="Rate">
                      <span className="font-medium">{item.rate}/hour</span>
                    </FlexTableCell>

                    {/* cell 5 */}
                    <FlexTableCell type="stable" label="Status">
                      <Button color={item.status === 'Available'
                            ? 'success'
                            : item.status === 'New'
                                ? 'info'
                                : item.status === 'Hired'
                                    ? 'warning'
                                    : undefined} variant="pastel" shape="rounded">
                        {item.status}
                      </Button>
                    </FlexTableCell>

                    {/* cell 6 */}
                    <FlexTableCell type="stable" label="Actions">
                      <Button color="primary" variant="outlined" shape="rounded" className="scale-90">
                        View
                      </Button>
                    </FlexTableCell>
                  </FlexTableRow>);
                })}
            </>}/>
      </>);
    },
    args: {}
};
export var WithGroup = {
    render: function (args) {
        return (<>
        <FlexTable rowgap="md" header={<FlexTableRow rounded="md" border={false} className="mb-2">
              <FlexTableHeading label='selection' type="shrink" className="flex-1 md:flex-none md:w-10">
                {/* checked all  */}
                <Checkbox shape="rounded" color="primary" icon="AiOutlineMinus"/>
              </FlexTableHeading>
              <FlexTableHeading type="shrink" className="w-[150px]">
                Image
              </FlexTableHeading>
              <FlexTableHeading type="grow" className="flex-1">
                Details
              </FlexTableHeading>
              <FlexTableHeading type="grow" className="flex-1">
                Display Status
              </FlexTableHeading>
              <FlexTableHeading type="grow" className="flex-1">
                Sponsors
              </FlexTableHeading>
              <FlexTableHeading type="grow" className="flex-1">
                Actions
              </FlexTableHeading>
            </FlexTableRow>} body={<>
              {property.map(function (item, index) {
                    var _a;
                    return 'groupItems' in item ? (
                    // group select
                    <ToggleBox key={index} shape="curved" header={<div className="flex items-center gap-3 dark:text-muted-400">
                        <Checkbox onClick={function (e) {
                                e.stopPropagation();
                            }} color="primary"/>
                        <div>{item.title}</div>
                      </div>} open>
                    {(_a = item === null || item === void 0 ? void 0 : item.groupItems) === null || _a === void 0 ? void 0 : _a.map(function (gItem, idx) { return (<RenderTableRow key={idx} item={gItem}/>); })}
                  </ToggleBox>) : (<RenderTableRow key={index} item={item}/>);
                })}
            </>}/>
      </>);
    }
};
var RenderTableRow = function (_a) {
    var item = _a.item;
    return (<FlexTableRow rounded="md" key={item.id} className="shadow-md ">
    <FlexTableCell label='selection' type="shrink" className="flex-1 md:flex-none md:w-10">
      <Checkbox value={item.id} shape="rounded" color="primary"/>
    </FlexTableCell>

    {/* cell 1 */}
    <FlexTableCell type="shrink" className="w-full md:w-[150px] py-0 px-0 ">
      <Image src={item === null || item === void 0 ? void 0 : item.src} alt="img" height={500} width={500} className="h-[150px] w-full bg-cover"/>
    </FlexTableCell>

    {/* cell 2 */}
    <FlexTableCell type="grow" className="flex-1">
      <div className="w-full flex flex-col items-center md:items-start gap-3">
        {/* location */}
        <div className="flex gap-2 text-gray-500 font-medium">
          <ReIcon iconName="CiLocationOn"/>
          <span>{item.location}</span>
        </div>

        {/* listing price */}
        <div className="flex gap-2 text-gray-500 font-medium">
          <span>Listing price</span>
          <span className="text-primary-500">{item.listingPrice}</span>
        </div>

        {/* Purchase price */}
        <div className="flex gap-2 text-gray-500 font-medium">
          <span>Purchase price</span>
          <span className="text-primary-500">{item.purchasePrice}</span>
        </div>

        {/* infos */}
        <div className="flex gap-4">
          <div className="flex gap-2 text-gray-500 font-medium">
            <ReIcon className="text-primary-500" iconName="BiSolidBed"/>
            <span>{item.bed}</span>
          </div>
          <div className="flex gap-2 text-gray-500 font-medium">
            <ReIcon className="text-primary-500" iconName="FaBath"/>
            <span>{item.bath}</span>
          </div>
          <div className="flex gap-2 text-gray-500 font-medium">
            <ReIcon className="text-primary-500" iconName="GiHomeGarage"/>
            <span>{item.garage}</span>
          </div>
          <div className="flex gap-2 text-gray-500 font-medium">
            <ReIcon className="text-primary-500" iconName="AiOutlineHome"/>
            <span>{item.length}</span>
          </div>
        </div>
      </div>
    </FlexTableCell>

    {/* cell 3 */}
    <FlexTableCell type="grow" className="flex-1">
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <h3 className="flex gap-2 text-gray-500 font-medium">Display Status</h3>
        <div>
          <div className="flex gap-2 text-gray-500 font-medium">
            <span className="w-full ">Global Marketplace</span>
            <ToggleSwitch id="switch-state" color="primary" className="scale-75"/>
          </div>
          <div className="flex gap-2 text-gray-500 font-medium">
            <span className="w-full ">Personal Page</span>
            <ToggleSwitch id="switch-state2" color="primary" className="scale-75"/>
          </div>
        </div>
      </div>
    </FlexTableCell>

    {/* cell 4 */}
    <FlexTableCell type="grow" className="flex-1">
      <div className=" w-full flex flex-col justify-center items-center">
        {item === null || item === void 0 ? void 0 : item.sponsors.map(function (spons, idx) { return (<div key={idx} className=" h-[60px] mb-2 rounded-md flex flex-col gap-2">
            <Image src={spons} alt="img" height={500} width={500} className="h-full w-[200px] bg-cover rounded-md"/>
          </div>); })}
      </div>
    </FlexTableCell>

    {/* cell 5 */}
    <FlexTableCell type="grow" className="flex-1">
      {/* actions */}
      <div className="w-full flex flex-col   gap-2">
        <Button variant="solid" color="primary">
          <ReIcon iconName="AiFillEye"/>
          <span>View Details</span>
        </Button>
        <Button variant="outlined" color="primary">
          <ReIcon iconName="AiFillEdit"/>
          <span>Edit Property</span>
        </Button>
        <Button variant="outlined" color="muted">
          <ReIcon iconName="FaEllipsisH"/>
          <span>More</span>
        </Button>
      </div>
    </FlexTableCell>
  </FlexTableRow>);
};
//# sourceMappingURL=FlexTable.stories.jsx.map