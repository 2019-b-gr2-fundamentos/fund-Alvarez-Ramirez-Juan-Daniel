console.log("Ingrese un pais, ejemplo: Ecuador");
const input = prompt("Ingrese un pais, ejemplo: Ecuador") ;

switch(input){
    case "Colombia" || "Ecuador" || " Estados Unidos" || "México" || "Canadá" || "Costa Rica" || "Argentina" || "Bolivia"  || " Chile"  || "Paraguay"  || "Perú"  || "Uruguay"  || "Venezuela"  || "España"  || "Portugal"  || "Reino Unido" || "Australia" :
        console.log("es legal la marihuana");
        break;
    default:
       console.log("es ilegal la marihuana en ese pais o el nombre pais esta mal escrtito");
        break;
}