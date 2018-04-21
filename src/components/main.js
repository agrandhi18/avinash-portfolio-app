import React from "react";
import {Switch, Route} from "react-router-dom";
import LandingPage from "./landingPage";
import Skills from "./skills";
import Contact from "./contact";
import AboutMe from "./aboutMePage";
import Experience from "./experience";

const Main = () => (
    <Switch>
        <Route exact path ="/skills" component = {Skills}/>
        <Route exact path ="/contact" component = {Contact}/>
        <Route exact path ="/about" component = {AboutMe}/>
        <Route exact path ="/experience" component = {Experience}/>
        <Route path ="/" component = {LandingPage}/>
        <Route path ="/avinash-portfolio-app/" component = {LandingPage}/>
    </Switch>
);

export default Main;