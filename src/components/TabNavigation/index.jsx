import React, { useState } from "react";
import { MdTune } from 'react-icons/md';
import { Button, Text } from "../../components";

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
    <div style={{ marginBottom: '-80px' }}>
      <div {...props} className={`${props.className} flex justify-between items-center`}>
        <div className="flex gap-6">
          <Text
            onClick={() => setActiveTab('all')}
            className={`px-6 py-1 text-[14px] font-semibold sm:px-5 border rounded-md cursor-pointer ${
              activeTab === 'all'
                ? 'border-orange-500 text-orange-500'
                : 'border-slate-600 text-slate-600'
            }`}
          >
            {allTabText}
          </Text>
          <Text
            onClick={() => setActiveTab('studio')}
            className={`px-6 py-1 text-[14px] font-semibold sm:px-5 border rounded-md cursor-pointer ${
              activeTab === 'studio'
                ? 'border-orange-500 text-orange-500'
                : 'border-slate-600 text-slate-600'
            }`}
          >
            {studioTabText}
          </Text>
          <Text
            onClick={() => setActiveTab('oneBedroom')}
            className={`px-6 py-1 text-[14px] font-semibold sm:px-5 border rounded-md cursor-pointer ${
              activeTab === 'oneBedroom'
                ? 'border-orange-500 text-orange-500'
                : 'border-slate-600 text-slate-600'
            }`}
          >
            {oneBedroomTabText}
          </Text>
          <Text
            onClick={() => setActiveTab('twoBedroom')}
            className={`px-6 py-1 text-[14px] font-semibold sm:px-5 border rounded-md cursor-pointer ${
              activeTab === 'twoBedroom'
                ? 'border-orange-500 text-orange-500'
                : 'border-slate-600 text-slate-600'
            }`}
          >
            {twoBedroomTabText}
          </Text>
        </div>

        <div className="flex flex-col items-center" style={{ marginLeft: '400px' }}>
          <Button
            shape="round"
            rightIcon={<MdTune size={20} style={{ color: '#000' }} />}
            className="min-w-[126px] !rounded-lg font-semibold"
          >
            {filterButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
