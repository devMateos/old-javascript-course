/* La mediana es el valor central de un conjunto de datos. Si el nº de elementos es par, la mediana es
la media de los dos elementos centrales */
const lista1 = [100, 200, 500, 800, 400000000];

//Arrow function para calcular la mediana de una lista de elementos
/* const mediana = (lista) => {
    const mitadLista = parseInt(lista.length / 2);
    if (lista.length % 2 === 0) {
        return (lista[mitadLista - 1] + lista[mitadLista]) / 2;
    } else {
        return lista[mitadLista];
    }
} */

//Reto: recrear la función con el método sort para que la lista de valores se ordene de mayor a menor automáticamente
const mediana = (lista) => {
    /* sort ordena alfabéticamente, no numéricamente, por lo que ordena antes todos los números cuya primera
    cifra sea más pequeña (aunque tengan varias cifras). Por eso hay que complementarlo con la función entre paréntesis */
    const listaOrdenada = lista.sort(function (a, b) { return a - b }); //Fuente de la función: https://www.freecodecamp.org/espanol/news/ordenar-arreglos-en-javascript-como-usar-el-metodo-sort/
    const mitadLista = parseInt(lista.length / 2);
    if (lista.length % 2 === 0) {
        return (listaOrdenada[mitadLista - 1] + listaOrdenada[mitadLista]) / 2;
    } else {
        return listaOrdenada[mitadLista];
    }
}

