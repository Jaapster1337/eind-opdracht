import {Routes, Route} from "react-router-dom";
import {Nav} from "./Components/Nav.jsx";
import {Home} from "./pages/Home/Home.jsx";


import './App.css'
import {UserInfobar} from "./Components/UserInfobar.jsx";
import {Gamebar} from "./Components/Gamebar.jsx";
import {Footer} from "./Components/Footer.jsx";

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
                    {/*<Route path="/notFound" element={<NotFound/>}/>*/}
                    {/*<Route path="/gamePage/:id" element={<GamePage/>}/>*/}
                </Routes>
                <UserInfobar/>
            </div>
            <Footer/>
        </>
    )
}

export default App
