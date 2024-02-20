import '../nav/Nav.css'
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext.jsx";
import {useContext} from "react";


export function Nav({firstLinkText, secondLinkText, thirdLinkText, fourthLinktext, fifthLinkText}) {
    const {isAuth} = useContext(AuthContext)
    const user = isAuth.user

    return (
        <>
            <nav className="navbar dynamic-height">
                <ul className="nav">
                    <li>
                        <NavLink to="/">{firstLinkText}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">{secondLinkText}</NavLink>
                    </li>
                    {user &&
                        <>
                            <li>
                                <NavLink to="/recommendations">{thirdLinkText}</NavLink>
                            </li>
                            <li>
                                <NavLink to="/played">{fourthLinktext}</NavLink>
                            </li>
                            <li>
                                <NavLink to="/favorited">{fifthLinkText}</NavLink>
                            </li>
                        </>
                    }
                </ul>
            </nav>
        </>
    );
}