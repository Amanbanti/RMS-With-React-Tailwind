import { Heading, SelectBox, Img, Button, Text } from "../../components";
import React from 'react';

const dropDownOptions = [
  { label: 'Option1', value: 'option1' },
  { label: 'Option2', value: 'option2' },
  { label: 'Option3', value: 'option3' },
];

export default function Footer({ ...props }) {
  return (
    <footer {...props} className={`${props.className} flex flex-col items-center gap-[54px] sm:gap-[27px]`}>
      <div className="container-xs md:p-5">
        <div className="flex items-center justify-between gap-5 md:flex-col">
          <div className="flex w-[26%] flex-col gap-[18px] md:w-full">
            <Img src="images/img_footer_logo.png" alt="Footer Logo" className="h-[82px] w-[90px] object-contain" />
            <Text size="textmd" as="p" className="leading-[158.52%] text-white">
              At Adama Homes, we offer a wide range of properties to fit every lifestyle and budget. Our experienced
              professionals work closely with sellers to showcase their properties and assist buyers in finding the
              perfect match.
            </Text>
          </div>
          <div className="flex w-[20%] flex-col gap-3 md:w-full">
            <div className="flex flex-col items-start gap-3.5">
              <Heading size="headingxl" as="h4" className="tracking-[0.48px] text-white">
                Contact Us
              </Heading>
              <a href="Buy/Rent/Sell Homes in Adama, Oromia" target="_blank" rel="noreferrer" className="w-full leading-[33px]">
                <Text as="p" className="text-white">Buy/Rent/Sell Homes in Adama, Oromia</Text>
              </a>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  <Img src="images/img_call.svg" alt="Call" className="h-[14px] w-[14px]" />
                  <Text as="p" className="text-white">991-111-1111</Text>
                </div>
                <div className="flex items-center gap-2">
                  <Img src="images/img_checkmark.svg" alt="Checkmark" className="h-[18px] w-[18px]" />
                  <Text as="p" className="w-[90%] leading-[33px] text-white">adamahomes@gmail.com</Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[18%] flex-col gap-16 md:w-full sm:gap-8">
            <div className="flex flex-col items-start gap-3.5">
              <Heading size="headingxl" as="h4" className="tracking-[0.48px] text-white">
                Follow Us
              </Heading>
              <div className="flex justify-between gap-5 self-stretch">
                <Img src="images/img_info.svg" alt="Info" className="h-[32px] w-[32px]" />
                <Button color="blue_gray_900_02" size="xs" shape="round" className="w-[32px] rounded-lg px-1.5">
                  <Img src="images/img_ant_design_youtube_outlined.svg" />
                </Button>
                <Button color="blue_gray_900_02" size="xs" shape="round" className="w-[32px] rounded-lg px-2">
                  <Img src="images/img_simple_line_ico.svg" />
                </Button>
              </div>
            </div>
            <SelectBox
              shape="round"
              indicator={<Img src="images/img_arrowdown.svg" alt="Arrow Down" className="h-[16px] w-[16px]" />}
              getOptionLabel={(e) => (
                <>
                  <div className="flex items-center">
                    <Img src="images/img_globe.svg" alt="Globe" className="h-[16px] w-[18px]" />
                    <span>{e.label}</span>
                  </div>
                </>
              )}
              name="language"
              placeholder="Select Language"
              options={dropDownOptions}
              className="gap-1"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 self-stretch">
        <div className="h-px w-full border-[0.5px] border-solid border-gray-50_11 bg-white" />
        <div className="container-xs flex flex-col items-center px-14 md:p-5 md:px-5">
          <Heading as="p" className="font-ptserif font-normal text-white">
            © 2024 Adama Homes | All Rights Reserved
          </Heading>
        </div>
      </div>
    </footer>
  );
}
