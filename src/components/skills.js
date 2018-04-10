import React, {Component} from 'react';
import skillsBackground from "../images/skillsBackground2.jpg";
// Skill icons
import reduxIcon from "../images/skillIcons/redux.png";
import reactIcon from "../images/skillIcons/react.png";
import mithrilIcon from "../images/skillIcons/mithril.png";
import htmlIcon from "../images/skillIcons/HTML5.png";
import cssIcon from "../images/skillIcons/css3.png";
import lessIcon from "../images/skillIcons/less.png";
import javascriptIcon from "../images/skillIcons/javascript.png";
import jasmineIcon from "../images/skillIcons/jasmine.png";
import gitIcon from "../images/skillIcons/git.png";
import nodeIcon from "../images/skillIcons/nodejs.png";
import splunkIcon from "../images/skillIcons/splunk.jpg";
import webpackIcon from "../images/skillIcons/webpack.svg";
import npmIcon from "../images/skillIcons/npm.png";
import karmaIcon from "../images/skillIcons/karma.svg";
import jenkinsIcon from "../images/skillIcons/jenkins.png";
import svnIcon from "../images/skillIcons/svn.png";
import javaIcon from "../images/skillIcons/java.jpg";

import FlippingCard from "../helpers/FlippingCard";

class AboutMe extends Component {
    render() {
        return (
            <div className="skills-body" style={ {backgroundImage: `url(${skillsBackground})`}}>
                <FlippingCard cardIcon = {reactIcon}/>
                <FlippingCard cardIcon = {reduxIcon}/>

                <FlippingCard cardIcon = {htmlIcon}/>
                <FlippingCard cardIcon = {cssIcon}/>
                <FlippingCard cardIcon = {javascriptIcon}/>
                <FlippingCard cardIcon = {lessIcon}/>
                <FlippingCard cardIcon = {jasmineIcon}/>
                <FlippingCard cardIcon = {gitIcon}/>
                <FlippingCard cardIcon = {nodeIcon}/>
                <FlippingCard cardIcon = {mithrilIcon}/>
                <FlippingCard cardIcon = {splunkIcon}/>
                <FlippingCard cardIcon = {webpackIcon}/>
                <FlippingCard cardIcon = {npmIcon}/>
                <FlippingCard cardIcon = {karmaIcon}/>
                <FlippingCard cardIcon = {jenkinsIcon}/>
                <FlippingCard cardIcon = {svnIcon}/>
                <FlippingCard cardIcon = {javaIcon}/>
            </div>
        )
    }
}

export default AboutMe;