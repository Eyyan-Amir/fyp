import React from "react";
import { ROUTES } from "./routes";
import { Switch, Route } from "react-router-dom";
import SignUp from "./components/registration/SignUp";
import NonAuthenticated from "./components/layout/NonAuthenticated";
import Authenticated from "./components/layout/Authenticated";
import {PageNotFound} from "./components/PageNotFound";
import Home from "./components/Home";
import Login from "./components/Login";
import { theme } from "./styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import ForgotPassword from "./components/ForgotPassword.js";
import "./assets/scss/styles.scss";
import ConfirmPassword from "./components/ComfirmPassword";

function App() {
	const APP_ROUTES = {
    NON_AUTHENTICATED: [
      { path: ROUTES.SIGNUP, component: SignUp },
      { path: ROUTES.LOGIN, component: Login },
      { path: ROUTES.FORGOT_PASSWORD, component: ForgotPassword },
      { path: ROUTES.CONFIRM_PASSWORD, component: ConfirmPassword },
    ],
		AUTHENTICATED: [
      { path: ROUTES.HOME, component: Home },
    ],
  };
	return (
		<>
			<div className='App'>
      <ThemeProvider theme={theme}>
				<Switch>
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
		</>
	);
}

export default App;
