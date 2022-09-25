export const textFieldStyle = () => {
  return {
    color: "#00204a",
    "&:hover": {
      borderColor:  "#3C67FF",
    },
    "& textarea": {
      color: "#00204a"
    },
    "& label": {
      color: "#00204a !important"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#00204a !important"
      },
      "&:hover fieldset": {
        borderColor:  "#3C67FF",
      }
    },
    "& input": {
      color: "#00204a",
    },
    "& .MuiOutlinedInput-root .MuiInputBase-root": {
      color: "#00204a"
    },
    "& .MuiTypography-root": {
      color: "#00204a"
    },
    "& .MuiSvgIcon-root": {
      color: "rgba(7, 13, 19, 0.7)"
    },
    "& .MuiInput-root.MuiInput-underline": {
      "&::before": {
        borderBottom: `1px solid #00204a`
      }
    },
    "& .MuiSelect-select.MuiSelect-outlined": {
      color: "#00204a"
    },
    "& .Mui-disabled.MuiInputBase-formControl": {
      border: `1px dashed rgba(2, 19, 39, 0.08)`,
      "& svg": {
        color: "#00204a"
      }
    },
    "& label.Mui-disabled": {
      color: "rgba(7, 13, 19, 0.6)"
    }
  }
}
