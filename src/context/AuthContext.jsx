import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode"
import axios from "axios";

export const AuthContext = createContext({});

export function AuthContextProvider({children}) {
    const navigate = useNavigate()
    useEffect(() => {
        //check of er een token is in localstorage
        if (localStorage.getItem("token")) {
            //get en decode token
            const decoded = jwtDecode(localStorage.getItem("token"))
            //get token
            const token = localStorage.getItem("token")
            //fetch data met decoded en normale token
            void fetchUserData(decoded, token)
        } else {
            //als er geen token is update dan de isAuth
            setIsAuth({
                isAuth: false,
                user: "",
                status: "done",
            })
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

    //bij logout wordt isAuth op false en user leeggemaakt, de token wordt uit localstorage gehaald
    //en de gebruiker wordt naar de homepage gestuurd
    function logOut() {
        setIsAuth({
            isAuth: false,
            user: "",
            status: "done",
        })
        localStorage.removeItem("token")
        navigate('/')
    }

    //de loginfunctie gebruikt de meegegeven variabelen om isAuth te vullen met de waardes
    //en isAuth word op true gezet. daarna wordt er een token aangemaakt met de jwt in de localstorage
    //de token wordt decoded en vervolgen meegestuurd naar de fetchUserData functie
    //de gebruiker wordt naar /profile gestuurd
    function logIn(name, password, token) {
        setIsAuth((isAuth) => ({
            ...isAuth,
            isAuth: true,
            user: {...isAuth.user, username: name, password: password, token: token}
        }));
        localStorage.setItem("token", token)
        const decoded = jwtDecode(token)
        void fetchUserData(decoded, token)
        //if statement om admin door te sturen naar de admin pagina ander ga je naar profile
        if (name === "admin") {
            console.log(name)
            navigate('/admin');
        } else {
            navigate('/profile');
        }
    }

    //fetchUserDisplay krijgt de token en de decoded token. de id/sub wordt uit de decoded token gehaald
    //en hiermee wordt een api request gedaan naar het users endpoint samen met de header die de token bevat
    //met de inhoud van de response wordt het userobject in isAuth gevuld
    async function fetchUserData(decoded, token) {
        const id = decoded.sub
        try {
            const response = await axios.get(`https://api.datavortex.nl/gamesrecommendation/users/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })
            setIsAuth({
                isAuth: true, user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.id,
                },
                status: "done",
            })

        } catch (e) {
            console.error(e)
        }
        void afterLogIn()
    }

    function afterLogIn(){

    }

    //dit is het data-object voor de authContext
    const data = {
        isAuth,
        logIn,
        logOut,
    }

    return (
        //hier worden de children-elementen gewrapt met de context provider en geven we het data-object mee aan de provider
        <AuthContext.Provider value={data}>
            {/*ternary operator die alleen children rendered wanneer status op "done" staat*/}
            {isAuth.status === "done" ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    )
}