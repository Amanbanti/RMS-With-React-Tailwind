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

      {/* Header Section */}
      <div className="flex w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black items-start md:flex-col">
        <div className="mt-3 flex w-[48%] items-start justify-between gap-5 px-[54px] md:w-full md:p-5 sm:flex-col sm:px-4">
          <Link to="/" className="flex flex-col items-center space-y-2">
            <Img src="images/BihouseDoor_x2.svg" alt="Bihousedoor" className="h-10 w-10" />
            <Heading as="h1" className="text-2xl font-wellfleet font-semibold text-white">
              Adama Homes
            </Heading>
          </Link>
        </div>
      </div>

      {/* Sign-In Form Section */}
      <div className="flex w-full h-[calc(100vh-60px)] flex-col items-center justify-center bg-gray-900 py-8">
        <div className="container-xs flex flex-col items-center px-6 lg:px-8 md:px-4 sm:px-3">
          <Heading
            size="heading3x1"
            as="h1"
            className="text-white text-4xl font-bold mb-6"
          >
            Sign In
          </Heading>
          
          {/* Social Login Button */}
          <div className="mt-6 flex w-full max-w-md flex-col items-center gap-4">
            <Button
              color="blue_gray_100"
              size="sm"
              variant="outline"
              shape="round"
              leftIcon={<Img src="images/google.svg" alt="Google" className="h-6 w-6" />}
              className="w-full rounded-lg border border-white text-white hover:bg-blue-600 transition"
            >
              <Link className="self-center font-medium" to="/">
                Continue with Google
              </Link>
            </Button>

            <Text size="text2x1" as="p" className="text-white text-lg">
              or
            </Text>

            {/* Email and Password Inputs */}
            <Input
              color="blue_gray_900"
              size="lg"
              variant="outline"
              type="email"
              name="email"
              placeholder="E-mail"
              className="w-full rounded-lg bg-gray-800 text-white px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-500"
            />
            <Input
              color="blue_gray_900"
              size="lg"
              variant="outline"
              type="password"
              name="password"
              placeholder="Password"
              className="w-full rounded-lg bg-gray-800 text-white px-4 py-2 mb-6 focus:ring-2 focus:ring-blue-500"
            />

            {/* Sign-In Button */}
            <Link to="/" className="w-full">
              <button
                type="button"
                className="w-full rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-3 transition-transform duration-150 ease-in-out active:scale-95 shadow-lg mb-4"
              >
                Sign In
              </button>
            </Link>

            {/* Additional Links */}
            <div className="mt-6 flex flex-col items-center gap-4 text-white">
              <Text size="textxl" as="p" className="text-base font-light">
                Don't have an account?
              </Text>
              <Link to="/signup">
                <Text size="text2x1" as="h2" className="text-lg font-semibold hover:text-blue-400 transition">
                  Create an account
                </Text>
              </Link>
              
              <Link to="/resetpassword" className="mt-4 text-center text-sm font-medium text-blue-400 hover:text-blue-500">
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
