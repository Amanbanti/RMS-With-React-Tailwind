import { Button, Input, Heading, Text } from "../../components";
import React from "react";
import { Link } from "react-router-dom";
import { Img } from "../../components";

export default function ResetPassword() {
  return (
    <div >
        
                     
            <div className="flex w-full  bg-gray-900_01 items-start md:flex-col my- 130">
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

            <div className="flex w-full flex-col items-center bg-gray-900_01 py-4 lg:py-8 md:py-5 sm:py-4 min-h-screen">
  <div className="container-xs flex flex-col items-center gap-[32px] px-14 lg:px-5 md:px-5 sm:gap-[20px] sm:px-4 mt-10">
    <Link to="/" className="lg:text-[40px] md:text-[32px] sm:text-[26px]">
      <Heading size="heading3x1" as="h1" className="font-poppins font-bold text-white-a700 text-3xl md:text-4xl lg:text-5xl ">
        Reset Password
      </Heading>
    </Link>
    <div className="flex w-full justify-center lg:w-full md:w-full">
      <div className="flex w-full max-w-md flex-col items-center rounded-[10px] bg-gray-900_01 px-[20px] py-2 sm:px-4">
        <a href="#" className="lg:text-[27px] md:text-[26px] sm:text-[24px]">
          <Text size="text3x1" as="p" className="font-opensans text-amber-600 text-o">
            Forgot password
          </Text>
        </a>
        <Heading
          size="headingmd"
          as="h2"
          className="font-opensans tracking-[0.15px] text-white-a700 lg:text-[13px]"
        >
          Enter your email to reset your password
        </Heading>
      </div>
    </div>
    <div className="mt-5 flex flex-col items-center gap-4 max-w-md w-full mb-20">
      <div className="flex flex-col items-center w-full">
        <Heading size="heading3" as="h3" className="font-opensans tracking-[0.25px] text-white-a700">
          Your Email
        </Heading>
        <Input
          color="indigo_200"
          size="md"
          variant="outline"
          type="email"
          name="email"
          placeholder="hanna@gmail.com"
          className="w-full max-w-md h-10 rounded-[5px] font-opensans tracking-[0.15px]"
        />
      </div>
      <Button
        color="o"
        size="4x1"
        className="w-full max-w-md h-12 rounded-[5px] font-opensans font-bold uppercase tracking-[0.15px] text-white-a700"
      >
        Continue
      </Button>
    </div>
  </div>
</div>





    </div>
  )

   }