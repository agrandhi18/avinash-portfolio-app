import React, {Component} from 'react';
import backgroundImage from "../images/background/try2.jpg";
import bioPic from "../images/bio2.PNG";

const defaultClass = "aboutMe";

class Resume extends Component {
    render() {
        return (

            <div className={`${defaultClass} container`} style={ {backgroundImage: `url(${backgroundImage})`}}>
                <div className={`${defaultClass}-icon-container`}>
                    <img src={bioPic} alt = "bioPic"></img>
                </div>
                <div className={`${defaultClass}-text-container`}>
                    <h1>Hello, I am Avinash Grandhi</h1>
                    <h3>I use semicolons and prefer tabs against 4 spaces</h3>

                    <p>I had been working as full stack developer for over 5 years.</p>
                    <p>I strive to build immersive and beautiful web applications through the carefully crafted code and
                        user-centric design.</p>
                    <p>For me, the most attractive aspect of technology is problem solving. Problem solving is a
                        challenge I have always loved – from completing puzzles at home through to programming at
                        university. </p>

                </div>

            </div>

        )
    }
}

export default Resume;