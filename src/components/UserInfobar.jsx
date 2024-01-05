import {getRandomGame} from "../helpers/getRandomGame.js";

export function UserInfobar() {
    return (
        <>
            <section className="UserInfobar-container">
                <div className="user-img">
                    <img src="" alt="user profile image"/>
                </div>
                <div className="user-info">
                    <p>user name</p>
                    <button type="button">Played</button>
                    <button type="button" onClick={getRandomGame}>Favorite</button>
                    <p>account creation date</p>
                </div>
            </section>
        </>
    )
}