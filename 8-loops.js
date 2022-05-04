console.log("\n Trabalhando com condicionais");
const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

const idadeComprador = 18;
const acompanhado = false;
let passagemComprada = false;
const destino = "Salvador"

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || acompanhado == true

let contador = 0;
let destinoExiste = false;
while(contador<3){
       if (listaDeDestinos[contador] == destino){
        destinoExiste = true;
    }
    contador += 1;
}

console.log("Destino existe:", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem");
}else{
    console.log("Desculpe houve um erro")
}

for(let cont = 0; contador <3; cont++){
    if (listaDeDestinos[contador] == destino){
     destinoExiste = true;
     }
}
