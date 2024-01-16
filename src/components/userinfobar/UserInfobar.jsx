import '../userinfobar/UserInfobar.css'
import userImage from "../../assets/generic-user-image.png";
import {Button} from "../button/Button.jsx";

export function UserInfobar({title}) {
    return (
        <>
            <section className="UserInfobar-container">
                <div className="title"><p>{title}</p></div>
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
            </section>
        </>
    )
}