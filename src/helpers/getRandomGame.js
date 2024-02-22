import axios from "axios";

export async function getRandomGame() {
    let numberOfGames = 0
    try {
        //vraagt count van totale aantal games in API op
        const totalGames = await axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_REACT_API_KEY}`)
        //zet count in numberOfGames
        numberOfGames = totalGames.data.count
        return await randomGame(numberOfGames)
    } catch (e) {
        console.error(e)
        throw e;
    }
}

//request game with gameid randomNum and while request status !== 200 retry until 200
async function randomGame(numberOfGames) {
    //initialiseer randomGamePick als object
    let randomGamePick = {}
    //initialiseer validPage als false
    let validPage = false;

    //start while-loop zolang validPage false is
    while (!validPage) {
        //genereer willekeurig nummer gebaseerd op numberOfGames
        const randomNum = Math.floor(Math.random() * numberOfGames)

        try {
            //api-request voor enkele game met randomNum als ID
            const response = await axios.get(`https://api.rawg.io/api/games/${randomNum}?key=${import.meta.env.VITE_REACT_API_KEY}`)
            //als de status iets anders is dan 200, herhaald de request
            //als stats 200 is dan wordt randomGamePick gevuld met response.data en validPage op true gezet
            if (response.status === 200) {
                randomGamePick = response.data
                validPage = true;
            }
        } catch (e) {
            console.error(e)
        }
    }

return randomGamePick;
}
