function main() {
    var arregloDeEstudiantes = [
        { id: 1, nombre: "Adrian", nota: 7 },
        { id: 2, nombre: "Vicenta", nota: 9 },
        { id: 3, nombre: "Veronica", nota: 0 },
        { id: 4, nombre: "Juan", nota: 10 },
        { id: 5, nombre: "Daniel", nota: 8 }
    ];
    /*
    const respuestaForEach = arregloDeEstudiantes
    .forEach(
        function(valorActual){
            return valorActual;
        }
    )

    console.log(respuestaForEach);

    const respuestaMap = arregloDeEstudiantes
    .map(
        function(valorActual){
            const nuevoObjeto = {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: valorActual.nota,
                nota20: valorActual.nota*2
            }
            return nuevoObjeto
        }
    )
    console.log(respuestaMap);

    const respuestaFilter = arregloDeEstudiantes
    .filter(
        function(valorActual,index,array){
            return valorActual.nota>7
        }
    )
    console.log(respuestaFilter);

    */
    var respuestaEvery = arregloDeEstudiantes
        .every(function (valorActual, index, array) {
        return valorActual.nota < 7;
    });
    console.log(respuestaEvery);
    var respuestaSome = arregloDeEstudiantes
        .some(function (valorActual, index, array) {
        return valorActual.nota < 7;
    });
    console.log(respuestaSome);
    console.log(respuestaEvery);
    /*
        const respuestaSome = arregloDeEstudiantes
        .some(
            function(valorActual,index,array){
                return valorActual.nota <7
            }
        )
        console.log(respuestaSome);
    */
    var respuestaReduce = arregloDeEstudiantes
        .reduce(function (acumulador, valorActual, i, a) {
        var calculo = valorActual.nota + acumulador;
        return calculo;
    }, 1);
    console.log(respuestaReduce);
}
main();
