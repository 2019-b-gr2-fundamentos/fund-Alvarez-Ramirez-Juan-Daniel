# console.log("ingrese una edad");
# const input = Number(prompt()) ;
# const bebe = "Dieta compuesta de leche materna y alimnentos especiales";
# const niñoPequeño = "debemos iniciar el hábito de consumir un desayuno completo"
# const niñoGrande = "evitar el abuso de alimentos de bajo valor nutritivo como los dulces, chucherías, refrescos, aperitivos fritos y la comida rápida.";
# const adolescente = "mayor exigencia académica, mayor exigencia de concentración. especialmente aquellos que acuden al instituto en jornadas continúas de 7 horas desde primera hora de la mañana. ";
# const adulto = "mantener una dieta saludable";
# if(input => 16){
#     console.log (adulto);
# }else if(input => 13){
#     console.log (adolescente);
# } else if(input => 7){
#     console.log (niñoGrande);
# }else if(input => 3){
#     console.log (niñoPequeño);
# }else if(input => 0){
#     console.log (bebe);
# }else console.log ("edad invalida");

puts "ingrese una edad"
input = gets
if input => 16
    puts "mantener una dieta saludable"
else if input => 13
    puts "mayor exigencia académica, mayor exigencia de concentración. especialmente aquellos que acuden al instituto en jornadas continúas de 7 horas desde primera hora de la mañana. "
else if input => 7
    puts "evitar el abuso de alimentos de bajo valor nutritivo como los dulces, chucherías, refrescos, aperitivos fritos y la comida rápida."
else if input => 3
    puts "debemos iniciar el hábito de consumir un desayuno completo"
else if input => 0
    puts "Dieta compuesta de leche materna y alimnentos especiales"
else
puts "edad invalida"
end