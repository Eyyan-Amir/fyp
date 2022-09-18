export const textFieldStyle = () => {
  return {
    color: "rgba(1, 8, 16, 0.87)",
    "& textarea": {
      color: "rgba(1, 8, 16, 0.87)"
    },
    "& label": {
      color: "rgba(1, 8, 16, 0.87)"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(0, 0, 0, 0.23)"
      },
      "&:hover fieldset": {
        borderColor:  "#3C67FF",
      }
    },
    "& input": {
      color: "rgba(1, 8, 16, 0.87)",
    },
    "& .MuiOutlinedInput-root .MuiInputBase-root": {
      color: "rgba(1, 8, 16, 0.87)"
    },
    "& .MuiTypography-root": {
      color: "rgba(1, 8, 16, 0.87)"
    },
    "& .MuiSvgIcon-root": {
      color: "rgba(7, 13, 19, 0.7)"
    },
    "& .MuiInput-root.MuiInput-underline": {
      "&::before": {
        borderBottom: `1px solid rgba(1, 8, 16, 0.87)`
      }
    },
    "& .MuiSelect-select.MuiSelect-outlined": {
      color: "rgba(1, 8, 16, 0.87)"
    },
    "& .Mui-disabled.MuiInputBase-formControl": {
      border: `1px dashed rgba(2, 19, 39, 0.08)`,
      "& .Mui-disabled.MuiOutlinedInput-input": {
      },
      "& svg": {
        color: "rgba(1, 8, 16, 0.87)"
      }
    },
    "& label.Mui-disabled": {
      color: "rgba(7, 13, 19, 0.6)"
    }
  }
}
