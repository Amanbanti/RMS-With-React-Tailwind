import { Text, Heading } from "../../components";
import React from "react";

export default function LocationInfo({
    headingText = "40+",
    subheadingText = "Locations",
    descriptionText = "luxury villas and private holiday homes, from all across",
    ...props
}) {
    return (
        <div {...props} className={`${props.className} flex flex-col items-center gap-0.5 flex-1`}>
            <Heading size="heading2xl" as="h2" className="!text-orange-500_cc">
                {headingText}
            </Heading>
            <div className="flex flex-col items-center gap-2 self-stretch">
                <Heading size="headingmd" as="h6" className="!text-t">
                    {subheadingText}
                </Heading>
                <Text size="h1" as="p" className="self-stretch text-center leading-[158.52%] !text-gray-50_7f">
                    {descriptionText}
                </Text>
            </div>
        </div>
    );
}