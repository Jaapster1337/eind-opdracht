import './Favorited.css'
import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext.jsx";
import {Link, NavLink} from "react-router-dom";

export function Favorited() {
    const {isAuth} = useContext(AuthContext)
    const gameList = localStorage.getItem(`gamesList-${isAuth.user.username}`)
    const gameListArray = JSON.parse(gameList)
    const favorites = gameListArray.filter((game) => game.favorite === true);
    const menuIsActiveCheck = (isActive) => isActive ? 'active-menu-link' : 'default-menu-link';

    return (
        <>
            <div className="page-wrapper">
                <h1>This is a list of your favorites games</h1>
                <ul className="game-list">
                    {}
                    {favorites.map((game, index) => (
                        <Link  key={index} to={`/GameDetails/${game.gameId}`} className={menuIsActiveCheck(game.isActive)}>
                            <li>{index}: {game.gameName}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    );
}
