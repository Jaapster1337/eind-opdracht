import {Routes, Route} from "react-router-dom";
import {Nav} from "./components/Nav.jsx";
import {Home} from "./pages/Home/Home.jsx";
import '../App.css'
import {UserInfobar} from "./components/UserInfobar.jsx";
import {Gamebar} from "./components/Gamebar.jsx";
import {Footer} from "./components/Footer.jsx";



function App() {
    

    return (
        <>
            <Nav/>
            <div className="mid-section-wrapper">
                <Gamebar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    {/*<Route path="/recommendations" element={<Recommendations/>}/>*/}
                    {/*<Route path="/played" element={<Played/>}/>*/}
                    {/*<Route path="/favorite" element={<Favorite/>}/>*/}
                    {/*<Route path="/notfound" element={<NotFound/>}/>*/}
                    {/*<Route path="/gamedetails/:id" element={<GameDetails/>}/>*/}
                </Routes>
                <UserInfobar/>
            </div>
            <Footer/>
        </>
    )
}

export default App
