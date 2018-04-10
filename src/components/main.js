import React from "react";
import {Switch, Route} from "react-router-dom";
import LandingPage from "./landingPage";
import Skills from "./skills";
import Contact from "./contact";
import Resume from "./resume";
import Experience from "./experience";

const Main = () => (
    <Switch>
        <Route exact path ="/" component = {LandingPage}/>
        <Route exact path ="/skills" component = {Skills}/>
        <Route exact path ="/contact" component = {Contact}/>
        <Route exact path ="/resume" component = {Resume}/>
        <Route exact path ="/experience" component = {Experience}/>
    </Switch>
);

export default Main;