async function obtendo(){
    let resposta = await fetch("Exemplo-01.txt")
    let convertido = await resposta.text()
    console.log(convertido)

    alert(convertido)

    }
    obtendo()


