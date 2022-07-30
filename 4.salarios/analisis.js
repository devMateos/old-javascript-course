//Aquí creamos un array que sólo tenga los salarios (los nombres no los necesitamos para el análisis)
const salariosEsp = spain.map(
    function (trabajador) {
        return trabajador.salary;
    }
);

//Reutilizamos la función creada en el ejercicio anterior para calcular la mediana de salarios
//Recordatorio: se han eliminado las funciones "helper" (porque se han incluido dentro de la misma arrow function), que son las funciones complementarias necesarias para nuestros cálculos
const medianaSalarios = (lista) => {
    const listaOrdenada = lista.sort(function (a, b) { return a - b });
    const mitadLista = parseInt(lista.length / 2);
    if (lista.length % 2 === 0) {
        return (listaOrdenada[mitadLista - 1] + listaOrdenada[mitadLista]) / 2;
    } else {
        return listaOrdenada[mitadLista];
    }
}

//Creamos también una nueva función para calcular la mediana del top 10%
const medianaTop10 = (lista) => {
    //1. Se ordena la lista numéricamente
    const listaOrdenada = lista.sort(function (a, b) { return a - b });
    //2. A listaOrdenada le aplicamos splice(a partir del 90%, cortar el 10%) para conseguir una lista con el top 10%
    //Splice saca del array original los valores que se especifican y los mete en uno nuevo
    const top10 = listaOrdenada.splice(
        (listaOrdenada.length * 90) / 100,
        (listaOrdenada.length * 10) / 100,
    );
    //3. Calcular la mediana del top 10
    const mitadTop10 = parseInt(top10.length / 2);
    if (top10.length % 2 === 0) {
        return (top10[mitadTop10 - 1] + top10[mitadTop10]) / 2;
    } else {
        return top10[mitadTop10];
    }
}

//Reutilizamos la función creada en el ejercicio anterior para calcular la media de salarios
const mediaSalarios = (lista) => {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const medianaGeneralEsp = medianaSalarios(salariosEsp);
const medianaTop10Esp = medianaTop10(salariosEsp);


console.log(
    `La mediana de salarios en España es de ${medianaGeneralEsp}€.
La mediana del top 10 de salarios es de ${medianaTop10Esp}€.`
);
