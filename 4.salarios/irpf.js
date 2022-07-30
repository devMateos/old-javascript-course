//Reto: calcular cuánto tendrá que pagar cada trabajador de IRPF según su salario
//Creamos un array con los salarios (multiplicados por 14 pagas anuales: 12 meses + 2 extras) y los nombres
const listaSalarios = spain.map(
    function (trabajador) {
        const lista = [trabajador.name, trabajador.salary * 14];
        return lista;
    }
)
//Creamos una arrow function que calcule el IRPF teniendo en cuenta los tramos
const calcularIRPF = (salarioAnual) => {
    /* Para calcular el IRPF en España hay que tener en cuenta los distintos tramos, por lo que hay que calcular cuánto se debe pagar en cada tramo y sumarlo:
        1. Hasta 12450          => 19%
        2. De 12450 a 20200     => 24%
        3. De 20200 a 35200     => 30%
        4. De 35200 a 60000     => 37%
        5. De 60000 a 300000    => 45%
        6. A partir de 300000   => 47%  */
    if (salarioAnual <= 12450) {                                    //1º tramo
        return (salarioAnual * 19) / 100;
    } else if (salarioAnual > 12450 && salarioAnual <= 20200) {     //2º tramo
        return ((12450 * 19) / 100) + (((salarioAnual - 12450) * 24) / 100);
    } else if (salarioAnual > 20200 && salarioAnual <= 35200) {     //3º tramo
        return ((12450 * 19) / 100) + (((20200 - 12450) * 24) / 100) + (((salarioAnual - 20200) * 30) / 100);
    } else if (salarioAnual > 35200 && salarioAnual <= 60000) {     //4º tramo
        return ((12450 * 19) / 100) + (((20200 - 12450) * 24) / 100) + (((35200 - 20200) * 30) / 100) + (((salarioAnual - 35200) * 37) / 100);
    } else if (salarioAnual > 60000 && salarioAnual <= 300000) {    //5º tramo
        return ((12450 * 19) / 100) + (((20200 - 12450) * 24) / 100) + (((35200 - 20200) * 30) / 100) + (((60000 - 35200) * 37) / 100) + (((salarioAnual - 60000) * 45) / 100);
    } else if (salarioAnual > 300000) {                             //6º tramo
        return ((12450 * 19) / 100) + (((20200 - 12450) * 24) / 100) + (((35200 - 20200) * 30) / 100) + (((60000 - 35200) * 37) / 100) + (((300000 - 60000) * 45) / 100) + (((salarioAnual - 300000) * 47) / 100);
    }
}
//Usamos push para añadir el IRPF a listaSalarios
const listaIRPF = listaSalarios.map(
    function (trabajador) {
        trabajador.push(calcularIRPF(trabajador[1]))
    }
)
//Ya tenemos una lista en la que aparece el nombre del trabajador, su salario anual y el IRPF anual
console.table(listaSalarios);
