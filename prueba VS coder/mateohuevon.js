
function peticion_API() {
    fetch(`./API.json`)
    .then(latanga => latanga.json())
        .then(latanga => {
            data=latanga
            console.log(data)
            document.body.innerHTML=json.stringify(data)
        })
}
peticion_API()