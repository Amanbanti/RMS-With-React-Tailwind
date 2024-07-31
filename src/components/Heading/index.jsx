import React from "react"
const sizes = {
    single_line_body_small_strong: "font-inter text-[14px] font-semibold",
    h1: "tracking-[-1.92px] text-[64px] font-bold lg:text-[64px] md:text-[48px]",
    h3: "text-[24px] font-semibold lg:text-[24px] md:text-[22px] sm:text-[20px]",
    h2: "text-[32px] font-semibold lg:text-[32px] md:text-[30px] sm:text-[27px]",
    textxs: "text-[9px] font-medium",
    texts: "text-[14px] font-medium",
    headingxs: "text-[14px] font-semibold",
    headings: "text-[15px] font-bold",
    headingmd: "text-[16px] font-semibold sm:text-[13px]",
    headinglg: "text-[20px] font-semibold sm:text-[17px]",
    headingxl: "text-[24px] font-semibold lg:text-[24px] md:text-[22px] sm:text-[20px]",
    heading2xl: "text-[32px] font-semibold lg:text-[32px] md:text-[30px] sm:text-[27px]",
    heading3xl: "text-[48px] font-bold lg:text-[48px] md:text-[44px] sm:text-[40px]",
    heading4xl: "text-[64px] font-bold lg:text-[64px] md:text-[48px]",
  };
  
  const Heading = ({ children, className = "", size = "texts", as, ...restProps }) => {
    const Component = as || "h6";
  
    return (
      <Component className={`text-gray-900_8c font-montserrat ${className} ${sizes[size]}`} {...restProps}>
        {children}
      </Component>
    );
  };

  export {Heading};
  