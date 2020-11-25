import React from "react";
import { Link,NavLink } from "react-router-dom";

const Contact = () =>{
    return (
        <div>
            <h1>Hello, I am Contact us Page</h1>
            <NavLink exact activeClassName="activate" to="/">About US</NavLink>
            <NavLink exact activeClassName="activate" to="/contact">Contact US</NavLink>
        </div>

        )
};

export default Contact;
