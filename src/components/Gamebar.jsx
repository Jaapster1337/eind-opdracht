import {getRandomGame} from "../helpers/getRandomGame.js";
import {useEffect, useState} from "react";

export function Gamebar() {

    const [game, setGame] = useState(null)

    useEffect(() => {
        async function fetchRandomGame() {
            try {
                const randomGame = await getRandomGame();
                setGame(randomGame)
            } catch (e) {
                console.error("Error fetching random game:", e)
            }
        }
        fetchRandomGame();
    }, []);
    console.log(game)

    return (
        <>
            <section className="Gamebar-container">
                <div className="game-img" style={{backgroundImage: `url('${game ? game.background_image : ''}')`}}>
                    {/*{game && <img src="" alt="game cover art"/>}*/}
                </div>
                {/*<script>*/}
                {/*    const imagePath = {game.background_image};*/}
                {/*    const element = document.getElementById('background-target');*/}
                {/*    element.style.backgroundImage = `url('$imagePath')`;*/}
                {/*</script>*/}
                <div className="game-info">
                    <p>{game ? game.name : 'Game Name'}</p>
                    <p>{game ? game.publishers['name'] : 'Publisher'}</p>
                    <p>{game ? game.released : 'Release Date'}</p>
                    <p>{game ? game.genre : 'Game Genre'}</p>
                </div>
            </section>
        </>
    )
}