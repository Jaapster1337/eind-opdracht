

export function cyclePlatforms(game){
    //initialiseer platforms als leeg array
    const platforms =[]
    //als er meer dan 0 entries zijn in game.platforms dan vullen we platforms met de namen van de platforms
    if(game.platforms.length > 0){
        for (let i = 0; i < game.platforms.length; i++) {
            platforms.push(game.platforms[i].platform.name)
        }
        //maakt variabele gevult met de naam van het laatste platfrom in de array
        const lastPlatform = platforms[platforms.length - 1]
        //verwijderd komma van laatste entry
        platforms[platforms.length - 1] = lastPlatform.substring(0, lastPlatform.length )
        return platforms.join(", ")
    }
}