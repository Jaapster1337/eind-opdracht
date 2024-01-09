import axios from "axios";

export async function getRandomGame() {
    let numberOfGames = 0
    try {
        //get total number of games
        const totalGames = await axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_REACT_API_KEY}`)
        numberOfGames = totalGames.data.count
        return await randomGame(numberOfGames)
    } catch (e) {
        console.log("Error occured", e)
        throw e;
    }
}

//request game with gameid randomNum and while request status !== 200 retry until 200
async function randomGame(numberOfGames) {
    let randomGamePick = {}
    let validPage = false;

    while (!validPage) {
        const randomNum = Math.floor(Math.random() * numberOfGames)
        try {
            const response = await axios.get(`https://api.rawg.io/api/games/${randomNum}?key=${import.meta.env.VITE_REACT_API_KEY}`)
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
