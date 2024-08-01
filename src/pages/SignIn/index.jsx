import { Helmet } from "react-helmet";
import { Heading, Text, Button, Input, Img } from "../../components";
import React from "react";
import { Link } from "react-router-dom";

export default function SignInPage() {
  return (
    <>
      <Helmet>
        <title>Adama Homes</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      <div className="flex w-full bg-gray-900_01 items-start md:flex-col">
        <div className="mt-3 flex w-[48%] items-start justify-between gap-5 px-[54px] md:w-full md:p-5 md:px-5 sm:flex-col sm:px-4">
          <Link to="/">
            <div className="flex flex-col items-center">
              <Img src="images/BihouseDoor_x2.svg" alt="Bihousedoor" className="h-[38px] w-[38px]" />
              <Heading as="h1" className="!font-wellfleet !font-normal !text-white-a700">
                Adama Homes
              </Heading>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex w-full h-[calc(100vh-60px)] flex-col items-center justify-center bg-gray-900_01 py-0">
        <div className="container-xs flex flex-col items-center px-14 lg:px-5 md:px-5 sm:px-4">
          <Heading
            size="heading3x1"
            as="h1"
            className="font-poppins text-white-a700 lg:text-[40px] md:text-[32px] sm:text-[26px] text-3xl"
          >
            Sign In.
          </Heading>
          <div className="mt-6 flex w-[44%] flex-col items-start gap-4 lg:w-full md:w-full">
            <Button
              color="blue_gray_100"
              size="sm"
              variant="outline"
              shape="round"
              leftIcon={<Img src="images/google.svg" alt="Icons8-google 1" className="h-[24px] w-[24px]" />}
              className="gap-5 self-stretch rounded-[18px] font-raleway"
            >
              <Link className="self-center font-raleway text-white-a700 lg:text-[20px]" to="/">Continue with Google</Link>
            </Button>

            <Text size="text2x1" as="p" className="self-center font-raleway text-white-a700 lg:text-[20px]">
              or
            </Text>

            <Input
              color="blue_gray_900"
              size="lg"
              variant="outline"
              type="email"
              name="email"
              placeholder="E-mail"
              className="ml-[18px] w-[88%] rounded-[18px] font-raleway md:ml-0 mb-4"
            />
            <Input
              color="blue_gray_900"
              size="lg"
              variant="outline"
              type="password"
              name="password"
              placeholder="Password"
              className="ml-[18px] w-[88%] rounded-[18px] font-raleway md:ml-0 mb-6"
            />

        <Link className="h-[40px] w-full rounded-[12px]" to="/">
            
        <button
        type="button"
        className="h-[40px] w-full rounded-[12px] bg-orange-500 flex items-center justify-center cursor-pointer text-white text-lg font-poppins transition-transform duration-150 ease-in-out active:scale-95 shadow-md mb-4"
        >
        <span className="text-white">Sign In</span>
        </button>

            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Text size="textxl" as="p" className="font-raleway text-white-a700 lg:text-[17px]">
                Don't have an account?
              </Text>
              <Link to="/signup">
                <Heading size="headingx1" as="h2" className="font-raleway font-bold text-white-a700 lg:text-[20px]">
                    Create an account
                </Heading>
              </Link>
             
            </div>

            <a href="#" className="mt-4 self-center text-center lg:text-[20px] md:mt-4 md:mr-0">
            <Link to="/resetpassword">
              <Heading size="headingxl" as="h2" className="font-raleway font-bold text-o">
                Forgot password?
              </Heading>
            </Link>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
