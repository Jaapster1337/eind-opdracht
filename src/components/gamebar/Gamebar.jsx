import '../gamebar/Gamebar.css'
import {getRandomGame} from "../../helpers/getRandomGame.js";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


export function Gamebar({title}) {

    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchRandomGame() {
            try {
                setLoading(true)
                const randomGame = await getRandomGame();
                setGame(randomGame)
            } catch (e) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        void fetchRandomGame();
    }, []);


    return (
        <>
            <section className="Gamebar-container">
                <div className="title"><p>{title}</p></div>
                {loading && <p>Loading...</p>}
                {error && <p>{error?.message}</p>}
                {game ?
                    <section>
                        <div className="game-info">
                            <Link to={`/GameDetails/${game.id}`} state={game}>
                                <img className="game-img" src={game.background_image} alt="game image"/>
                            </Link>
                            <p>{game.name}</p>
                            <p>{game.developers[0].name}</p>
                            {game.publishers.length > 0 &&
                                <p>{game.publishers[0].name}</p>
                            }
                            <p>{game.released}</p>
                            {game.genres.length > 0 &&
                                <p>{game.genres[0].name}</p>
                            }
                            {game.genres.length > 1 &&
                                <p>{game.genres[1].name}</p>
                            }

                        </div>
                    </section> : <p>no game found</p>}
            </section>
        </>
    )
}