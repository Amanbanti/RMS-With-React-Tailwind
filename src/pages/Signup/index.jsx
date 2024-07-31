import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, CheckBox, Input, Text } from "../../components";

export default function Signup() {
  return (
    <>
      <Helmet>
        <title>Adama Homes</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full items-start bg-b md:flex-col">
        <div className="mt-3 flex w-[48%] items-start justify-between gap-5 px-[54px] md:w-full md:p-5 md:px-5 sm:flex-col sm:px-4">
          <div className="flex flex-col items-center">
            <Img src="images/img_bi_house_door.svg" alt="Bihousedoor" className="h-[38px] w-[38px]" />
            <Heading as="h1" className="!font-wellfleet !font-normal !text-white-a700">
              Adama Homes
            </Heading>
          </div>
          <div className="mt-[90px] flex flex-1 flex-col items-start justify-center self-end sm:self-stretch">
            <Text
              size="text3xl"
              as="p"
              className="!font-poppins !font-medium !text-white-a700 lg:text-[27px] md:text-[26px] sm:text-[24px]"
            >
              Find Your Dream House Now
            </Text>
            <div className="mt-[62px] flex flex-col items-start self-stretch">
              <Heading as="h2" className="!font-poppins !text-white-a700">Full Name</Heading>
              <Input
                color="blue_gray_100"
                size="sm"
                variant="outline"
                shape="round"
                type="text"
                name="fullName"
                placeholder="Enter your name"
                className="w-[86%] font-poppins font-medium"
              />
            </div>
            <div className="mt-4 flex flex-col items-start justify-center self-stretch">
              <Heading as="h3" className="!font-poppins !text-white-a700">Email address</Heading>
              <Input
                color="blue_gray_100"
                size="sm"
                variant="outline"
                shape="round"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="mb-1 w-[86%] font-poppins font-medium"
              />
            </div>
            <div className="mt-3 flex flex-col items-start self-stretch">
              <Heading as="h4" className="!font-poppins !text-white-a700">Phone Number</Heading>
              <Input
                color="blue_gray_100"
                size="sm"
                variant="outline"
                shape="round"
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                className="w-[86%] font-poppins font-medium"
              />
            </div>
            <div className="mt-2.5 flex flex-col items-start justify-center self-stretch">
              <div className="flex self-stretch">
                <Heading as="h5" className="!font-poppins !text-white-a700">Password</Heading>
              </div>
              <Input
                color="blue_gray_100"
                size="sm"
                variant="outline"
                shape="round"
                type="password"
                name="password"
                placeholder="Password"
                className="mb-1 w-[86%] font-poppins font-medium"
              />
            </div>
            <div className="mt-1.5 flex flex-col items-start justify-center self-stretch">
              <Heading as="h6" className="!font-poppins !text-white-a700">Confirm Password</Heading>
              <Input
                color="blue_gray_100"
                size="sm"
                variant="outline"
                shape="round"
                type="password"
                name="confirmpassword"
                placeholder="Confirm Password"
                className="mb-1 w-[86%] font-poppins font-medium"
              />
            </div>
            <CheckBox
              name="iagreetotheterm"
              label="I agree to the terms & policy"
              id="iagreetotheterm"
              className="ml-2.5 mt-[22px] gap-1.5 text-left font-poppins text-[9px] font-medium leading-[13px] text-white-a700 md:ml-0"
            />
           <CheckBox
            name="privacypolicy"
            label="Privacy Policy"
            id="privacypolicy"
            className="ml-2.5 mt-3 gap-1.5 text-left text-[9px] font-medium leading-[13px] md:ml-0"
            labelClassName="text-white-a700" // Set label color to white
          />
          <div className="flex flex-col items-center w-[92%] mt-[26px]">
          <button
            type="button"
            className="h-[40px] w-full rounded-[12px] border-b-4 border-solid border-orange-500 bg-orange-500 flex items-center justify-center cursor-pointer text-white text-lg font-poppins transition-transform duration-150 ease-in-out active:scale-95 active:border-orange-300 shadow-md hover:bg-orange-600 active:shadow-inner"
          >
            <span className="text-white">Sign Up</span>
          </button>

    


            <div className="relative flex items-center w-full mt-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 bg-white px-2 text-o text-xs font-poppins">Or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

          </div>

            <Button
              color="blue_gray_100"
              size="sm"
              variant="outline"
              shape="round"
              leftIcon={<Img src="images/img_icons8google_1.svg" alt="Icons8-google 1" className="h-[24px] w-[24px]" />}
              className="ml-[104px] mt-[30px] min-w-[194px] gap-2.5 font-poppins font-medium md:ml-0"
            >
              Sign UP with Google
            </Button>
            <Heading as="p" className="ml-[114px] mt-[22px] !font-poppins !text-black-900 md:ml-0">
              <span className="text-white-a700">Have an account?</span>
              <span className="text-black-900">&nbsp;&nbsp;</span>
              <span className="text-o">Sign In</span>
            </Heading>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-end self-center md:self-stretch md:p-5">
          <Img
            src="images/img_chris_lee_701lt.png"
            alt="Chrislee701lt"
            className="h-[1042px] w-[92%] rounded-bl-[44px] rounded-tl-[44px] object-contain"
          />
        </div>
      </div>
    </>
  );
}
