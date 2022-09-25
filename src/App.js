import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import bootstrap from 'bootstrap'
import "./assets/scss/styles.scss";
import { ROUTES } from "./routes";
import { Switch, Route, Redirect } from "react-router-dom";
import SignUp from "./components/registration/SignUp";
import NonAuthenticated from "./components/layout/NonAuthenticated";
import Authenticated from "./components/layout/Authenticated";
import {PageNotFound} from "./components/PageNotFound";
import Login from "./components/Login";
import { theme } from "./styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import ForgotPassword from "./components/ForgotPassword.js";
import ConfirmPassword from "./components/ComfirmPassword";
import Home from "./components/authenticated/Home";
import JobApply from "./components/authenticated/JobApply";
import { JOBS } from "./utlis/constants";
import { updateJobs } from './redux/reducer/reducer'

function App() {

  const dispatch = useDispatch();

	const APP_ROUTES = {
    NON_AUTHENTICATED: [
      { path: ROUTES.SIGNUP, component: SignUp },
      { path: ROUTES.LOGIN, component: Login },
      { path: ROUTES.FORGOT_PASSWORD, component: ForgotPassword },
      { path: ROUTES.CONFIRM_PASSWORD, component: ConfirmPassword },
    ],
		AUTHENTICATED: [
      { path: ROUTES.HOME, component: Home },
      { path: ROUTES.JOB_APPLY, component: JobApply },
    ],
  };

  useEffect(() => {
    dispatch(updateJobs(JOBS))
  }, [])

	return (
    <div className='App'>
      <ThemeProvider theme={theme}>
				<Switch>
        {/* <Redirect from="/" to={ROUTES.SIGNUP} /> */}
          {APP_ROUTES.NON_AUTHENTICATED.map((route, index) => (
						<Route exact key={index} {...route}>
              <NonAuthenticated>
                <route.component />
              </NonAuthenticated>
            </Route>
          ))}
          {APP_ROUTES.AUTHENTICATED.map((route, index) => (
            <Route exact key={index} {...route}>
              <Authenticated>
                <route.component />
              </Authenticated>
            </Route>
          ))}
          <Route component={PageNotFound} />
        </Switch>
      </ThemeProvider>
    </div>
	);
}

export default App;
