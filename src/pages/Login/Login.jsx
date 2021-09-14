import React from "react";
import "./login.css";
export default function Login() {
    return (
        <div className="login">
            <form className="loginForm">
                <label>Email</label>
                <input type="text" placeholder="enter your email" />
                <label>password</label>
                <input type="password" placeholder="enter your password" />
            </form>
            <button className="loginButton">Login</button>
            <button className="loginRegisterButton">Register</button>
        </div>
    );
}
