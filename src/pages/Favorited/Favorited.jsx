import './Favorited.css'
import React, {useContext, useState} from 'react';
import {AuthContext} from "../../context/AuthContext.jsx";
import {Link, NavLink} from "react-router-dom";

export function Favorited() {
    const [error,setError] = useState("")
    const {isAuth} = useContext(AuthContext)
    //haal gameslist uit localstorage
    console.log(!(localStorage.getItem(`gamesList-${isAuth.user.username}`)))
    if (!(localStorage.getItem(`gamesList-${isAuth.user.username}`))){
        setError("No gameslist was found, no games can be displayed")
        console.log("No gameslist was found, no games can be displayed")
    }
    console.log(error)
    const gameList = localStorage.getItem(`gamesList-${isAuth.user.username}`)
    //parse gamelist van JSON naar array
    const gameListArray = JSON.parse(gameList)
    //filter over gamesListArray om games met favorite===true in favorites te zetter
    const favorites = gameListArray.filter((game) => game.favorite === true);
    console.log(favorites)

    return(
        <>
            <div className="page-wrapper">
                <h1>This is a list of your favorites games</h1>
                {error && <p>{error}</p>}
                <ul className="game-list">
                    {/*map over filtered array om favoriete games weer te geven*/}
                    {gameListArray && favorites.map((game, id) => (
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
