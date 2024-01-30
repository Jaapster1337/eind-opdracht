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
                {user ?
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
                    </section> : <p>no user found</p>
                }
            </section>
        </>
    )
}