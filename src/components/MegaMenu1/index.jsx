import { Text } from "../../components";
import React from "react";

export default function MegaMenu1() {
  return (
    <div className="absolute top-auto z-[99] min-w-[200px] pt-3">
      <div className="w-full rounded-lg bg-white-a700 p-5 shadow-xs">
        <div className="flex gap-[30px]">
          <div className="flex flex-col items-start gap-4 sm:gap-4">
            <Text className="!font-opensans text-[18px] font-bold !text-black-900 sm:text-[15px]">Title 1</Text>
            <div className="flex flex-col items-start gap-3 sm:gap-3">
              <a href="#" className="sm:text-[13px]">
                <Text className="!font-opensans text-[16px] font-normal !text-black-600">Menu 1</Text>
              </a>
              <a href="#" className="self-center sm:text-[13px]">
                <Text className="!font-opensans text-[16px] font-normal !text-black-600">Menu 2</Text>
              </a>
              <a href="#" className="self-center sm:text-[13px]">
                <Text className="!font-opensans text-[16px] font-normal !text-black-600">Menu 3</Text>
              </a>
              <a href="#" className="self-center sm:text-[13px]">
                <Text className="!font-opensans text-[16px] font-normal !text-black-600">Menu 4</Text>
              </a>
              <a href="#" className="self-center sm:text-[13px]">
                <Text className="!font-opensans text-[16px] font-normal !text-black-600">Menu 5</Text>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 sm:gap-4">
            <Text className="!font-opensans text-[18px] font-bold !text-black-900 sm:text-[15px]">Title 2</Text>
            <div className="flex flex-col items-start gap-3 sm:gap-3">
              <a href="#" className="sm:text-[13px]">
                <Text className="!font-opensans text-[16px] font-normal !text-black-600">Menu 1</Text>
              </a>
              <Text className="self-center !font-opensans text-[16px] font-normal !text-black-600 sm:text-[13px]">
                Menu 2
              </Text>
              <Text className="self-center !font-opensans text-[16px] font-normal !text-black-600 sm:text-[13px]">
                Menu 3
              </Text>
              <Text className="self-center !font-opensans text-[16px] font-normal !text-black-600 sm:text-[13px]">
                Menu 4
              </Text>
              <a href="#" className="self-center sm:text-[13px]">
                <Text className="!font-opensans text-[16px] font-normal !text-black-600">Menu 5</Text>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 sm:gap-4">
            <Text className="!font-opensans text-[18px] font-bold !text-black-900 sm:text-[15px]">Title 3</Text>
            <div className="flex flex-col items-start gap-3 sm:gap-3">
              <a href="#" className="sm:text-[13px]">
                <Text className="!font-opensans text-[16px] font-normal !text-black-600">Menu 1</Text>
              </a>
              <a href="#" className="self-center sm:text-[13px]">
                <Text className="!font-opensans text-[16px] font-normal !text-black-600">Menu 2</Text>
              </a>
              <a href="#" className="self-center sm:text-[13px]">
                <Text className="!font-opensans text-[16px] font-normal !text-black-600">Menu 3</Text>
              </a>
              <a href="#" className="self-center sm:text-[13px]">
                <Text className="!font-opensans text-[16px] font-normal !text-black-600">Menu 4</Text>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}