puts "ingrese un mes del año en minusculas"
input = gets
case input
when "verano"
    puts "Este mes en promedio dura 93,7 dias"
when "otoño"
    puts "Este mes en promedio dura 89,6 dias"
when "invierno"
    puts "Este mes en promedio dura 89,0 dias"
when "primavera"
    puts "Este mes en promedio dura 92,9 dias"
else
puts "la estacion ingresada no es valida"
end