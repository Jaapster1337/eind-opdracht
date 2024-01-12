import '../nav/Nav.css'
import {NavLink} from "react-router-dom";

const menuIsActiveCheck = ({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link';
export function Nav({firstLinkText, secondLinkText}) {
    return (
        <>
            <nav className="navbar dynamic-height">
                <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                         to="/">{firstLinkText}</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                         to="/about">{secondLinkText}</NavLink>
                {/*<NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}*/}
                {/*         to="/newPost">Nieuwe post</NavLink>*/}
            </nav>
        </>
    );
}