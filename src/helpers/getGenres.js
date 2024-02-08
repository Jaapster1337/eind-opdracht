import axios from "axios";


export async function getGenres(){
    let genres = []

    try {
        const response = await axios.get(`https://api.rawg.io/api/genres?key=${import.meta.env.VITE_REACT_API_KEY}&ordering=id`)
        console.log(response.data.results)
        genres = response.data.results.map(genre => genre.name);
    } catch (e){
        console.error(e)
    }

    console.log(genres)
    return genres
}