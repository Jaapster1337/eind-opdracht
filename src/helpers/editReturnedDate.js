export function editReturnedDate(date) {
    if(date === null){
        return "Might be a game from B.C."
    }
    const parts = date.split("-");
    return parts[2] +"-"+ parts[1] +"-"+ parts[0]
}
