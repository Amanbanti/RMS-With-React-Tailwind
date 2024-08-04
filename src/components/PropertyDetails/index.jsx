import { Heading, Img, Button } from "../../components";
import React from "react";
import { FaBed, FaBath } from "react-icons/fa";

export default function PropertyDetails({
    propertyImage = "images/img_rectangle_2096.png",
    propertyPrice = "50,000,000 Birr",
    viewDetailsButton = "View Details",
    bedroomsCount = "4 Bedrooms",
    bathroomsCount = "3 Bath",
    propertySize = "535 sq m",
    ...props
}) {
    return (
        <div {...props} className={`${props.className} flex flex-col w-full`}>
            <Img src={propertyImage} alt="50000000 Birr" className="h-[450px] w-full rounded-lg object-cover sm:h-auto" />
            <div className="flex flex-col gap-4 self-stretch rounded-bl-lg rounded-br-lg bg-b2 px-3.5 py-4 sm:gap-4">
                <div className="flex items-center justify-between gap-5">
                    <Heading size="h3" as="h4" className="!text-w-0">
                        {propertyPrice}
                    </Heading>
                    <Button shape="round" className="min-w-[138px] !rounded-lg font-semibold">
                        {viewDetailsButton}
                    </Button>
                </div>
                <div className="flex justify-center rounded-lg border border-1 border-solid p-2.5">
                    <div className="flex items-center">
                            <FaBed  className="mr-2" color="white" size={18} />
                        <Heading size="headingxs" as="p" className="!text-t">
                            {bedroomsCount}
                        </Heading>
                    </div>
                    <div className="flex flex-1 justify-center px-[18px]">
                        <div className="flex flex-1 items-center px-[26px] sm:px-5">
                        <FaBath className=" mr-2" color="white" size={18} />
                            <Heading size="headingxs" as="p" className="!text-t">
                                {bathroomsCount}
                            </Heading>
                        </div>
                        <Heading size="headingxs" as="p" className="!text-t">
                            {propertySize}
                        </Heading>
                    </div>
                </div>
            </div>
        </div>
    );
}