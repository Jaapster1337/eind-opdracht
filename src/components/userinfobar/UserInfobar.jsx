import '../userinfobar/UserInfobar.css'
import userImage from "../../assets/generic-user-image.png";
import {Button} from "../button/Button.jsx";
import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import {Link} from "react-router-dom";

export function UserInfobar({title}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(true)
    const {isAuth, logOut} = useContext(AuthContext)


    return (
        <>
            <section className="UserInfobar-container">
                <div className="title"><p>{title}</p></div>
                {loading && <p>Loading...</p>}
                {error && <p>{error?.message}</p>}
                {isAuth.user ?
                    <section className="logged-in">
                        <div className="user-img">
                            <img src={userImage} alt="user profile image" className="fit-image"/>
                        </div>
                        <div className="user-info">
                            <p>{isAuth.user.username}</p>
                            <Link to={'/played'}>
                                <Button
                                    type="button"
                                    title="Played"
                                />
                            </Link>
                            <Link to="/favorited">
                                <Button
                                    type="button"
                                    title="Favorites"
                                />
                            </Link>
                            <p>Created on:</p>
                            <button type="button" onClick={logOut}>Log Out</button>
                        </div>
                    </section> :
                    <>
                        <p>no user found</p>
                        <section className="not-logged-in">

                            <p>Would you like to</p>
                            <Button
                                type="button"
                                title="Login"
                                goto="/login"
                            />
                            <p>or</p>
                            <Button
                                type="button"
                                title="Register"
                                goto="/register"
                            />
                        </section>
                    </>
                }
            </section>
        </>
    )
}