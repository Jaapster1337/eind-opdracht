import React, {useContext, useState} from 'react';
import "./Login.css"
import {Button} from "../../components/button/Button.jsx";
import {Hr} from "../../components/hr/hr.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext.jsx";

export function Login() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const {logIn} = useContext(AuthContext)
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        void postLogIn()
    }

    async function postLogIn() {
        console.log("name", name)
        console.log("password", password)
        try {
            const response = await axios.post(
                `https://api.datavortex.nl/gamesrecommendation/users/authenticate`, {
                    "username": name,
                    "password": password,
                })
            console.log("response", response)
            logIn(name, password, response.data.jwt)
            console.log("postLogIn complete")

        } catch (e) {
            console.error(e)
        } finally {
            console.log("postlogin finally")
        }
    }

    return (
        <div className="page-wrapper">
            <h1>Login</h1>
            <Hr classname="custom-hr"/>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="inner-form-wrapper">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                           id="name"
                           name="name"
                           placeholder=">Username<"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="password">Password</label>
                    <input type="password"
                           id="password"
                           name="password"
                           placeholder=">Password<"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        title="Login"
                    />
                </div>
            </form>
        </div>
    );
}

