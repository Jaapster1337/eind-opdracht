import React from 'react';
import "./Register.css"
import {Button} from "../../components/button/Button.jsx";
import {Hr} from "../../components/hr/hr.jsx";

export function Register() {
    return (
        <div className="page-wrapper">
            <h1>Registration</h1>
            <Hr classname="custom-hr"/>
            <form className="register-form">
                <div className="inner-form-wrapper">

                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder=">Name<"/>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder=">password<"/>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder=">Email<"/>

                    <Button
                        type="submit"
                        title="Login"
                    />
                </div>
            </form>
        </div>
    );
}
