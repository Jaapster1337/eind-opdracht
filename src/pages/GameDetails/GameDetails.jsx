import "./GameDetails.css"
import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {cycleGenres} from "../../helpers/cycleGenres.jsx";
import {cycleDevs} from "../../helpers/cycleDevs.jsx"
import axios from "axios";
import {Hr} from "../../components/hr/hr.jsx";
import {editReturnedDate} from "../../helpers/editReturnedDate.js";
import {AuthContext} from "../../context/AuthContext.jsx";


export function GameDetails() {
    const {id} = useParams();
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {isAuth} = useContext(AuthContext)

    useEffect(() => {

        async function fetchGameById() {
            try {
                setLoading(true)
                const gameById = await axios.get(`https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_REACT_API_KEY}`)
                setGame(gameById.data)
                // console.log("game by id", gameById.data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        void fetchGameById();
    }, []);


    function addToFavorites(){
        const gameToAdd = {
            gameId : `${game.id}`,
            gameName: `${game.name}`,
            favorite: true,
            played: true,
        }
        const existingArrayString = localStorage.getItem(`gamesList-${isAuth.user.username}`)
        const existingArray = existingArrayString ? JSON.parse(existingArrayString) : [];
        if(!(existingArray.find(item => item.gameId === `${game.id}`))){
            existingArray.push(gameToAdd)
            const updatedString = JSON.stringify(existingArray)
            localStorage.setItem(`gamesList-${isAuth.user.username}`, updatedString)
        } else {
            setError("Game already in favorites")
        }
    }

    function addToPlayed(){
        const gameToAdd = {
            gameId : `${game.id}`,
            gameName: `${game.name}`,
            favorite: false,
            played: true,
        }
        const existingArrayString = localStorage.getItem(`gamesList-${isAuth.user.username}`)
        const existingArray = existingArrayString ? JSON.parse(existingArrayString) : [];
        if(!(existingArray.find(item => item.gameId === `${game.id}`))){
            existingArray.push(gameToAdd)
            const updatedString = JSON.stringify(existingArray)
            localStorage.setItem(`gamesList-${isAuth.user.username}`, updatedString)
        } else {
            setError("Game already in favorites")
        }
    }


    return (
        <>
            <div className="detail-page-container">
                {loading && <p>Loading...</p>}
                {error && <p>{error?.message}{error}</p>}
                {game ?
                    <section className="game-detail-content-wrapper">
                        <h1>{game.name}</h1>
                        <Hr classname="custom-hr"/>
                        <section className="genres-detailpage">
                            <h3>Genres:</h3>
                            <Hr classname="custom-hr"/>
                            {cycleGenres(game)}
                        </section>
                        <h3>Description</h3>
                        <Hr classname="custom-hr"/>
                        <p>{game.description_raw}</p>
                        <div className="made-by-released">
                            <h3>Developer information</h3>
                            <Hr classname="custom-hr"/>
                            <p>Made by {cycleDevs(game)} and released on {editReturnedDate(game.released)}</p>
                        </div>
                        <button type="button" onClick={addToPlayed}>Add to Played</button>
                        <button type="button" onClick={addToFavorites}>Add to Favorites</button>
                    </section> : <p>no game found</p>
                }
            </div>
        </>
    );
}