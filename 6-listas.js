console.log("Trabalhando com listas");
const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

listaDeDestinos.push("Curitiba") //adicionando item na lista
console.log("Destinos possíveis:");
console.log(listaDeDestinos)

listaDeDestinos.splice(1,1); //excluir 2º elemento
console.log(listaDeDestinos)

console.log(listaDeDestinos[1]); //exibir número expecifico
