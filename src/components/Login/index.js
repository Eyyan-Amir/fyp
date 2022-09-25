import React from 'react'
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import {
  Typography,
  TextField,
  Button,
  Box,
  FormControl,
  Stack,
} from "@mui/material";
import { ROUTES } from '../../routes';

export default function Login() {

  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = data => {

    let users = JSON.parse(localStorage.getItem("users") || "{}");
		let user = users.find(u => u.email === data.email);

    if (user.password === data.password) {
      localStorage.setItem("validUser", JSON.stringify(user));
      history.push(ROUTES.HOME);
		} else {
			alert("In-valid credential");
		}
  };

  return (
    <div className='signUp'>
      <div className="signUp__left">
        <Box
          sx={{
            maxWidth: 600,
            padding: 4,
            borderRadius: 4,
            boxShadow: 3,
            bgcolor: "background.paper"
          }}
        >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography
            variant="h4"
            component="h4"
            sx={{fontWeight: 600}}
            mb={4}
          >
            Login
          </Typography>
          <Stack spacing={3}>
            <FormControl>
              <TextField
                fullWidth
                label="Email"
                type="email"
                placeholder="Email"
                autoComplete="off"
                error={!!errors.email}
                {...register("email", {
                  required: true
                })}
              />
              {errors.email && (
                <div className="validation-error">Email required!</div>
              )}
            </FormControl>
            <FormControl>
              <TextField
                fullWidth
                label="Password"
                type="password"
                placeholder="Password"
                autoComplete="off"
                error={!!errors.password}
                {...register("password", {
                  required: true
                })}
              />
              {errors.password && (
                <div className="validation-error">Password required!</div>
              )}
            </FormControl>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              >
                <Stack direction="row" alignItems="center">
                  <Button type="submit" variant="contained" size="large">
                    Login
                  </Button>
                  <Link
                    to={ROUTES.SIGNUP}
                    style={{ textDecoration: "none", cursor: "pointer", marginLeft: "24px" }}
                  >
                    <Typography variant="subtitle1" color="primary.main">
                      Sign Up
                    </Typography>
                  </Link>
                </Stack>
                <Link
                  to={ROUTES.FORGOT_PASSWORD}
                  style={{ 
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="subtitle1" color="primary.main">
                    Forgot your password?
                  </Typography>
                </Link>
            </Stack>
          </Stack>
        </form>
        </Box>
      </div>
      <div className="signUp__right">
        <div className="image">
          <img className='img-fluid' src='../assets/signUp.svg' alt='signup' />
        </div>
      </div>
    </div>
  )
}
