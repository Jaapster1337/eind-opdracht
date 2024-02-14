import './Played.css'

import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext.jsx";
import {Link} from "react-router-dom";

function Played() {
    const {isAuth} = useContext(AuthContext)
    const gameList = localStorage.getItem(`gamesList-${isAuth.user.username}`)
    const gameListArray = JSON.parse(gameList)
    const menuIsActiveCheck = (isActive) => isActive ? 'active-menu-link' : 'default-menu-link';
    return (
        <>
            <div className="page-wrapper">
                <h1>Here you can see all the games you have played</h1>
                <ul className="game-list">
                    {gameListArray.map((game, index) => (
                        <Link key={index} to={`/GameDetails/${game.gameId}`} className={menuIsActiveCheck(game.isActive)}>
                            <li>{index}: {game.gameName}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Played;