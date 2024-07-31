import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[10px]",
};

const variants = {
  outline: {
    blue_gray_100: "border-blue_gray-100 border border-solid text-white-a700",
    blue_gray_900: "border-blue_gray-900 border-4 border-solid text-white-a700",
  },
  fill: {
    o: "bg-o text-b",
    w_0: "bg-w-0 text-b",
    l: "bg-l",
    blue_gray_900_02: "bg-blue_gray-900_02",
  },
};

const sizes = {
  sm: "h-[32px] px-5 text-[12px]",
  "4xl": "h-[60px] px-[34px] text-[16px]",
  md: "h-[42px] px-[34px] text-[20px]",
  "2xl": "h-[56px] px-[34px] text-[20px]",
  "3xl": "h-[60px] pl-5 pr-[34px] text-[24px]",
  xl: "h-[48px] px-0.5",
  "5xl": "h-[64px] px-2",

"6xl": "h-[80px] px-[34px] text-[14px]",
"xs": "h-[30px]",

"1g": "h-[42px] px-6 text-[14px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "1g",
  color = "w_0",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${(shape && shapes[shape]) || "" } ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};


Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(['square', 'round']),
    size: PropTypes.oneOf(['sm', '4x1', 'md', '2x1', '3x1', 'x1', '5x1', '6x1', 'xs', '1g']),
    variant: PropTypes.oneOf(['outline', 'fill']),
    color: PropTypes.oneOf(['blue_gray_100', 'blue_gray_900', 'o', 'w_0', '1', 'blue_gray_900_02']),
  };
  
  export { Button };
  
