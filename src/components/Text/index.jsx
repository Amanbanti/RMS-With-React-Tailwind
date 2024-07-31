import React from "react";

const sizes = {
  h1: "font-ptserif text-[16px] font-normal not-italic sm:text-[13px]",
  textmd: "text-[15px] font-normal not-italic",
  textlg: "text-[16px] font-normal not-italic sm:text-[13px]",
  textxl: "text-[20px] font-normal not-italic sm:text-[17px]",
  text2x1: "text-[24px] font-normal not-italic lg:text-[24px] md:text-[22px] sm:text-[20px]",
  text3x1: "text-[32px] font-normal lg:text-[32px] md:text-[30px] sm:text-[27px]",
};

const Text = ({ children, className = "", as, size = "textlg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-a700_7f font-montserrat ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
