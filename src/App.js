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
import Dashboard from "./components/authenticated/Dashboard";
import { JOBS } from "./utlis/constants";
import { updateJobs } from './redux/reducer/reducer'

function App() {

  const dispatch = useDispatch();
  // const [jobs, setJobs] = useState([]); 

	const APP_ROUTES = {
    NON_AUTHENTICATED: [
      { path: ROUTES.SIGNUP, component: SignUp },
      { path: ROUTES.LOGIN, component: Login },
      { path: ROUTES.FORGOT_PASSWORD, component: ForgotPassword },
      { path: ROUTES.CONFIRM_PASSWORD, component: ConfirmPassword },
    ],
		AUTHENTICATED: [
      { path: ROUTES.DASHBOARD, component: Dashboard },
      { path: ROUTES.HOME, component: Home },
    ],
  };

  // useEffect(() => {
  //   let arr = [];
  //   let roleObj = {
  //     1: "Full Time",
  //     2: "Part Time",
  //     3: "Front End",
  //     4: "Back End",
  //     5: "Full Stack",
  //     6: "SQA",
  //     7: "Graph Designer",
  //     8: "Accountant",
  //     9: "Auditor",
  //     10: "Actor",
  //     11: "Actuary",
  //     12: "Adhesive Bonding Machine Operator",
  //     13: "Tender",
  //     14: "Administrative Law Judge",
  //     15: "Administrative Services Manager",
  //     16: "Adult Basic and Secondary Education and Literacy Teacher",
  //     17: "Instructor",
  //     18: "Advertising Sales Agent",
  //     19: "Advertising and Promotions Manager",
  //     20: "Aerospace Engineering and Operations Technician",
  //     21: "Aerospace Engineer",
  //     22: "Agent",
  //     23: "Business Managers of Artist",
  //     24: "Agricultural Engineer",
  //     25: "Agricultural Equipment Operator",
  //     26: "Agricultural Inspector",
  //     27: "Agricultural Sciences Teacher",
  //     28: "Agricultural Worker",
  //     29: "Agricultural and Food Science Technician",
  //     30: "Air Traffic Controller",
  //     31: "Aircraft Cargo Handling Supervisor",
  //     32: "Aircraft Mechanic",
  //     33: "Service Technician",
  //     34: "Aircraft Structure",
  //     35: "Airfield Operations Specialist",
  //     36: "Airline Pilot",
  //     37: "All Occupation",
  //     38: "Ambulance Driver",
  //     39: "Attendant",
  //     40: "Amusement and Recreation Attendant",
  //     41: "Anesthesiologist",
  //     42: "Animal Breeder",
  //     43: "Animal Control Worker"
  //   }

  //   for (let i = 0; i <= 50; i++) {
  //     arr.push({
  //       // image: require(`./assets/images/${Math.floor(Math.random() * 10) + 1}.png`),
  //       title: roleObj[Math.floor(Math.random() * 43) + 3],
  //       desc: "Every organization is different — some IT teams are organized by the service they provide while others are organized by expertise, like network architecture, systems operations, and development.",
  //       rating: Math.floor(Math.random() * 5) + 1,
  //       role: roleObj[Math.floor(Math.random() * 2) + 1],
  //       salary: Math.floor(Math.random() * 50000) + 5000,
  //     })
  //   }
  //   setJobs(arr);
  // }, [])

  useEffect(() => {
    dispatch(updateJobs(JOBS))
  }, [])

	return (
		<>
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
		</>
	);
}

export default App;
