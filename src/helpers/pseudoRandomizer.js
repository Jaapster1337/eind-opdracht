export function pseudoRandomizer(count) {
    //geeft willekeurig nummer terug tussen 1 en 100
    //dit werdt eerst gebaseerd op count wat gebaseerd was op de totale aantal entries in de request maar dit laat de API niet meer to
    //daarom is er nu een if statement ingebouwd die lagere counts afvangt en daarmee een ander getal teruggeeft
    //limit is max 10k omdat boven de 250 paginas de api het niet meer lijkt te doen
    let limit = 0
    if(count < 4000){
        limit = count
    } else {
        limit = 10000
    }
    return Math.floor(Math.random() * (limit/40)+1)
}