import React from 'react';
import { Link } from 'react-router-dom';
import { textFieldStyle } from "../../utlis/index"
import { FormControl, InputLabel, MenuItem, Select, Box } from "@mui/material";
import { ROUTES } from '../../routes';


function Header() {
  return (
    <header className='header'>
      <div className="header__left">
        {/* <div className="logo">
          <img src="" alt="jobEase-logo" className="img-fluid" />
        </div> */}
        <h2>JobEase</h2>
        <ul className='header__left--link'>
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
      <div className="header__right">
        <Box sx={{ minWidth: 150}}>
          <FormControl fullWidth sx={() => textFieldStyle()}>
            <InputLabel shrink={false} >Ayyan</InputLabel>
            <Select label="Name" labelId="demo-simple-select-label">
              <Link to="" style={{ textDecoration: "none" }}>
                <MenuItem sx={theme => ({ color: theme.palette.text.primary })}>
                  Settings
                </MenuItem>
              </Link>
              <Link to={ROUTES.LOGIN} style={{ textDecoration: "none" }}>
                <MenuItem sx={theme => ({ color: theme.palette.text.primary })}>
                  Logout
                </MenuItem>
              </Link>
            </Select>
          </FormControl>
        </Box>
        <Link to="" className='header__right--link'>Employer</Link>
        <Link to="" className='header__right--link'>Service Provider</Link>
      </div>
    </header>
  )
}

export default Header;
