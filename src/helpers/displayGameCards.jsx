import {GameDisplay} from "../components/gameDisplay/GameDisplay.jsx";
import {cycleDevs} from "./cycleDevs.jsx";
import {editReturnedDate} from "./editReturnedDate.js";
import {cycleGenres} from "./cycleGenres.jsx";
import {cyclePlatforms} from "./cyclePlatforms.js";

export function displayGameCards(games){
    if(games.length > 0){
        return(
        games.map((game, index) =>(
            <GameDisplay
            key={index}
            id={game.id}
            img={game.background_image}
            name={game.name}
            date={editReturnedDate(game.released)}
            platforms={cyclePlatforms(game)}
            platform="platform placeholder"
            genres={cycleGenres(game)}
            />
        )))
    }
}
