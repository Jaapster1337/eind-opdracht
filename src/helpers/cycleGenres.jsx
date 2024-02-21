export function cycleGenres(game){
    const genres =[]
    if(game.genres.length > 0){
    for (let i = 0; i < game.genres.length; i++) {
        genres.push(game.genres[i].name)
    }
        const lastGenre = genres[genres.length - 1]
        genres[genres.length - 1] = lastGenre.substring(0, lastGenre.length )
        return genres.join(", ")
    }else{
        return (
            <p>No genres provided</p>
        )
    }
}