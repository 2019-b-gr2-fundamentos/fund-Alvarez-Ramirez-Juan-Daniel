var numberArray = [];
var arrayLength = 5;
var testUno = false;
do {
    for (var index = 0; index <= arrayLength; index++) {
        numberArray.push(Math.floor(Math.random() * 2));
    }
    for (var index = 0; index <= arrayLength; index++) {
        var existeUNo = numberArray[index] == 1;
        testUno = existeUNo || testUno;
    }
} while (testUno != true);
console.log("numberArrray ", numberArray);
