import {GameDisplay} from "../components/gameDisplay/GameDisplay.jsx";
import {cycleDevs} from "./cycleDevs.jsx";
import {editReturnedDate} from "./editReturnedDate.js";
import {cycleGenres} from "./cycleGenres.jsx";

export function displayGameCards(games){
    // console.log(games)

    if(games.length > 0){
        return(
        games.map((game, index) =>(
            <GameDisplay
            key={index}
            id={game.id}
            img={game.background_image}
            name={game.name}
            date={editReturnedDate(game.released)}
            //cyclePlatforms schrijven
            platform="platform placeholder"
            genres={cycleGenres(game)}
            />
        )))
    }
}
