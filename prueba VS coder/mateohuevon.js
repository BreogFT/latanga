//version comentada hecha por el profesor oak. (Gracias profedor oak) 
//Fechita linda: 28 nov 2025, SAGITARIO♐️

function peticion_API() {
    fetch(`./API.json`)
    .then(latanga => latanga.json())//si no haces esto? pues dicen las buenas colas que te muerden la oreja.  No se yo🤔
        .then(latanga => {
            shit_data=latanga
//<-y el const o let???🥴
            console.log(shit_data)//si, esto no se muestra en la pagina🙄🙉
            document.body.innerHTML=json.stringify(data)//eres burro, html no entiende objetos🥰; te va saltar un {} o peor; por lo menos no lo pusiste en el head🤓
        })
}
peticion_API()//edto e un conxuro de mayia😉