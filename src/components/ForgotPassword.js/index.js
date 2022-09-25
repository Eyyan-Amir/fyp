import React from 'react'
import { useForm } from "react-hook-form";
import { Link  } from 'react-router-dom';
import {
  Typography,
  TextField,
  Button,
  Box,
  FormControl,
  Stack,
} from "@mui/material";
import { ROUTES } from '../../routes';

export default function ForgotPassword() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = data => {
    // debugger;
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
            Forgot Password
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
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              >
                <Button type="submit" variant="contained" size="large">
                  Submit
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
