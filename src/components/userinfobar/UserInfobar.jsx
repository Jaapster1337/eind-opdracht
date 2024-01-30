import '../userinfobar/UserInfobar.css'
import userImage from "../../assets/generic-user-image.png";
import {Button} from "../button/Button.jsx";
import {useState} from "react";

export function UserInfobar({title}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(true)


    return (
        <>
            <section className="UserInfobar-container">
                <div className="title"><p>{title}</p></div>
                {loading && <p>Loading...</p>}
                {error && <p>{error?.message}</p>}
                {!user ?
                    <section>
                        <div className="user-img">
                            <img src={userImage} alt="user profile image" className="fit-image"/>
                        </div>
                        <div className="user-info">
                            <p>user name</p>
                            <Button
                                type="button"
                                title="Played"/>
                            <Button
                                type="button"
                                title="Favorites"/>
                            <p>created on</p>
                        </div>
                    </section> :
                    <section className="not-logged-in">
                        <p>no user found</p>
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
                }
            </section>
        </>
    )
}