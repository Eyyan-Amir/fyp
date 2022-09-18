import React from 'react';
import { Link } from 'react-router-dom';
import { textFieldStyle } from "../../utlis/index"
import { FormControl, InputLabel, MenuItem, Select, Box } from "@mui/material";


function Header() {
  return (
    <header>
      <nav>
        <div className="header__right">
          <div className="logo">
            <img src="" alt="jobEase-logo" className="img-fluid" />
          </div>
          <ul className='header__right--link'>
            <li>Dashboard</li>
            <li>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                  Jobs
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">My jobs</a></li>
                  <li><a className="dropdown-item" href="#">Job Prefrenced</a></li>
                </ul>
              </div>
            </li>
            <li>CV Manager</li>
          </ul>
        </div>
        <div className="header__left">
          <Box sx={{ minWidth: 230 }} display={{ xs: "none", sm: "block" }}>
            <FormControl fullWidth>
              <InputLabel shrink={false}>Age</InputLabel>
              <Select
                label="Age"
              >
                <MenuItem sx={theme => ({ color: theme.palette.text.primary })}>
                  Settings
                </MenuItem>
                <MenuItem
                    sx={theme => ({ color: theme.palette.text.primary })}
                  >
                    Logout
                  </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </nav>
    </header>
  )
}

export default Header;
