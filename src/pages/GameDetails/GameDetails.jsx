import "./GameDetails.css"
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {cycleGenres} from "../../helpers/cycleGenres.jsx";
import {cycleDevs} from "../../helpers/cycleDevs.jsx"
import axios from "axios";


export function GameDetails() {
    const {id} = useParams();
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchGameById() {
            try {
                setLoading(true)
                const gameById = await axios.get(`https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_REACT_API_KEY}`)
                setGame(gameById.data)
                console.log("game by id", gameById.data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        void fetchGameById();
    }, []);

    useEffect(() => {
        console.log("game", game);
    }, [game]);


    return (
        <>
            <div className="detail-page-container">
                {loading && <p>Loading...</p>}
                {error && <p>{error?.message}</p>}
                {game ?
                    <section className="game-detail-content-wrapper">
                        <h1>{game.name}</h1>
                        <hr className="custom-hr"/>
                        <section className="genres-detailpage">
                            <h3>Genres:</h3>
                            <hr className="custom-hr"/>
                            {cycleGenres(game)}
                        </section>
                        <h3>Description</h3>
                        <hr className="custom-hr"/>
                        <p>{game.description_raw}</p>
                        <div className="made-by-released">
                            <h3>Developer information</h3>
                            <hr className="custom-hr"/>
                            <p>Made by </p>{cycleDevs(game)}<p>and released on {game.released}</p>
                        </div>
                    </section> : <p>no game found</p>}
            </div>
        </>
    );
}