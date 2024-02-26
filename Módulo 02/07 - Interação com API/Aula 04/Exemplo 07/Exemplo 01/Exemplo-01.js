async function busca(){
let  pegar = await fetch("Senai.json")
let luz = await pegar.json()

let grupoDiv = document.getElementById("lista-card")

    for(let lugar of luz){
        grupoDiv.innerHTML += ` 
    


    

            <div class = "card">
                <h3>${lugar.nome}</h3>
                <p>${lugar.sobreNome}</p>
                <h3>${lugar.Idade}</h3>
                <h3>${lugar.Etnia}</h3>

            </div>
        `
    }
}

busca()