import React from "react";
import {Switch, Route} from "react-router-dom";
import LandingPage from "./landingPage";
import Aboutme from "./aboutme";
import Contact from "./contact";
import Resume from "./resume";
import Experience from "./experience";

const Main = () => (
    <div>
    <Switch>
        <Route exact path ="/" component = {LandingPage}/>
        <Route exact path ="/aboutme" component = {Aboutme}/>
        <Route exact path ="/contact" component = {Contact}/>
        <Route exact path ="/resume" component = {Resume}/>
        <Route exact path ="/experience" component = {Experience}/>
    </Switch>
    </div>
)

export default Main;