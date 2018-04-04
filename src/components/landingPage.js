import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: "100%", margin: "auto" }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src= "https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                            alt = "avatar"
                            className= "avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web developer</h1>
                            <hr/>
                            <p>HTML/CSS  | Bootstrap | JavaScript | React | NodeJS</p>
                            <div className= "social-links">
                                {/* LinkedIn*/}
                                <a href="http://google.com" target="_blank" rel= "noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden= "true"></i>
                                </a>

                                 {/* Github*/}
                                 <a href="http://google.com" target="_blank" rel= "noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden= "true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;