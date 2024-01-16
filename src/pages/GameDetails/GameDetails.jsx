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
        void fetchGameById()
        console.log("game", game)
    }, []);


    return (
        <>
            {loading && <p>Loading...</p>}
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