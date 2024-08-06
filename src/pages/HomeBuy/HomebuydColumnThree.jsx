import { Heading, GoogleMap, Text } from "../../components";
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
    

      </div>
    </div>
  );
}
