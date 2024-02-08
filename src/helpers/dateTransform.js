export function DateTransform(date) {
    const createdDate = new Date(date)
    const day = createdDate.getDay()
    const month = createdDate.getMonth()+1
    const year = createdDate.getFullYear()

    const formattedDay = day < 10 ? '0' + day : day
    const formattedMonth = month < 10 ? '0' + month: month
    return formattedDay + "-" + formattedMonth +" - "+ year
}