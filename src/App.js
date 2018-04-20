import React, {Component} from 'react';
// import {Layout, Header, Navigation, Drawer} from 'react-mdl';
import Main from "./components/main";
import {Link} from "react-router-dom";

const defaultClassName = "app";

class App extends Component {
    render() {
        return (
            <div className={`${defaultClassName}`}>
                <header className={`${defaultClassName}-header`}>
                    <Link className={`${defaultClassName}-header__icon`} to="/">Avinash Grandhi</Link>
                    <nav className={`${defaultClassName}-header__nav`}>
                        <ul>
                            <Link className="anchorLink" to="/about">About Me</Link>
                            <Link className="anchorLink" to="/experience">Experience</Link>
                            <Link className="anchorLink" to="/skills">Skills</Link>
                            <Link className="anchorLink" to="/contact">Contact</Link>
                        </ul>
                    </nav>
                </header>
                <Main></Main>
                <footer> <i className="fa fa-copyright" aria-hidden="true"></i> copyright</footer>
            </div>
        );
    }
}

export default App;
