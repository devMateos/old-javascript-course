//La moda es el valor que más se repite en un conjunto de datos

const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

/* const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1] //Si elementoA es mayor que elementoB va a seguir siendo un número positivo, si no, la resta va a dar un valor negativo
    }
);

const moda = lista1Array[lista1Array.length - 1]; */


//Reto: convertir el código en una sola función que pueda recibir cualquier parámetro

const moda = (lista) => {
    //1. Se hace un recuento de cuántas veces aparece cada elemento y se agrupa en la const listaCount
    const listaCount = {};
    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento]++;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );
    /* console.log(listaCount); */
    //2. Se agrupan los elementos en una lista de arrays con Object.entries()
    //También se ordenan de menor a mayor(según las veces que se repiten)
    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1] //Si elementoA es mayor que elementoB va a seguir siendo un número positivo, si no, la resta va a dar un valor negativo
        }
    );
    /* console.log(listaArray); */
    //3. Se devuelve el último elemento del array, es decir, el que más se repite
    return listaArray[listaArray.length - 1];
}

//De esta forma, la función moda devuelve: [el valor que más se repite, las veces que se repite]
//Ejemplo: ["2", 5]
