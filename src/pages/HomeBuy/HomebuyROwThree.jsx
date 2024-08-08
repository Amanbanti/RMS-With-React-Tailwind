import React, { useState } from "react";
import { Heading, Text } from "../../components";

const dropDownOptions = [
  { label: "Buy", value: "buy" },
  { label: "Rent", value: "rent" },
];

export default function HomebuyRowThree() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="mb-[206px] flex justify-center flex" style={{ marginTop: '200px' }}>
      <div className="container-xs flex items-center justify-center md:flex-col md:p-5 md:flex">
        <div className="flex flex-1 flex-col items-center gap-3.5 md:self-stretch">
          <Heading
            size="heading4x1"
            as="h2"
            className="w-[92%] text-center text-5xl leading-[78px] md:w-full md:text-6xl"
          >
            <span className="text-w-0">Did You Find Your&nbsp;</span>
            <span className="text-o">Dream Home?</span>
          </Heading>
          <Text
            size="text2x1"
            as="p"
            className="w-[86%] text-center text-zinc-200 leading-[111.02%] md:w-full sm:text-[28px] mb-10"
          >
            Thank you for getting in touch! If you find your dream home, connect with us.
          </Text>
        </div>

        <div className="flex justify-center w-[44%] md:w-full">
          <div className="w-[92%] md:w-full sm:w-full">
            <div className="grid gap-16">
              <div className="grid grid-cols-2 gap-6">
              


              <input
                type="text"
                name="name"
                placeholder="Your Name"
                style={{
                  padding: '8px 8px',
                  color: '#ffffff',
                  backgroundColor: 'transparent',
                  borderBottom: '1px solid white',
                  outline: 'none',
                }}
              />


                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  style={{
                    padding: '8px 8px',
                    color: '#ffffff',
                    backgroundColor: 'transparent',
                    borderBottom: '1px solid white',
                    outline: 'none',
                  }}
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  style={{
                    padding: '8px 8px',
                    color: '#ffffff',
                    backgroundColor: 'transparent',
                    borderBottom: '1px solid white',
                    outline: 'none',
                  }}
                />

                <div  style={{
                  padding: '8px 8px',
                  color: '#ffffff',
                  backgroundColor: 'transparent',
                  borderBottom: '1px solid white',
                  outline: 'none',
                }}>
                  <select
                    name="interested-in"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className={`w-full px-2 py-2 text-slate-50 bg-transparent border-b border-white appearance-none focus:outline-none rounded-sm ${
                      selectedOption ? "bg-[#2C2B2B]" : "bg-[#2C2B2B]"
                    } cursor-pointer`}
                  >
                    <option value="" disabled className="cursor-pointer">
                      Interested in
                    </option>
                    {dropDownOptions.map((option) => (
                      <option key={option.value} value={option.value} className="bg-[#2C2B2B] text-slate-50 cursor-pointer">
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                
              </div>
              <input
                type="text"
                name="message"
                placeholder="Message"
                style={{
                  padding: '8px 8px',
                  color: '#ffffff',
                  backgroundColor: 'transparent',
                  borderBottom: '1px solid white',
                  outline: 'none',
                }}
              />
            </div>
            <div className="mt-6">
            <button
              className="px-6 py-2 text-o bg-white rounded-md mt-5 text-xl ml-40 transform transition-transform duration-200 ease-in-out focus:outline-none  active:scale-110 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50"
            >
              Submit
            </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
