import '../App.css'
import {Routes, Route, Navigate} from "react-router-dom";
import {Nav} from "./components/nav/Nav.jsx";
import {Home} from "./pages/Home/Home.jsx";
import {UserInfobar} from "./components/userinfobar/UserInfobar.jsx";
import {Gamebar} from "./components/gamebar/Gamebar.jsx";
import {Footer} from "./components/footer/Footer.jsx";
import {About} from "./pages/About/About.jsx";
import {GameDetails} from  "./pages/GameDetails/GameDetails.jsx"
import {Login} from "./pages/Login/Login.jsx";
import {Register} from "./pages/Register/Register.jsx";
import {Profile} from "./pages/Profile/Profile.jsx";
import {Admin} from "./pages/Admin/Admin.jsx";
import {Recommendations} from "./pages/recommendations/Recommendations.jsx";
import {Favorited} from './pages/Favorited/Favorited.jsx'
import {AuthContext} from "./context/AuthContext.jsx";
import {useContext} from "react";
import Played from "./pages/Played/Played.jsx";

function App() {

    const {isAuth} = useContext(AuthContext)
    const user = isAuth.user


    return (
        <>
            <div className="full-page-wrapper">
                <Nav
                firstLinkText = "Home"
                secondLinkText = "About"
                thirdLinkText= "Recommendations"
                fourthLinktext= "Played"
                fifthLinkText= "Favorites"
                />
                <div className="mid-section-wrapper">
                    <Gamebar
                      title="Random game"/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/profile" element={user ? <Profile/> : <Navigate to="/"/>}/>
                        <Route path="/admin" element={user ? <Admin/> : <Navigate to="/"/>}/>
                        <Route path="/recommendations" element={user ? <Recommendations/> : <Navigate to="/"/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/gamedetails/:id" element={<GameDetails/>}/>
                        <Route path="/favorited" element={user ? <Favorited/> : <Navigate to="/"/>}/>
                        <Route path="/played" element={user ? <Played/> : <Navigate to="/"/>}/>
                    </Routes>
                    <UserInfobar
                    title="User info"/>
                </div>
                <Footer
                    text="Eindopdracht Frontend Novi Ernst-Jaap Boutens 2024"/>
            </div>
        </>
    )
}

export default App
