import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Uikit from './Uikit';

export default function Main() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/ui" exact component={Uikit} />
                    <Route path="/about" exact  component={About} />
                </Switch>
            </Router>
        </div>
    )
}