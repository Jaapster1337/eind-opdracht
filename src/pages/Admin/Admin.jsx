// import "./Admin.css"
import {AuthContext} from "../../context/AuthContext.jsx";
import {useContext} from "react";
import axios from "axios";


export function Admin() {
    const {isAuth} = useContext(AuthContext)

    async function fetchAllUsers(){
        try{
            const response = await axios.get('https://api.datavortex.nl/gamesrecommendation/users',{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            })
            console.log("response data", response.data)
        } catch(e){
            console.error(e)
        }
    }

    void fetchAllUsers()
    return (
        <div>
            <h1>Welkom {isAuth.user.username}</h1>
        </div>
    );
}
