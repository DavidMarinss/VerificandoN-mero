
 // Linha para usuário digitar o número que deseja.
let numero = parseInt (prompt("Insira um valor"))
//Linha onde é chama a função para ser executada. 
console.log (PositivoOuNegativo(numero))          
//Função onde é feita a comparação do número digitado pelo usuário para saber se ele é positivo, negativo ou igual a zero. 
function PositivoOuNegativo(NumeroParametro){
    if (NumeroParametro == 0){
        return  0   
    }else if (NumeroParametro < 0){
        return -1 
    }else{
        return 1
    }

    
}