import {getRandomGame} from "../helpers/getRandomGame.js";
import {useEffect, useState} from "react";
export function Gamebar() {
    const [game, setGame] = useState(null)
    useEffect(() => {
        getRandomGame()
            .then((randomGame) => {setGame(randomGame)
            })
            .catch((e) => {
                console.error("Error fetching random game:", e)
            })
        }, []);
    console.log(game)

    return (
        <>
            <section className="Gamebar-container">
                <div className="game-img">
                    <img src="" alt="game cover art"/>
                </div>
                <div className="game-info">
                    <p>game name</p>
                    <p>publisher</p>
                    <p>release date</p>
                    <p>game genre</p>
                </div>
            </section>
        </>
    )
}