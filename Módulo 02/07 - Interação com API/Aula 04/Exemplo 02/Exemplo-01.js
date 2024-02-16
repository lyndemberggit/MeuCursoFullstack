..async function olx(){
 let busca = await fetch("carros.json")
 let convertido = await busca.json()

 //for(let x in convertido){
    alert(convertido[1].modelo)//Imprime  a veriavel convertido  1 com moedelo
 //}

}

olx()