import '../nav/Nav.css'
import {NavLink} from "react-router-dom";

const menuIsActiveCheck = ({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link';
export function Nav({firstLinkText, secondLinkText, thirdLinkText}) {
    return (
        <>
            <nav className="navbar dynamic-height">
                <ul className="nav">
                    <li>
                <NavLink className={menuIsActiveCheck}
                         to="/">{firstLinkText}</NavLink>
                    </li>
                    <li>
                <NavLink className={menuIsActiveCheck}
                         to="/about">{secondLinkText}</NavLink>
                    </li>
                    <li>
                <NavLink className={menuIsActiveCheck}
                         to="/recommendations">{thirdLinkText}</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}