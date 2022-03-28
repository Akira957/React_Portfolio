import React from "react";
import { Link } from "react-router-dom";
import About from "Pages/About";
import Home from "Pages/Home";
import Contact from "Pages/Contact";
import Projects from "Pages/Projects";

class navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo">
                        <a href="https://www.linkedin.com/in/joshua-w-barnes-b7b8a8a6/">
                            <img
                                src="https://avatars2.githubusercontent.com/u/43892490?s=460&u=9c6a1b6b9c8b1a3e3c6f3d6b7a8a8c9b9e6d2a6a&v=4"
                                alt="logo"
                            />
                        </a>
                    </div>
                    <div className="navbar-links">
                        <a href={About}>
                            About
                        </a>
                        <a href={Projects}>
                            Projects
                        </a>
                        <a href={Contact}>
                            Contact
                        </a>
                        <a href={Home}>
                            Home
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default navbar;