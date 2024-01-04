import {NavLink} from "react-router-dom";


export function Nav() {
    return (
        <>
            <nav className="navbar">
                <NavLink className={ ({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                         to="/">Home</NavLink>
                {/*<NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}*/}
                {/*         to="/summary">Overzicht</NavLink>*/}
                {/*<NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}*/}
                {/*         to="/newPost">Nieuwe post</NavLink>*/}
            </nav>
        </>
    );
}