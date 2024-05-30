const notificacao = "O heroi  " //constante ira mostrar a mensagem que sempre será igual.. no caso repetitiva
let nomeDoHeroi = ('Skunk ')
let XpDoHeroi = ( "" )
let ranking = ("")
//fim das variaveis 


//colocando pontos de XP para definição de ranking do personagem
if (XpDoHeroi <= 1000) {
    console.log(ranking = "Ferro");
} 
else if (XpDoHeroi >= 1001 && 2000) {
    console.log(ranking = "Bronze")
}
else  if (XpDoHeroi >= 2001 && 5000){
    console.log(ranking = "Prata")
}

else if (XpDoHeroi >= 5001 && 7000 ){
    console.log(ranking = "Ouro")
}

else if (XpDoHeroi >= 7001 && 8000){
    console.log(ranking = "Platina")
}

else if (XpDoHeroi >= 8001 && 9000){
    console.log(ranking = "Ascendente")
}
else if (XpDoHeroi >= 9001 && 10000){
    console.log(raking = "Imortal")
}

else if (XpDoHeroi >= 10001){
    console.log(ranking = "Radiante")

}

//mensagem final que usario ira receber conforme nivel de XP que ele possuir 
console.log(notificacao + nomeDoHeroi + "está no nivel " + XpDoHeroi + ranking)