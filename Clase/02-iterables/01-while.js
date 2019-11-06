//do while
var vecesQueHeComido = 0;
do {
    vecesQueHeComido = vecesQueHeComido + 1;
    switch (vecesQueHeComido) {
        case 0:
            console.log("desnutrido");
            break;
        case 1:
            console.log("Desayuno");
            break;
        case 2:
            console.log("Almuerzo");
            break;
        case 3:
            console.log("Merienda");
            break;
        default:
            console.log("Gordito");
            break;
    }
} while (vecesQueHeComido < 3);
// while(vecesQueHeComido < 3){
//     vecesQueHeComido = vecesQueHeComido+1;
//     switch(vecesQueHeComido){
//         case 0:
//         console.log("desnutrido");      
//         break;       
//         case 1:
//         console.log("Desayuno");
//         break;
//         case 2:
//         console.log("Almuerzo");
//         break;
//         case 3:
//         console.log("Merienda");
//         break;
//         default:
//         console.log("Gordito");
//         break;
//     }
// }
