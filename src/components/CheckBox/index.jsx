import React from "react";
import PropTypes from "prop-types";

const variants = {
  primary: `
    border-gray-300 border border-solid
    checked:border-blue-500 checked:bg-blue-500
    checked:border-[3px] checked:border-solid
    checked:focus:border-blue-500 checked:hover:border-blue-500
  `,
};

const sizes = {
  xs: "h-[16px] w-[16px] rounded-sm", // Adjust size as needed
};

const CheckBox = React.forwardRef(
  (
    {
      className = "",
      name = "",
      children,
      label = "",
      id = "checkbox_id",
      onChange,
      variant = "primary",
      size = "xs",
      labelClassName = "",
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <div className={`${className} flex items-center gap-[5px] cursor-pointer`}>
        <input
          className={`${(size && sizes[size]) || ""} ${(variant && variants[variant]) || ""}`}
          ref={ref}
          type="checkbox"
          name={name}
          onChange={handleChange}
          id={id}
          {...restProps}
        />
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
        {children}
      </div>
    );
  }
);

CheckBox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["primary"]),
  onChange: PropTypes.func,
  children: PropTypes.node,
  labelClassName: PropTypes.string,
};

export { CheckBox };
