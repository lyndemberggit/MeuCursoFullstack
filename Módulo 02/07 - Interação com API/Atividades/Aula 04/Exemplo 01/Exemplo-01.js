async function buscar(){
    let procura = await fetch("api/tarefas.json")//O objeto resposta  "Tarefas.json" está sendo atribuida a variável procura
    let lista = await procura.json()
        console.log(lista)

        for(let x in lista){  // x está percorrendo  a lista
            alert(lista[x])  // imprima na tela começando com o índice 0, depois imprime 1 ,depois 2 e consequentemente todos os indices da lista.
           
            alert(x)// Imprime o número do indice da lista.
        }

     alert()
}
buscar()