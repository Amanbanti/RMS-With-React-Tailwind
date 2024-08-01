import { Button, SelectBox, Img, Input, Text, Heading } from "../../components";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function HomebuyRowThree() {
  return (
    <div className="mb-[206px] flex justify-center">
      <div className="container-xs flex items-center justify-center md:flex-col md:p-5">
        <div className="flex flex-1 flex-col items-start gap-3.5 md:self-stretch">
          <Heading size="heading4x1" as="h2" className="w-[92%] leading-[78px] !text-w-0 md:w-full">
            <span className="text-w-0">Did You Find Your&nbsp;</span>
            <span className="text-o">Dream Home?</span>
          </Heading>
          <Text size="text3x1" as="p" className="w-[86%] leading-[111.02%] !text-t md:w-full sm:text-[28px]">
            Thank you for getting in touch! if you find your dream home connect with us
          </Text>
        </div>
        <div className="flex w-[44%] justify-center md:w-full">
          <div className="flex w-[92%] flex-col items-start gap-[62px] md:w-full sm:gap-[31px]">
            <div className="relative h-[206px] content-center self-stretch md:h-auto">
              <div className="mx-auto flex-1">
                <div className="flex flex-col items-start gap-[62px] sm:gap-[31px]">
                <Input shape="square" type="number" name="phoneNumber" placeholder={'Phone Number'} className="mb-[88px] w-[48%]" />
                </div>
                <Input shape="square" name="message" placeholder={'Message'} className="relative mt-[-26px]" />

                </div>
                <div className="absolute left-0 right-0 top-0 m-auto flex flex-1 flex-col items-end gap-[62px] sm:gap-[31px]">

                <Input shape="square" type="email" name="email" placeholder={'Your Email'}className="w-[48%]" />
                <SelectBox size="xs" shape="square" indicator={<Img src="images/img_arrow_down_w_0.svg" alt="Arrow Down" className="h-[24px] w-[24px]" />} name="interestedin" placeholder={` Interested in`} options={dropDownOptions} className="w-[48%] gap-4 border-b border-solid border-gray-100_01 text-gray-100_01" />

                </div>
                </div>

                <Button shape="round" className="min-w-[126px] Irounded-1g font-semibold">
                Submit

                </Button>

          </div>
        </div>
      </div>
    </div>
  );
}
