import { Heading, Img, Button, GoogleMap, Text } from "../../components";
import React from "react";

export default function HomebuyColumnThree() {
  return (
    <div className="flex flex-col items-center">
      <div className="container-xs flex flex-col items-start md:p-5">
        <Heading size="h2" as="h2" className="text-o sm:text-[28px]">
          Neighborhood
        </Heading>
        <Text size="h1" as="p">
          Dream Homes around Adama
        </Text>
        <div className="relative mt-8 h-[556px] content-center self-stretch md:h-auto">
          <GoogleMap showMarker={false} className="mx-auto h-[556px] flex-1 rounded-tl-1g rounded-tr-lg" />
          <Heading size="headingxs" as="h3" className="absolute bottom-[29%] right-[39%] m-auto text-t">
            10,750
          </Heading>
        </div>
        <div className="flex items-center justify-center self-stretch rounded-bl-1g rounded-br-1g bg-blue_gray-50 md:flex-col">
          <Button size="6x1" shape="round" leftIcon={<Img src="images/img_icoutlineschool.svg" alt="Ic:outline-school" className="h-[24px] w-[24px]" />}>
            School
          </Button>
        </div>
      </div>
      <div className="min-w-[146px] gap-1 !rounded-1g font-bold md:p-5">
        <div className="flex w-[12%] items-center justify-between gap-5 md:w-full md:p-5">
          <div className="flex items-center gap-1">
            <Img src="images/img_settings.svg" alt="Settings" className="h-[24px] w-[24px]" />
            <Heading as="h4">Hospital</Heading>
          </div>
          <div className="mr-1.5 h-[80px] w-px bg-gray-300_01" />
        </div>
        <div className="flex items-center gap-1 px-1.5 md:p-5">
          <Img src="images/img_fluent_food_16_regular.svg" alt="Fluentfoodsixte" className="h-[24px] w-[24px]" />
          <Heading as="h5">Restaurants</Heading>
        </div>
        <div className="flex flex-1 items-center justify-center px-2 md:self-stretch md:p-5">
          <div className="flex items-center px-2.5">
            <Img src="images/img_cart.svg" alt="Cart" className="h-[24px] w-[24px]" />
            <Heading as="h6">Groceries</Heading>
          </div>
          <div className="m1-5 h-[80px] w-px bg-gray-300_01" />
        </div>
        <div className="flex items-center gap-1 px-4 md:p-5">
          <Img src="images/img_carbon_piggy_bank.svg" alt="Carbonpiggy" className="h-[24px] w-[24px]" />
          <Heading as="p">Bank</Heading>
        </div>
        <div className="flex flex-1 items-center justify-between gap-5 md:self-stretch md:p-5">
          <div className="flex items-center gap-1">
            <Img src="images/img_gg_gym.svg" alt="Gggym" className="h-[24px] w-[24px]" />
            <Heading as="p">Gym</Heading>
          </div>
          <div className="h-[80px] w-px bg-gray-300_01" />
        </div>
        <div className="flex items-center gap-1 md:p-5">
          <Img src="images/img_material_symbol.svg" alt="Materialsymbol" className="h-[24px] w-[24px]" />
          <Heading as="p">Police Station</Heading>
        </div>
        <div className="flex flex-1 items-center">
          <Img src="images/img_cil_bus_alt.svg" alt="Cilbusalt" className="h-[24px] w-[24px]" />
          <Heading as="p">Bus Stop</Heading>
        </div>
      </div>
    </div>
  );
}
