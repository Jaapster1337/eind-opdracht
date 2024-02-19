import React, {useEffect, useState} from 'react';
import './Recommendations.css'
import {Dropdown} from "../../components/dropdown/Dropdown.jsx";
import {genreOptions, genresObject, platformOptions, platformsObject} from './../../constants/Constants.js'
import {GameDisplay} from "../../components/gameDisplay/GameDisplay.jsx";
import {displayGameCards} from "../../helpers/displayGameCards.jsx";
import axios from "axios";
import {pseudoRandomizer} from "../../helpers/pseudoRandomizer.js";

export function Recommendations() {
    //object om waardes van de dropdowns op de pagina op te slaan en te gebruiken
    const [selectedValues, setSelectedValues] = useState({
        'genre-dropdown': '',
        'platform-dropdown': '',
    })
    //Array met recommendations
    const [gameRecommendations, setGameRecommendations] = useState([])

    //handlre functie voor de dropdown selecties
    const handleSelect = (name, value) => {
        setSelectedValues({
            ...selectedValues,
            [name]: value
        })
    }

    async function getGameRecommendations() {
        try {
            //haalt met een request een count op van het aantal games wat overeenkomt met de query
            const countResponse = await axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_REACT_API_KEY}&genres=${genresObject[selectedValues["genre-dropdown"]]}&platforms=${platformsObject[selectedValues["platform-dropdown"]]}`)
            //response wordt in count gezet
            const count = countResponse.data.count
            //count wordt gebruikt om een paginanummer te genereren
            const pageNumber = pseudoRandomizer(count)
            //request met query wordt herhaald met een pagina nummer zodat er andere games per request uitkomen
            const response = await axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_REACT_API_KEY}&genres=${genresObject[selectedValues["genre-dropdown"]]}&platforms=${platformsObject[selectedValues["platform-dropdown"]]}&page=${pageNumber}&page_size=40`)
            //response wordt in gameRecommendations gezet
            setGameRecommendations(response.data.results.slice(0,10))
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <div className="page-wrapper">
                <h1>Recommendations</h1>
                <p>Here you can get some game recommendations by genre and platform. Select the options you want from
                    the lists and click the button to get your recommendations</p>
                <form className="selectLists">
                    <div className="genre-select-dropdown">
                        <Dropdown
                            name="genre-dropdown"
                            labelText="Genre"
                            optionsArray={genreOptions}
                            selectedValue={selectedValues['genre-dropdown']}
                            setSelectedValue={handleSelect}
                        />
                        <Dropdown
                            name="platform-dropdown"
                            labelText="Platform"
                            optionsArray={platformOptions}
                            selectedValue={selectedValues['platform-dropdown']}
                            setSelectedValue={handleSelect}
                        />
                    </div>
                    <button type="button" onClick={() => getGameRecommendations()}>Get recommendations!</button>
                    <div className="game-display-case">
                        {gameRecommendations && displayGameCards(gameRecommendations)}
                    </div>
                </form>
            </div>
        </>
    );
}

