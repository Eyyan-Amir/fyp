import React from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import {
  Typography,
  TextField,
  Button,
  Box,
  FormControl,
  Stack,
} from "@mui/material";
import { ROUTES } from '../../routes';

export default function ConfirmPassword() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = data => {
    history.push(ROUTES.DASHBOARD)
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
            Confirm Password
          </Typography>
          <Stack spacing={3}>
            <FormControl>
              <TextField
                fullWidth
                label="New Password"
                type="password"
                placeholder="New Password"
                autoComplete="off"
                error={!!errors.newPassword}
                {...register("newPassword", {
                  required: true
                })}
              />
              {errors.newPassword && (
                <div className="validation-error">New Password required!</div>
              )}
            </FormControl>
            <FormControl>
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                placeholder="Confirm Password"
                autoComplete="off"
                error={!!errors.confirmPassword}
                {...register("confirmPassword", {
                  required: true
                })}
              />
              {errors.confirmPassword && (
                <div className="validation-error">Confirm Password required!</div>
              )}
            </FormControl>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              >
                <Button type="submit" variant="contained" size="large">
                  Save
                </Button>
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
