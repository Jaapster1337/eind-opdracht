import React from 'react';
import "./Login.css"
import {Button} from "../../components/button/Button.jsx";
import {Hr} from "../../components/hr/hr.jsx";

export function Login() {
    return (
        <div className="page-wrapper">
            <h1>Login</h1>
            <Hr classname="custom-hr"/>
            <form className="login-form">
                <div className="inner-form-wrapper">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder=">Email<"/>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder=">Password<"/>
                    <Button
                        type="submit"
                        title="Login"
                    />
                </div>
            </form>
        </div>
    );
}

