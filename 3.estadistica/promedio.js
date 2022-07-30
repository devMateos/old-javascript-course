//Arrow function para calcular la media aritmética
const mediaAritmetica = (lista) => {
    /* let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaLista += lista[i];
    } */
    //Esta es una forma alternativa de hacerlo utilizando el método reduce
    const sumaLista = lista.reduce(    //reduce nos permite ir sumando cada uno de los elementos
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
const lista1 = [100, 200, 300, 500];
