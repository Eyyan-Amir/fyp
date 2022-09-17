import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const ITEM_HEIGHT = 60;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      overflowX: "auto"
    }
  }
};

const BaseSelectField = ({ label, options, sx, fullWidth, id, ...props }) => {
  return (
    <FormControl
      fullWidth={fullWidth || null}
      sx={sx || null}
    >
      <InputLabel id={id || null}>{label}</InputLabel>
      <Select label={label} displayEmpty {...props} MenuProps={MenuProps}>
        <MenuItem
          disabled
          style={{ opacity: 0.5 }}
          value=""
        >
          {label}
        </MenuItem>
        {options?.map(({ value, label }) => (
          <MenuItem
            key={value}
            value={value}
          >
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default BaseSelectField;
