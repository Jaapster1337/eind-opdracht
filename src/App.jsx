import '../App.css'
import {Routes, Route} from "react-router-dom";
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




function App() {
    return (
        <>
            <div className="full-page-wrapper">
                <Nav
                firstLinkText = "Home"
                secondLinkText = "Over dit project"
                />
                <div className="mid-section-wrapper">
                    <Gamebar
                      title="Random game"/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        {/*<Route path="/recommendations" element={<Recommendations/>}/>*/}
                        <Route path="/login" element={<Login/>}/>
                        {/*<Route path="/favorite" element={<Favorite/>}/>*/}
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/admin" element={<Admin/>}/>
                        <Route path="/gamedetails/:id" element={<GameDetails/>}/>
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
