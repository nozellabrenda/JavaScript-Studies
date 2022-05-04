console.log("Trabalhando com condicionais");
const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

const idadeComprador = 18;
const acompanhado = true;
const passagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

/* if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1); //remover item
} else if (acompanhado) {
    console.log("Comprador menor de idade acompanhado");
    listaDeDestinos.splice(1, 1); //remover item
} else {
    console.log("Não é maior de idade e não posso vender");
} */

if (idadeComprador >= 18 || acompanhado == true) {
    console.log("Boa viagem!");
    listaDeDestinos.splice(2, 1); //remover item
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n")
if(idadeComprador >= 18 && passagemComprada){
    console.log("Boa viagem")
}else{
    console.log("Você não pode embarcar")
}

console.log(listaDeDestinos)
