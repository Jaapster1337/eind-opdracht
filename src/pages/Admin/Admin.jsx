import "./Admin.css"
import {AuthContext} from "../../context/AuthContext.jsx";
import {useContext} from "react";
import {useAuthenticatedFetch} from "../../hooks/useAuthenticatedFetch.js";
import {displayUsers} from "../../helpers/displayUsersForAdmin.jsx";
import {pseudoRandomizer} from "../../helpers/pseudoRandomizer.js";

//deze pagina heeft als enige functie om de aangemaakte gebruikers in de database weer te geven
export function Admin() {
    const {isAuth} = useContext(AuthContext)
    const token = localStorage.getItem("token")

    const {data, error, loading} = useAuthenticatedFetch('https://api.datavortex.nl/gamesrecommendation/users', token)

    return (
        <div className="admin-page-wrapper">
            <h1>Welkom {isAuth.user.username}</h1>
            <div className="user-display">
                {displayUsers(data)}
            </div>
        </div>
    );
}
