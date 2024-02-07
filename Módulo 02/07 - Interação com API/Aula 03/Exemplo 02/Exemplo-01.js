async function obter(){
    let resposta = await fetch("pizza.txt")
    /*fetch() faz uma busca por um arquivo. Como leva tempo
    para trazer o resultado dessa busca, precisa fazer uso
    do comando await. E para fazer uso do comando await
    é necessário que  o comando esteja dentro de uma função assincrona.
    */
    let convertido = await resposta.text()
   
    /*Apos receber o resultado da busca, faz-se necessário
    converter o resultado de um dicionário para texto,
    pois o conteudo do arquivo é um texto.
   */
    console.log(convertido)
    alert(convertido)
    /*Por fim,imprimir esse texto que é o conteudo do aquivo
    buscando,em um console ou um alert.
    */

    

    }
    obter()
    //chama a função  para executar 