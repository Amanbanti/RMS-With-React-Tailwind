import { Heading, SelectBox, Img, Button, Text } from "../../components";
import React, { useState } from "react";
import { AiOutlinePhone, AiOutlineMail, AiOutlineInstagram, AiOutlineYoutube, AiOutlineTwitter, AiOutlineDown } from "react-icons/ai";
import { FaGlobe } from 'react-icons/fa';


const dropDownOptions = [
  { label: 'Amharic', value: 'Amharic' },
  { label: 'Afan Oromo', value: 'Afan Oromo' },
  { label: 'English', value: 'English' },
];

export default function Footer(props) {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <footer {...props} className={`${props.className} flex flex-col items-center gap-[54px] sm:gap-[27px] h-[200px]`}>
              <div className="container-xs md:p-5">
                <div className="flex items-center justify-between gap-5 md:flex-col">
                  <div className="flex w-[26%] flex-col gap-[18px] md:w-full">
                    <Img src="images/BihouseDoor_x2.svg" alt="Footer Logo" className="h-[82px] w-[90px] object-contain" />
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
                          <AiOutlinePhone color="white" size={26} />
                          <Text as="p" className="text-white">991-111-1111</Text>
                        </div>
                        <div className="flex items-center gap-2">
                          <AiOutlineMail size={25} color="white" />
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
                        <Button color="blue_gray_900_02" size="xs" shape="round" className="w-[32px] rounded-lg px-1.5">
                          <AiOutlineInstagram size={24} color="white" />
                        </Button>
                        <Button color="blue_gray_900_02" size="xs" shape="round" className="w-[32px] rounded-lg px-1.5">
                          <AiOutlineYoutube size={24} color="white" />
                        </Button>
                        <Button color="blue_gray_900_02" size="xs" shape="round" className="w-[32px] rounded-lg px-2">
                          <AiOutlineTwitter size={24} color="white" />
                        </Button>
                      </div>
                    </div>

            <div
              style={{
                padding: '8px 8px',
                color: '#ffffff',
                backgroundColor: 'transparent',
                border: '1px solid white',
                borderRadius: '10px',
                outline: 'none',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <FaGlobe style={{ marginRight: '8px', color: 'white' }} />

              <select
                name="interested-in"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className={`w-full px-2 py-2 text-slate-50 bg-transparent border-b border-white appearance-none focus:outline-none rounded-sm ${
                  selectedOption ? "bg-[#2C2B2B]" : "bg-[#2C2B2B]"
                } cursor-pointer`}
                style={{ flex: 1 }}
              >
                
                <option value="" disabled className="cursor-pointer">
                  Select Language
                </option>
                {dropDownOptions.map((option) => (
                  <option key={option.value} value={option.value} className="bg-[#2C2B2B] text-slate-50 cursor-pointer">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-8 self-stretch">
          <div className="h-px w-full border-[0.5px] border-solid border-gray-50_11 border-slate-600" />
          <div className="container-xs flex flex-col items-center px-14 md:p-5 md:px-5">
            <Heading as="p" className="font-ptserif font-normal text-slate-100">
              © 2024 Adama Homes | All Rights Reserved
            </Heading>
          </div>
        </div>

    </footer>
  );
}