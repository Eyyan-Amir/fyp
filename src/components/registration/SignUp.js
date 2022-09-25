import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import BaseSelectField from '../base/BaseSelectField';
import { USER_TYPES } from '../../utlis/constants';
import { ROUTES } from '../../routes';
import {
  Typography,
  TextField,
  Button,
  Box,
  FormControl,
  Stack
} from "@mui/material";

export default function SignUp() {

  const [userId, setUerId] = useState("");
  const [isError, setIsError] = useState(false);
  const [userRegister, setUserRegister] = useState([]);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleUserType = e => {
    setUerId(e.target.value);
    setIsError(false);
  }

  const onSubmit = data => {
    let userType = USER_TYPES.find(item => item.id === userId);
    if (!userType) {
      setIsError(true);
      return;
    };
    let userTypeData = {...data, userType}
    setUserRegister([...userRegister, userTypeData])

    history.push(ROUTES.LOGIN)

  };

  const onError = (error, item) => {
    if ([undefined, null, ""].includes(item)) {
      setIsError(true);
    }
  };

  useEffect(() => {
		localStorage.setItem("users", JSON.stringify(userRegister));
	}, [userRegister]);

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
        <form onSubmit={handleSubmit(onSubmit, () => onError(null, userId))}>
          <Typography
            variant="h4"
            component="h4"
            sx={{fontWeight: 600}}
            mb={4}
          >
            Sign Up
          </Typography>
          <Stack spacing={3}>
            <FormControl>
              <TextField
                fullWidth
                label="First name"
                type="text"
                placeholder="First name"
                autoComplete="off"
                error={!!errors.firstName}
                {...register("firstName", {
                  required: true
                })}
              />
              {errors.firstName && (
                <div className="validation-error">First Name required!</div>
              )}
            </FormControl>
            <FormControl>
              <TextField
                fullWidth
                label="Last name"
                type="text"
                placeholder="Last name"
                autoComplete="off"
                error={!!errors.lastName}
                {...register("lastName", {
                  required: true
                })}
              />
              {errors.lastName && (
                <div className="validation-error">Last Name required!</div>
              )}
            </FormControl>
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
            <FormControl>
              <BaseSelectField
                label="User Type"
                error={isError}
                value={userId}
                onChange={handleUserType}
                options={USER_TYPES.map(({ id, name }) => ({
                  value: id,
                  label: name
                }))}
              />
              {isError && (
                <div className="validation-error">User Type required!</div>
              )}
            </FormControl>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Button type="submit" variant="contained" size="large">
                submit
              </Button>
              <Link
                  to={ROUTES.LOGIN}
                  style={{ 
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="subtitle1" color="primary.main">
                    Login
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
