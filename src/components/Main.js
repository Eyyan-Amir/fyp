import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
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
					<Route path='/404' exact component={Error} />
				</Switch>
			</Router>
		</div>
	);
}
