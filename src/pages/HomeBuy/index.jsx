import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LocationInfo from "../../components/LocationInfo";
import HomebuyColumnThree from "./HomebuydColumnThree";
import HomebuyColumnTwo from "./HomebuyColumnTwo";
import HomebuyRowThree from "./HomebuyRowThree";

export default function HomeBuyPage() {
  return (
    <>
      <Helmet>
        <title>Adama Homes</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-b">
        <div className="flex flex-col gap-8">
          <div className="flex h-[764px] flex-col items-center bg-[url(/public/images/Rectangle11.jpeg)] bg-cover bg-no-repeat md:h-auto">
            <div className="flex h-[142px] items-start justify-center self-stretch bg-[url(/public/images/Rectangle11.jpeg)] bg-cover bg-no-repeat md:h-auto">
              <div className="container-xs mb-[78px] flex justify-center md:p-5">
                <Header className="w-full" />
              </div>
            </div>
            <div className="container-xs mt-36 flex flex-col items-start md:p-5">
              <Heading size="h1" as="h1" className="leading-[139.52%] text-white">
                <span>Find Your&nbsp;</span>
                <span className="text-orange-500">
                  <br />
                  Dream House
                </span>
                <span>&nbsp;in Adama</span>
              </Heading>
            </div>
            <div className="mt-[194px] h-[104px] self-stretch bg-gradient"></div>
          </div>

          <div className="container-xs mt-12">
            <HomebuyColumnTwo />
            <HomebuyColumnThree />
          </div>

          <div className="relative h-[736px]">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-[726px] flex-col gap-[286px] bg-[url(/public/images/Rectangle11.jpeg)] bg-cover bg-no-repeat md:h-auto md:gap-[214px] sm:gap-[143px]">
              <div className="h-[220px] rotate-[-180deg] bg-gradient1"></div>
              <div className="h-[220px] bg-gradient1"></div>
            </div>
            <div className="absolute bottom-0 left-px top-0 my-auto flex h-max w-[34%] flex-col items-start justify-center gap-[136px] bg-gradient1 py-[250px] pl-[136px] pr-14 md:gap-[102px] md:p-5 sm:gap-[68px]">
              <Heading size="h2" as="h2" className="mt-2.5 text-orange-500 sm:text-[28px]">
                About Us
              </Heading>
              <Button shape="round" className="min-w-[126px] rounded-lg font-semibold">
                Read More
              </Button>
            </div>
            <div className="absolute bottom-8 right-[2.25px] top-0 my-auto flex h-max w-[34%] flex-col items-start justify-center bg-gradient1 py-[202px] pl-[102px] pr-14 md:p-5">
              <div className="mr-[22px] mt-6 flex w-[86%] flex-col gap-[42px] md:mr-0 md:w-full">
                <LocationInfo className="mr-2 md:mr-0 md:gap-0.5" />
                <LocationInfo
                  headingText="24/7"
                  subheadingText="Help"
                  descriptionText="24/7 Help service for all customers to guide and support"
                  className="md:gap-0.5"
                />
              </div>
            </div>
            <Text
              as="p"
              className="absolute bottom-0 left-[10%] top-8 my-auto h-max w-[50%] leading-[158.52%] text-white"
            >
              Welcome to Adama Homes, your go-to real estate partner in Adama. We specialize in helping you find your
              dream home, whether you're looking to buy or rent. Our dedicated team is committed to making your home
              search seamless and enjoyable.
            </Text>
          </div>

          <div className="flex h-[726px] flex-col gap-[72px] bg-[url(/public/images/Rectangle11.jpeg)] bg-cover bg-no-repeat m-auto min-width-[320px] max-width-[1440px]">
            <Img src="images/img_group_14.png" alt="Image" className="h-[136px] object-cover" />
            <HomebuyRowThree />
          </div>
          <Footer className="mb-[766px]" />
        </div>
      </div>
    </>
  );
}