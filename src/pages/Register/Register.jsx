import React, {useState} from 'react';
import "./Register.css"
import {Button} from "../../components/button/Button.jsx";
import {Hr} from "../../components/hr/hr.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const apiKey = import.meta.env.VITE_REACT_NOVI_API_KEY;

    function handleSubmit(e) {
        e.preventDefault()
        console.log(name, email, password)
        void register()
    }

    async function register() {
        try {
            const response = await axios.post(
                `https://api.datavortex.nl/gamesrecommendation/users`, {
                    "username": name,
                    "email": email,
                    "password": password,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key': apiKey
                    }
                })
            navigate('/login')
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className="page-wrapper">
            <h1>Registration</h1>
            <Hr classname="custom-hr"/>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="inner-form-wrapper">
                    <div className="background-wrapper">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                               id="name"
                               name="name"
                               value={name}
                               placeholder=">Name<"
                               onChange={(e) => setName(e.target.value)}
                        />

                        <label htmlFor="password">Password</label>
                        <input type="password"
                               id="password"
                               name="password"
                               placeholder=">password<"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                        />

                        <label htmlFor="email">Email</label>
                        <input type="email"
                               id="email"
                               name="email"
                               placeholder=">Email<"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <button type="submit">Register!</button>
                </div>
            </form>
        </div>
    );
}
