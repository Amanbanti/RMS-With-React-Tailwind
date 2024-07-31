import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[10px]",
  square: "rounded-[0px]",
};

const variants = {
  outline: {
    indigo_200: "border-indigo-200 border border-solid text-white-a700",
    blue_gray_900: "border-blue_gray-900 border-4 border-solid text-white-a700",
    blue_gray_100: "border-blue_gray-100 border border-solid text-blue_gray-100",
  },
  underline: {},
  gray_100_01: {
    base: "text-gray-100_01 border-b border-gray-100_01 border-solid"
  },
};

const sizes = {
  md: "h-[56px] px-3.5 text-[16px]",
  lg: "h-[60px] px-9 text-[24px]",
  sm: "h-[32px] px-2 text-[10px]",
  xs: "h-[26px] text-[16px]",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "underline",
      size = "xs",
      color = "gray_100_01",
      ...restProps
    },
    ref
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text border-solid ${(shape && shapes[shape]) || ""} ${(variant && variants[variant]?.[color]) || variants[variant]?.base || ""} ${(sizes[size]) || ""}`}
      >
        {!!label && <span className="mr-2">{label}</span>}
        {!!prefix && <span className="mr-2">{prefix}</span>}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          className="w-full appearance-none bg-inherit"
          {...restProps}
        />
        {!!suffix && <span className="ml-2">{suffix}</span>}
      </label>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(['round', 'square']),
  size: PropTypes.oneOf(['md', 'lg', 'sm', 'xs']),
  variant: PropTypes.oneOf(['outline', 'underline', 'gray_100_01']),
  color: PropTypes.oneOf(['indigo_200', 'blue_gray_900', 'blue_gray_100', 'gray_100_01']),
};

export { Input };
