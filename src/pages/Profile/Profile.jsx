import "./Profile.css"
import {AuthContext} from "../../context/AuthContext.jsx";
import {useContext, useEffect} from "react";


export function Profile() {
    const {isAuth} = useContext(AuthContext)

    useEffect(() => {
        // const localUser = localStorage.getItem()
        console.log(isAuth.user)
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
            <p>This is your profile page</p>
            <p>Your username is:  {isAuth.user.username}</p>
            <p>Your email is: {isAuth.user.email} </p>

        </div>
    );
}
