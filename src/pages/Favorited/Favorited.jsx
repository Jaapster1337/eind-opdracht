import './Favorited.css'
import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext.jsx";
import {Link, NavLink} from "react-router-dom";

export function Favorited() {
    const {isAuth} = useContext(AuthContext)
    //haal gameslist uit localstorage
    const gameList = localStorage.getItem(`gamesList-${isAuth.user.username}`)
    //parse gamelist van JSON naar array
    const gameListArray = JSON.parse(gameList)
    //filter over gamesListArray om games met favorite===true in favorites te zetter
    const favorites = gameListArray.filter((game) => game.favorite === true);

    return (
        <>
            <div className="page-wrapper">
                <h1>This is a list of your favorites games</h1>
                <ul className="game-list">
                    {/*map over filtered array om favoriete games weer te geven*/}
                    {favorites.map((game, id) => (
                        //zet <li> in een <Link> om er een link naar de detailpagin van te maken
                        <Link  key={id} to={`/GameDetails/${game.gameId}`}>
                            <li>{id}: {game.gameName}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    );
}
