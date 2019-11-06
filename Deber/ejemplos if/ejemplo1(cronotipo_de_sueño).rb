puts "A que hora se duerme normalmente redondeelo a un entero, ejemplo '22' "
input = gets.to_1
if input <= 10
    puts "Usted posee un cronotipo matutino de sueño"
else if input <= 11
    puts "Usted posee un cronotipo vespertino de sueño"
else if input <= 12
    puts "Usted posee un cronotipo intermedio de sueño"
else
    puts "Usted posee un cronotipo intermedio de sueño"
end