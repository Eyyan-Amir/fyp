export const textFieldStyle = () => {
  return {
    color: "green",
    "& textarea": {
      color: "green"
    },
    "& label": {
      color: "green"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "green"
      },
      "&:hover fieldset": {
        borderColor: "orange"
      }
    },
    "& input": {
      color: "green",
      "&:-webkit-autofill": {
        "-webkit-box-shadow": ({ isResponsive }) =>
          isResponsive
            ? `0 0 0 100px green inset`
            : `0 0 0 100px green inset`,
        "-webkit-text-fill-color": "green"
      },
      "&[type=number]": {
        "-moz-appearance": "textfield"
      },
      "&::-webkit-outer-spin-button": {
        "-webkit-appearance": "none",
        margin: 0
      },
      "&::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: 0
      }
    },
    "& .MuiOutlinedInput-root .MuiInputBase-root": {
      color: "green"
    },
    "& .MuiTypography-root": {
      color: "green"
    },
    "& .MuiSvgIcon-root": {
      color: "blue"
    },
    "& .MuiInput-root.MuiInput-underline": {
      "&::before": {
        borderBottom: `1px solid ${"green"}`
      }
    },
    "& .MuiSelect-select.MuiSelect-outlined": {
      color: "green"
    },
  };
}
