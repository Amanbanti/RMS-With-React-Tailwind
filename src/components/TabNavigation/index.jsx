import React, { useState } from "react";
import { MdTune } from 'react-icons/md';
import { Button, Text } from "../../components";
import '../../styles/index.css'
export default function TabNavigation({
  allTabText = "All",
  studioTabText = "Studio",
  oneBedroomTabText = "1 Bed Room",
  twoBedroomTabText = "2 Bed Room",
  filterButtonText = "Filters",
  ...props
}) {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className=" md:w-[-300px] sm:w-[330px] large-screen-margin1 small-screen-margin" >
      <div {...props} className={`${props.className} flex justify-between items-center`}>
        <div className="flex flex-row gap-6 sm:gap-3 ">
          <Text
            onClick={() => setActiveTab('all')}
            className={`px-6 py-1 text-[14px] font-semibold sm:px-5 border rounded-md cursor-pointer flex flex-col flex-row items-center sm:h-[30px] sm:w-[47px] sm:text-[8px]  ${
              activeTab === 'all'
                ? 'border-orange-500 text-orange-500'
                : 'border-slate-600 text-slate-600'
            }`} 
          >
            {allTabText}
          </Text>
          <Text
            onClick={() => setActiveTab('studio')}
            className={`px-6 py-1 text-[14px] font-semibold sm:px-5 border rounded-md cursor-pointer sm:h-[30px] flex flex-col flex-row items-center sm:w-[47px] sm:text-[8px] ${
              activeTab === 'studio'
                ? 'border-orange-500 text-orange-500'
                : 'border-slate-600 text-slate-600'
            }`}
          >
            {studioTabText}
          </Text>
          <Text
            onClick={() => setActiveTab('oneBedroom')}
            className={`px-6 py-1 text-[14px] font-semibold sm:px-5 border rounded-md cursor-pointer flex flex-col flex-row items-center sm:h-[30px] sm:w-[47px] sm:text-[8px] ${
              activeTab === 'oneBedroom'
                ? 'border-orange-500 text-orange-500'
                : 'border-slate-600 text-slate-600'
            }`}
          >
            {oneBedroomTabText}
          </Text>
          <Text
            onClick={() => setActiveTab('twoBedroom')}
            className={`px-6 py-1 text-[14px] font-semibold sm:px-5 border rounded-md cursor-pointer flex flex-col flex-row items-center sm:h-[30px] sm:w-[47px] sm:text-[8px] ${
              activeTab === 'twoBedroom'
                ? 'border-orange-500 text-orange-500'
                : 'border-slate-600 text-slate-600'
            }`}
          >
            {twoBedroomTabText}
          </Text>
        </div>

        <div className="flex flex-col flex-row gap-10 items-center my-0 sm:h-[30px] sm:w-[47px] sm:text-[8px]">
          <Button
            shape="round"
            rightIcon={<MdTune size={20} style={{ color: '#000' }} />}
            className="min-w-[126px] !rounded-lg font-semibold large-screen-margin"
            
          >
            {filterButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
