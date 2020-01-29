function main() {
    var arregloDeEstudiantes = [
        { id: 1, nombre: "Adrian", nota: 7 },
        { id: 2, nombre: "Vicenta", nota: 9 },
        { id: 3, nombre: "Veronica", nota: 0 },
        { id: 4, nombre: "Juan", nota: 10 },
        { id: 5, nombre: "Daniel", nota: 8 }
    ];
    var respuestaForEach = arregloDeEstudiantes
        .forEach(function (valorActual) {
        return valorActual;
    });
    console.log(respuestaForEach);
    var respuestaMap = arregloDeEstudiantes
        .map(function (valorActual) {
        var nuevoObjeto = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            nota: valorActual.nota,
            nota20: valorActual.nota * 2
        };
        return nuevoObjeto;
    });
    console.log(respuestaMap);
    var respuestaFilter = arregloDeEstudiantes
        .filter(function (valorActual, index, array) {
        return valorActual.nota > 7;
    });
    console.log(respuestaFilter);
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
}
main();
