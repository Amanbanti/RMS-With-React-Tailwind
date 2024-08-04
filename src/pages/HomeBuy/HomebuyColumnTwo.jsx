
import { Heading, Button, Img } from "../../components";
import PropertyDetails from "../../components/PropertyDetails";
import React, { Suspense, useState } from 'react';
import { TabPanel, Tabs, TabList, Tab } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import TabNavigation from "../../components/TabNavigation";
import { FaChevronDown } from 'react-icons/fa';
import { Link } from "react-router-dom";

const data = [
      {
        propertyImage: "images/Rectangle2093.jpeg",
        propertyPrice: "50,000,000 Birr",
        viewDetailsButton: "View Details",
        bedroomsCount: "4 Bedrooms",
        bathroomsCount: "3 Bath",
        propertySize: "535 sq m",
      },
      {
        propertyImage: "images/Rectangle2094.jpeg",
        propertyPrice: "80,000,000 Birr",
        viewDetailsButton: "View Details",
        bedroomsCount: "5 Bedrooms",
        bathroomsCount: "4 Bath",
        propertySize: "1000 sq m",
      },
      {
        propertyImage: "images/Rectangle2095.jpeg",
        propertyPrice: "13,000,000 Birr",
        viewDetailsButton: "View Details",
        bedroomsCount: "4 Bedrooms",
        bathroomsCount: "3 Bath",
        propertySize: "535 sq m",
      },
      {
        propertyImage: "images/Rectangle2096.jpeg",
        propertyPrice: "100,000,000 Birr",
        viewDetailsButton: "View Details",
        bedroomsCount: "4 Bedrooms",
        bathroomsCount: "3 Bath",
        propertySize: "535 sq m",
      },
      {
        propertyImage: "images/Rectangle20961.jpeg",
        propertyPrice: "30,000,000 Birr",
        viewDetailsButton: "View Details",
        bedroomsCount: "2 Bedrooms",
        bathroomsCount: "1 Bath",
        propertySize: "350 sq m",
      },
      {
        propertyImage: "images/Rectangle20965.jpeg",
        propertyPrice: "10,000,000 Birr",
        viewDetailsButton: "View Details",
        bedroomsCount: "4 Bedrooms",
        bathroomsCount: "3 Bath",
        propertySize: "535 sq m",
      }
    ];
  
export default function HomebuyColumnTwo() {
  const [selectedTab, setSelectedTab] = useState(0); // Track selected tab state

  const handleClick = (index) => {
    setSelectedTab(index);
  };

  return (
    <Tabs
      className="flex flex-col items-center gap-8 "
      selectedTabClassName=" text-slate-50" // Set orange background and white text for selected tab
      selectedTabPanelClassName="tab-panel--selected"
      style={{ marginTop: '-40px' }}

    >
      <div className="container-xs flex flex-col items-center px-14 md:p-5 md:px-5 ">
        <TabList className="flex flex-wrap gap-0.5">
          <Link to="/homebuy">
            <Tab
              className={`px-[24px] py-1 font-inter text-[14px] font-bold text-slate-950 ${
                selectedTab === 0 ? "bg-orange-400" : "bg-zinc-50"
              }`}
              onClick={() => handleClick(0)}
            >
              Buy
            </Tab>
          </Link>
         

        <Link to="/homebuy">
          <Tab
            className={`px-[24px] py-1 font-inter text-[14px] font-bold text-slate-950 z-[50] ${
              selectedTab === 1 ? "bg-orange-400" : "bg-zinc-50"
            }`}
            onClick={() => handleClick(1)}
          >
            Rent
          </Tab>
        </Link>
        </TabList>
      </div>
      <div className="flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col items-center gap-[62px] md:p-5 sm:gap-[31px]">
          <TabNavigation/>
          {[...Array(2)].map((_, index) => (
            <TabPanel key={`tab-panel${index}`} className="relative items-center">
              <div className="w-full" style={{ marginTop: '50px'}}>
                <div className="grid grid-cols-2 justify-center gap-4 md:grid-cols-1">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {data.map((property, index) => (
                      <PropertyDetails {...property} key={`houses${index}`} />
                    ))}
                  </Suspense>
                </div>
              </div>
            </TabPanel>
          ))}
        </div>
      </div>


      
        <div className="flex flex-col items-center gap-1 mt-4"  style={{ marginTop: '-30px' }}>
        <Link to="/">
            <button
              size="x1"
              shape="square"
              className="w-[37px] h-[35px] rounded-full bg-gray-200 flex items-center justify-center"
                >
                  <FaChevronDown size={25} />
            </button>

        </Link>

            <Heading as="h2" className="text-slate-200">
              View More
            </Heading>
        
        </div>
    
      
    </Tabs>
  );
}