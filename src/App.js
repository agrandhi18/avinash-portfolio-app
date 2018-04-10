import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer} from 'react-mdl';
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header title="Title" scroll className= "header-color">
            <Navigation>
              <Link to="/experience">Experience</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <div className="mainContent">
            <Main style = {{ backgroundColor: "blue"}}></Main>
          </div>
        </Layout>
      </div>
    );
  }
}

export default App;
