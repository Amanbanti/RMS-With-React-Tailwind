import { Heading, Button, Img } from "../../components";
import PropertyDetails from "../../components/PropertyDetails";
import React, { Suspense } from 'react';
import { TabPanel, Tabs, TabList, Tab } from 'react-tabs';

const data = [
  {
    propertyImage: "images/img_rectangle_2096.png",
    propertyPrice: "50,000,000 Birr",
    viewDetailsButton: "View Details",
    bedroomsCount: "4 Bedrooms",
    bathroomsCount: "3 Bath",
    propertySize: "535 sq m",
  },
  {
    propertyImage: "images/img_rectangle_2096_450x576.png",
    propertyPrice: "80,000,000 Birr",
    viewDetailsButton: "View Details",
    bedroomsCount: "5 Bedrooms",
    bathroomsCount: "4 Bath",
    propertySize: "1000 sq m",
  },
  {
    propertyImage: "images/img_rectangle_2096_1.png",
    propertyPrice: "13,000,000 Birr",
    viewDetailsButton: "View Details",
    bedroomsCount: "4 Bedrooms",
    bathroomsCount: "3 Bath",
    propertySize: "535 sq m",
  },
  {
    propertyImage: "images/img_rectangle_2096_2.png",
    propertyPrice: "100,000,000 Birr",
    viewDetailsButton: "View Details",
    bedroomsCount: "4 Bedrooms",
    bathroomsCount: "3 Bath",
    propertySize: "535 sq m",
  },
  {
    propertyImage: "images/img_rectangle_2096_3.png",
    propertyPrice: "30,000,000 Birr",
    viewDetailsButton: "View Details",
    bedroomsCount: "2 Bedrooms",
    bathroomsCount: "1 Bath",
    propertySize: "350 sq m",
  },
  {
    propertyImage: "images/img_rectangle_2096_4.png",
    propertyPrice: "10,000,000 Birr",
    viewDetailsButton: "View Details",
    bedroomsCount: "4 Bedrooms",
    bathroomsCount: "3 Bath",
    propertySize: "535 sq m",
  }
];

export default function HomebuyColumnTwo() {
  return (
    <Tabs
      className="flex flex-col items-center gap-8"
      selectedTabClassName="text-gray-900 border-blue_gray-900_01 border border-solid bg-blue_gray-900_01"
      selectedTabPanelClassName="tab-panel--selected"
    >
      <div className="container-xs flex flex-col items-center px-14 md:p-5 md:px-5">
        <TabList className="flex flex-wrap gap-0.5">
          <Tab className="px-[18px] py-1 font-inter text-[14px] font-semibold text-gray-900">Buy</Tab>
          <Tab className="px-[18px] py-1 font-inter text-[14px] font-semibold text-gray-900">Rent</Tab>
        </TabList>
      </div>
      <div className="flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col items-center gap-[62px] md:p-5 sm:gap-[31px]">
          <Tabs
            className="flex flex-col gap-8 self-stretch"
            selectedTabClassName=""
            selectedTabPanelClassName="relative tab-panel--selected"
          >
            {[...Array(4)].map((_, index) => (
              <TabPanel key={`tab-panel${index}`} className="absolute items-center">
                <div className="w-full">
                  <div className="grid grid-cols-2 justify-center gap-4 md:grid-cols-1">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {data.map((property, index) => (
                        <PropertyDetails {...property} key={"houses" + index} />
                      ))}
                    </Suspense>
                  </div>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 mt-4">
        <Button size="x1" shape="square" className="w-[148px]">
          <Img src="images/img_akar_icons_circ.svg" />
        </Button>
        <a href="#">
          <Heading as="h2" className="text-white">
            View More
          </Heading>
        </a>
      </div>
    </Tabs>
  );
}
