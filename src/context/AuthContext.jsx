import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode"
import axios from "axios";

export const AuthContext = createContext({});

export function AuthContextProvider({children}) {
    const navigate = useNavigate()
    useEffect(() => {
        //check of er een token is in localstorage
        if(localStorage.getItem("token")){
            //get en decode token
            const decoded = jwtDecode(localStorage.getItem("token"))
            //get token
            const token = localStorage.getItem("token")
            //fetch data met decoded en normale token
            void fetchUserData(decoded, token)
            // console.log("er is een token", token)
        }else{
            //als er geen token is update dan de isAuth
            setIsAuth({isAuth: false,
                user:"",
                status: "done",
            })
            // console.log("er is geen token")
        }
    }, []);



    //declareer de isAuth in de useState en initialiseer als leeg
    const [isAuth, setIsAuth] = useState({
        isAuth: false, user: {
            email: "",
            password: "",
            username: "",
        },
        status: "pending",
    });


    function logOut() {
        setIsAuth({isAuth: false, user: ''});
        localStorage.removeItem("token")
        navigate('/')
        //console.log("Gebruiker is uitgelogd!")
        setIsAuth({isAuth: false,
            user:"",
            status: "done",
        })
    }

    function logIn(name, password, token) {
        setIsAuth((isAuth) => ({
            ...isAuth,
            isAuth: true,
            user: {...isAuth.user, username: name, password: password, token: token}
        }));
        localStorage.setItem("token", token)
        // console.log("token", token)
        const decoded = jwtDecode(token)
        // console.log("decoded", decoded)
        void fetchUserData(decoded, token)
        navigate('/profile')

    }

    async function fetchUserData(decoded, token) {
        const id = decoded.sub
        // console.log("id",id)
        try {
            const response = await axios.get(`https://api.datavortex.nl/gamesrecommendation/users/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })
            setIsAuth({isAuth: true, user:{
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.id,
                },
                status: "done",
            })
        } catch (e) {
            console.error(e)
        }
    }

    const data = {
        isAuth,
        logIn,
        logOut,
    }

    return (
        <AuthContext.Provider value={data}>
            {isAuth.status === "done" ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    )
}