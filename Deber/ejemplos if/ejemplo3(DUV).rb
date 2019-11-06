puts "Ingrese el nivel de alcohol en la sangre en gramos por litro ej:0.3"
input = gets.to_f
if input => 5
puts "riezgo de coma etilico"
else if input => 1.2
    puts "multa de tres salarios, la suspensión de la licencia por 60 días y 30 días de cárcel."
else if input => 0.8
    puts "multa de dos salarios, pérdida de 10 puntos en la licencia y 15 días detención."
else if input => 0.3
    puts "multa de un salario básico unificado, pérdida de cinco puntos en su licencia y cinco días de cárcel."
else
    puts "numero invalido"
end