//Reto: crear una función para calcular el promedio ponderado

//Este sería un ejemplo de una lista para hacer una media ponderada (como las usadas para calcular notas con distinto valor)
//El primer número del array sería el elemento (la nota) y el segundo su valor (en este ejemplo, sobre 10)
const lista2 = [[6, 4], [4, 4], [8, 2]];

const mediaPonderada = (lista) => {
    //1. Se multiplican los elementos dentro de los arrays: la nota por el valor de ésta
    const importancia = lista.map(
        function (elemento) {
            return elemento[0] * elemento[1];
        }
    );      //[24, 16, 16]
    console.log(importancia);
    //2. Se suman los valores conseguidos anteriormente
    const sumaLista = importancia.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );      //[56]
    console.log(sumaLista);
    //3. Se calcula el promedio en función de los elementos del array
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Easy peasy, lemon squeezy 😎🍋
//BTW, no sé si sabías esto, pero en Windows 10 puedes escribir emojis pulsando Tecla de Windows + . ==> Por ejemplo, aquí está Casper: 👻
