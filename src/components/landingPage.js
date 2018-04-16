import React, { Component } from 'react';
import backgroundImage from "../images/mainPage_background_2.png";

const defaultClassName = "landingPage";
class LandingPage extends Component {
    render() {
        return (
            <div className={`${defaultClassName} container`} style={ {backgroundImage: `url(${backgroundImage})`}}>
                <div className={`${defaultClassName}-text-container`}>
                    <h1 className={`${defaultClassName}-header`}>Building great apps isn’t easy but using them should be.</h1>
                    <h1>Full Stack Web developer</h1>
                    <hr/>
                    <p>HTML/CSS | JavaScript | React.js | Node.js</p>
                    <div className={`${defaultClassName}-text-container-social-links`}>
                        {/* LinkedIn*/}
                        <a href="https://www.linkedin.com/in/avinash-grandhi" target="_blank" rel= "noopener noreferrer">
                            <i className="fa fa-linkedin-square" aria-hidden= "true"></i>
                        </a>
                        {/* Github*/}
                        <a href="https://github.com/agrandhi18" target="_blank" rel= "noopener noreferrer">
                            <i className="fa fa-github-square" aria-hidden= "true"></i>
                        </a>
                        {/* Facebook */}
                        <a href="https://www.facebook.com/grandhi.avinash" target="_blank" rel= "noopener noreferrer">
                            <i class="fa fa-facebook-square" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;