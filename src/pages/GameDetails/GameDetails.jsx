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
        async function fetchGameById(){
            console.log("function start")
            try{
                setLoading(true)
                const fetchedGame = await axios.get(`https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_REACT_API_KEY}`)
                setGame(fetchedGame.data)
                console.log("fetched game", fetchedGame.data)
            } catch(error){
                setError(error)
            }finally {
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
                    <section>
                        <h1>{game.name}</h1>
                        <section className="genres-detailpage">Genres: {cycleGenres(game)}</section>
                        <p>{game.description_raw}</p>
                        <p>Made by {game.developers?.name} and released on {game.released}</p>

                    </section> : <p>no game found</p>}
            </div>
        </>
    );
}