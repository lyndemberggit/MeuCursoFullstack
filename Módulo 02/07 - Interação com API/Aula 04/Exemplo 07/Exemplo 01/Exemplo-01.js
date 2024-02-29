async function busca(){//Criando a função assincrona chamado busca
let  pegar = await fetch("Senai.json")// foi criada a variavel pagar e atribuida a ela a busca do objeto resposta(senai.json)com o comando fetch 
// e esperado com o comando await.
let luz = await pegar.json()// cria a variavel luz e atribuida a ela a conversão do arquivo pegar.json.

let grupoDiv = document.getElementById("lista-card")//criado a variável grupo div e foi atribuida a busca do document no html

    for(let lugar of luz){// Atualiza o conteudo do elemento "grupoDiv" adicionando um novo bloco de html
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

busca()//chamando a função.