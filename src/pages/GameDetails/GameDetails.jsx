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
        // asynchrone functie om game met id op te halen op mount
        async function fetchGameById() {
            try {
                setLoading(true)
                //haalt game op met id als query en .env key
                const gameById = await axios.get(`https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_REACT_API_KEY}`)
                //zet response in setGame
                setGame(gameById.data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        void fetchGameById();
    }, []);

    //functie om game aan lijst van favorieten toe te voegen
    function addToFavorites(){
        const gameToAdd = {
            gameId : `${game.id}`,
            gameName: `${game.name}`,
            //favorite and played worden hier allebei op true gezet omdat als een game je favoriet is moet je deze ook gespeeld hebben
            favorite: true,
            played: true,
        }
        //haal lijst uit localstorage
        const existingArrayString = localStorage.getItem(`gamesList-${isAuth.user.username}`)
        //parse naar array
        const existingArray = existingArrayString ? JSON.parse(existingArrayString) : [];
        //check of het item met game.id al in de lijst staat
        if(!(existingArray.find(item => item.gameId === `${game.id}`))){
            //push game naar array
            existingArray.push(gameToAdd)
            //stringify de array naar JSON
            const updatedString = JSON.stringify(existingArray)
            //verander localstorage naar aangepaste lijst
            localStorage.setItem(`gamesList-${isAuth.user.username}`, updatedString)
        } else {
            //verander de error als game al in de lijst staat
            setError("Game already in favorites")
        }
    }
    //functie voor het toevoegen van game aan playe
    function addToPlayed(){
        const gameToAdd = {
            gameId : `${game.id}`,
            gameName: `${game.name}`,
            //favorite is hier false want gespeeld betekent niet favoriet
            favorite: false,
            played: true,
        }
        //zie uitleg addToFavorites
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
                {/*als loading true laten we "loading..." zien*/}
                {loading && <p>Loading...</p>}
                {/*als er een error is laten we die zien*/}
                {error && <p>{error?.message}{error}</p>}
                {/*als er een game is bouwen we de section op en geven we de data weer in de elementen*/}
                {game ?
                    <section className="game-detail-content-wrapper">
                        <h1>{game.name}</h1>
                        <Hr classname="custom-hr"/>
                        <section className="genres-detailpage">
                            <h3>Genres:</h3>
                            <Hr classname="custom-hr"/>
                            {/*cycleGenres is een helper om meerdere genres naast elkaar weer te geven ipv onder elkaar*/}
                            {cycleGenres(game)}
                        </section>
                        <h3>Description</h3>
                        <Hr classname="custom-hr"/>
                        <p>{game.description_raw}</p>
                        <div className="made-by-released">
                            <h3>Developer information</h3>
                            <Hr classname="custom-hr"/>
                            {/*cycleDevs geeft meerdere developers naast elkaar weer ipv onder elkaar*/}
                            {/*editReturnedDate past het originele datum format aan naar het standaard nederlandse formaat*/}
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