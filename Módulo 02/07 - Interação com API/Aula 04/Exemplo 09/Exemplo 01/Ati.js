async function resolver(){
    let busca1 = await fetch("Ati.json")
    let tarefas = await busca1.json()

    let grupoDiv = document.getElementById("lista-card")

    for( let bol of tarefas){
        grupoDiv.innerHTML += `
        <div class="card">
            <p>${bol.carlos}</p>
            <p>${bol.Raimundo}</p>
            <p>${bol.lyndemberg}</p>

        </div>
        `
    }

}
resolver()