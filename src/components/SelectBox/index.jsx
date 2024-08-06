import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-lg",
};

const variants = {
  outline: {
    t: "border-t border-[0.4px] border-solid text-t",
  },
};

const sizes = {
  xs: "h-[30px] pl-3 text-[16px]",
  sm: "h-[52px] px-4 text-[18px]",
};

const SelectBox = React.forwardRef(
  (
    {
      children,
      className = "",
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      shape,
      variant = "outline",
      size = "sm",
      color = "t",
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className} ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant][color]}`}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          styles={{
            indicatorsContainer: (provided) => ({
              ...provided,
              padding: 0,
              flexShrink: 0,
              width: "max-content",
            }),
            container: (provided) => ({
              ...provided,
              zIndex: 0,
              alignItems: "center",
              backgroundColor: "#2C2B2B",
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "#2C2B2B",
              border: "0 !important",
              boxShadow: "none !important",
              minHeight: "auto",
              width: "100%",
              flexWrap: "nowrap",
              "&:hover": {
                border: "0 !important",
              },
            }),
            input: (provided) => ({
              ...provided,
              color: "inherit",
            }),
            option: (provided, state) => ({
              ...provided,
              color: state.isSelected ? "white" : "#000",
              backgroundColor: state.isSelected ? "#2C2B2B" : "#2C2B2B",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#2C2B2B",
                color: "white",
              },
            }),
            singleValue: (provided, state) => ({
              ...provided,
              color: "white",
              backgroundColor: "#2C2B2B",
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: 0,
              display: "flex",
              flexWrap: "nowrap",
              backgroundColor: "#2C2B2B",
            }),
            placeholder: (provided) => ({
              ...provided,
              margin: 0,
              color: "white",
            }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
            menu: ({ width, ...css }) => ({ ...css }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
        {children}
      </>
    );
  }
);

SelectBox.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  indicator: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["t"]),
};

export { SelectBox };
