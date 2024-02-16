import React, {useEffect, useState} from 'react';
import './Recommendations.css'
import {Dropdown} from "../../components/dropdown/Dropdown.jsx";
import {genreOptions, genresObject, platformOptions, platformsObject} from './../../constants/Constants.js'
import {GameDisplay} from "../../components/gameDisplay/GameDisplay.jsx";
import {displayGameCards} from "../../helpers/displayGameCards.jsx";
import axios from "axios";
import {pseudoRandomizer} from "../../helpers/pseudoRandomizer.js";

export function Recommendations() {
    const [selectedValues, setSelectedValues] = useState({
        'genre-dropdown': '',
        'platform-dropdown': '',
    })
    const [gameRecommendations, setGameRecommendations] = useState([])

    const handleSelect = (name, value) => {
        setSelectedValues({
            ...selectedValues,
            [name]: value
        })
    }

    async function getGameRecommendations() {
        try {
            const countResponse = await axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_REACT_API_KEY}&genres=${genresObject[selectedValues["genre-dropdown"]]}&platforms=${platformsObject[selectedValues["platform-dropdown"]]}`)
            const count = countResponse.data.count
            const pageNumber = pseudoRandomizer(count)
            const response = await axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_REACT_API_KEY}&genres=${genresObject[selectedValues["genre-dropdown"]]}&platforms=${platformsObject[selectedValues["platform-dropdown"]]}&page=${pageNumber}&page_size=40`)
            setGameRecommendations(response.data.results.slice(0,10))
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        console.log(gameRecommendations)
    }, [gameRecommendations]);
    //check with Played


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

