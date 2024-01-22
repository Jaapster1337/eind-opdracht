import "./GameDetails.css"
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {cycleGenres} from "../../helpers/cycleGenres.jsx";
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
            {loading && <p>Loading...</p>}
            <div className="detail-page-container">
                {error && <p>{error?.message}</p>}
                {game ?
                    <section className="game-detail-content-wrapper">
                        <h1>{game.name}</h1>
                        <section className="genres-detailpage">
                            <h2>Genres:</h2>
                            {cycleGenres(game)}
                        </section>
                        <h2>Description</h2>
                        <p>{game.description_raw}</p>
                        <div className="made-by-released">
                        <p>Made by {game.developers?.name} and released on {game.released}</p>
                        </div>
                    </section> : <p>no game found</p>}
            </div>
        </>
    );
}