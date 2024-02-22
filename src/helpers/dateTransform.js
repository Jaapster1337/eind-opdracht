export function DateTransform(date) {
    //Maak variabelen voor dag, maand en jaar
    const createdDate = new Date(date)
    const day = createdDate.getDay()
    const month = createdDate.getMonth()+1
    const year = createdDate.getFullYear()
    //format dag en maand zodat er een 0 aan het cijfer wordt toegevoegd als het cijfer onder de 10 is
    const formattedDay = day < 10 ? '0' + day : day
    const formattedMonth = month < 10 ? '0' + month: month
    //plak alles in de goede volgorde aan elkaar met " - " er tussen
    return formattedDay + "-" + formattedMonth +" - "+ year
}