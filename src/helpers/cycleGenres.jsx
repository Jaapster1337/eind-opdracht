export function cycleGenres(game){
    const genres =[]
    if(game.genres.length > 0){
    for (let i = 0; i < game.genres.length; i++) {
        genres.push(game.genres[i].name)
    }
    // console.log(genres)
        const lastGenre = genres[genres.length - 1]
        genres[genres.length - 1] = lastGenre.substring(0, lastGenre.length )
        return genres.join(", ")
    // return(
    //     genres.map((genre, index) =>(
    //         <p key={index}>{genre}</p>
    //     ))
    }else{
        return (
            <p>No genres provided</p>
        )
    }
}