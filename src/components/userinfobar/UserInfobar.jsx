import '../userinfobar/UserInfobar.css'
import userImage from "../../assets/generic-user-image.png";
import {getRandomGame} from "../../helpers/getRandomGame.js";

export function UserInfobar({title}) {
    return (
        <>
            <section className="UserInfobar-container">
                <div className="user-img">
                    <img src={userImage} alt="user profile image" className="fit-image"/>
                </div>
                <div className="user-info">
                    <p>user name</p>
                    <button type="button">Played</button>
                    <button type="button" onClick={getRandomGame}>Favorite</button>
                    <p>created on</p>
                </div>
            </section>
        </>
    )
}