export function cycleDevs(game) {
    const devs = []
    if (game?.developers.length > 0) {
        for (let i = 0; i < game.developers.length; i++) {
            devs.push(game.developers[i].name)
        }
        const lastDev = devs[devs.length - 1];
        devs[devs.length - 1] = lastDev.substring(0, lastDev.length - 2);
        return devs.join(", ")
     } else {
        return (
            <p>No devs provided</p>
        )
    }
}

