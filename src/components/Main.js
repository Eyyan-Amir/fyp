import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import SignUp from "../components/registration/SignUp"
import Uikit from "./Uikit";
import { Error } from "./Error";
export default function Main() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/ui' exact component={Uikit} />
					<Route path='/about' exact component={About} />
					<Route path='/signup' exact component={SignUp} />
					<Route component={Error} />
				</Switch>
			</Router>
		</div>
	);
}
