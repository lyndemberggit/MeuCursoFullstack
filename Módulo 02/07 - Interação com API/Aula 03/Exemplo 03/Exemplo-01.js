/*async function obtendo(){
    let resposta = await fetch("Exemplo-01.txt")
    let convertido = await resposta.text()
    console.log(convertido)

   // alert(convertido)
  // document.body.innerHTML = "<h1>" + convertido + "</h1>"*/
 
 

  /*for(let x = 0; x <= 3; x++){
    document.body.innerHTML += `
    <h1>
          ${convertido} 
    </h1>)
    `//linha 8 a 12, metodo mais usado
 
 
    
  }
  

    obtendo()*/
/*async function obtendo(){
    let resposta = await fetch("Exemplo-01.txt")
    let convertido = await resposta.text()

    let lista = ["luana", "patricia", "lais"]
    
    for(let x in lista){
    document.body.innerHTML+= `
    <h1>
        ${convertido}
    </h1>
    `
    }
 
}*/

async function obtendo(){
    let resposta = await fetch("Exemplo-01.txt")
    let convertido = await resposta.text()

    let lista = ["luana", "patricia", "lais"]
    
    for(let x in lista){
    document.body.innerHTML+= `
    <h1>
        ${convertido}
    </h1>
    <p>
    ${lista[x]}
    </p>
    `
    }
 
}


  

