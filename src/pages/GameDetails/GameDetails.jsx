import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";



export function GameDetails({title}) {
    const {id} = useParams();
    const [game, setGame] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchGameById(){
            try{
                setLoading(true)
                const gameById = await axios.get(`https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_REACT_API_KEY}`)
                setGame(gameById.data)
                console.log("game by id", gameById.data)
            } catch(error){
                setError(error)
            }finally {
                setLoading(false)
                console.log("game", game)
            }
        }
        void fetchGameById()
    }, []);


    return (
        <>
            <div className="detail-page-container">
                {error && <p>{error?.message}</p>}
                {game ?
                <section>
                    <h1>{id}</h1>
                    <p>{}</p>
                    <p>Made by (developers)</p>
                </section> : <p>no game found</p>}
            </div>
        </>
    );
}