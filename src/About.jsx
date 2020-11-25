import React from "react";
import { Link,NavLink } from "react-router-dom";
import "./App.scss";

const About = () =>{
    return (
        <div>
            <NavLink activeClassName="activate" to="/">About US</NavLink>
            <NavLink activeClassName="activate" to="/contact">Contact US</NavLink>
            <h1>Hello, I am About us Page</h1>

            <a href="/">About Us</a>
            <a href="/contact">Contact Us</a>
        </div>

        )
};

export default About;
