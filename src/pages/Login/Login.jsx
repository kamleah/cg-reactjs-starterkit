import React, { useState,Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./Login.scss";
import { BrowserRouter, Route, Link ,useHistory ,hashHistory} from "react-router-dom";
import  Home  from '../Home/screens/Home';
import { } from "react-router"



//import * as navigationHelper from '../../navigation/NavigationHelper';

class Login extends Component {

   validateForm(email,password) {
    return email.length > 0 && password.length > 0;
  }

handleSubmit(event) {
    
    this.props.history.push('/screens')
  }
  render(){
  
   // const history = useHistory();

console.log('Props_Details',JSON.stringify(this.props));
    return (
        <div class="loginBg">
       
        <div class="card-header">
				<h3>Sign In</h3>
				<div class="d-flex justify-content-end social_icon">
					<span><i class="fab fa-facebook-square"></i></span>
					<span><i class="fab fa-google-plus-square"></i></span>
					<span><i class="fab fa-twitter-square"></i></span>
				</div>
			</div>
            {/* <button type="submit" className="btn btn-primary btn-block" onClick={() => this.handleSubmit()}>Submit</button> */}
            {/* <form class="colorWhite" onSubmit={this.handleSubmit}> */}
            <form class="colorWhite">

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={() => this.handleSubmit()}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
       </div>
        )      
}
}
export default Login

