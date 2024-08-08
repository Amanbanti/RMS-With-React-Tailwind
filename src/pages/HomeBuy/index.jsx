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
      <div className="flex flex-col gap-8 h-[5480px] md:h-[10000px] sm:h-[8000px]">
          <div className="relative flex h-[764px] flex-col items-center bg-[url(/public/images/Rectangle11.jpeg)] bg-cover bg-no-repeat md:h-auto z-[1]">
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/75 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/75 to-transparent"></div>
            <div className="flex h-[142px] items-start justify-center self-stretch bg-cover bg-no-repeat md:h-auto">
              <div className="container-xs mb-[78px] flex justify-center md:p-5">
                <Header className="w-full" />
              </div>
            </div>
            <div className="container-xs mt-36 flex flex-col items-start md:p-5">
              <Heading size="h1" as="h1" className="leading-[139.52%] text-white">
                <span className="text-zinc-50">Find Your&nbsp;</span>
                <span className="text-orange-500">
                  <br />
                  Dream House
                </span>
                <span className="text-zinc-50">&nbsp;in Adama</span>
              </Heading>
            </div>
            <div className="absolute top-0 left-0 right-0 mt-[0px] h-[220px] bg-gradient-to-b from-slate-900 to-black-800"></div>
            <div className="absolute top-0 left-0 right-0 mt-[0px] h-[220px] bg-gradient-to-b from-slate-900 to-black-800"></div>
            <div className="mt-[104px] h-[280px] self-stretch bg-gradient-to-t from-slate-900 to-black-800"></div>
          </div>

          <div className="container-xs mt-12">
            <HomebuyColumnTwo />
            <HomebuyColumnThree />
          </div>

          <div className="relative h-[736px] bg-[url(/public/images/Image16.jpeg)] bg-cover">
            <div className="absolute top-0 left-0 right-0 mt-[0px] h-[800px] bg-gradient-to-b from-slate-900 to-black-800"></div>
            <div className="mt-[460px] h-[280px] self-stretch bg-gradient-to-t from-slate-900 to-black-800"></div>
            <div className="absolute bottom-0 left-px top-0 my-auto flex h-max w-[34%] flex-col items-start justify-center gap-[136px] py-[250px] pl-[136px] pr-14 md:gap-[102px] md:p-5 sm:gap-[68px]">
              <Heading size="h2" as="h2" className="mt-2.5 text-orange-500 sm:text-[28px]">
                About Us
              </Heading>
              <Button shape="round" className="min-w-[126px] rounded-lg font-semibold">
                Read More
              </Button>
            </div>
            <div className="absolute bottom-8 right-[2.25px] top-0 my-auto flex h-max w-[34%] flex-col items-start justify-center py-[202px] pl-[102px] pr-14 md:p-5">
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
              className="absolute bottom-0 left-[10%] top-8 my-auto h-max w-[50%] leading-[158.52%] text-zinc-200"
            >
              Welcome to Adama Homes, your go-to real estate partner in Adama. We specialize in helping you find your
              dream home, whether you're looking to buy or rent. Our dedicated team is committed to making your home
              search seamless and enjoyable.
            </Text>
          </div>

          <div className="flex h-[726px]  flex-col gap-[72px] bg-[url(/public/images/subtract.svg)] bg-cover bg-no-repeat m-auto min-width-[320px] max-width-[3440px]">
            <HomebuyRowThree />
          </div>
          <Footer className="mb-[766px] " />
        </div>
      </div>
    </>
  );
}
