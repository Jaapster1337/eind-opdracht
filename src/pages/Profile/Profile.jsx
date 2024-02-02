import "./Profile.css"
import {AuthContext} from "../../context/AuthContext.jsx";
import {useContext} from "react";


export function Profile() {
    const {isAuth} = useContext(AuthContext)
    return (
        <div>
            <h1>Welkom {isAuth.user.username}</h1>
        </div>
    );
}
