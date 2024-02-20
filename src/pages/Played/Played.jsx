import './Played.css'

import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext.jsx";
import {Link} from "react-router-dom";

function Played() {
    const {isAuth} = useContext(AuthContext)
    const gameList = localStorage.getItem(`gamesList-${isAuth.user.username}`)
    const gameListArray = JSON.parse(gameList)
    return (
        <>
            <div className="page-wrapper">
                <h1>Here you can see all the games you have played</h1>
                <ul className="game-list">
                    {gameListArray.map((game, id) => (
                        <Link key={id} to={`/GameDetails/${game.gameId}`}>
                            <li>{id}: {game.gameName}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Played;