

export function cyclePlatforms(game){
    const platforms =[]
    console.log(game.platforms)
    if(game.platforms.length > 0){
        for (let i = 0; i < game.platforms.length; i++) {
            platforms.push(game.platforms[i].platform.name)
        }
        const lastPlatform = platforms[platforms.length - 1]
        platforms[platforms.length - 1] = lastPlatform.substring(0, lastPlatform.length )
        return platforms.join(", ")
    }
}