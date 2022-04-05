import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <h1 className="lg-heading">Robert <span className="text-secondary">Ramirez</span></h1>
            <h2 className="sm-heading">Web Devloper, Programer, and Designer</h2>
            <div className="icons">
                <i href="https://www.linkedin.com/in/robert-s-ramirez/">
                    <img src="https://img.icons8.com/ios-glyphs/60/000000/linkedin.png" alt="linkedin" />
                </i>
                <i href="https://github.com/Akira957">
                    <img src="https://img.icons8.com/material-outlined/48/000000/github.png" alt="github" />
                </i>
            </div>
        </div>
    );
}

export default Home;