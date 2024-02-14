import "./Profile.css"
import {AuthContext} from "../../context/AuthContext.jsx";
import {useContext, useEffect} from "react";


export function Profile() {
    const {isAuth} = useContext(AuthContext)

    useEffect(() => {
        function createGameList(){
            if(!localStorage.getItem(`gamesList-${isAuth.user.username}`)){
                localStorage.setItem(`gamesList-${isAuth.user.username}`,JSON.stringify([]))
            }
        }
        void createGameList()
    }, []);

    return (
        <div>
            <h1>Welkom {isAuth.user.username}</h1>

        </div>
    );
}
