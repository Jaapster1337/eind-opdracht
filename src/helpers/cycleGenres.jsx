export function cycleGenres(game){
    const genres =[]
    for (let i = 0; i < game.genres.length; i++) {
        genres.push(game.genres[i].name)
    }
    console.log(genres)
    return(
        genres.map((genre, index) =>(
            <p key={index}>{genre}</p>
        ))
    )
}