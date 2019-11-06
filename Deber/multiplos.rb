numero = 1
deberesAnalisis = 0
deberesAlgebra = 0
deberesCompiladores = 0
deberesFundamentos = 0
deberesCalculo = 0
deberesFisica = 0
deberesIngles = 0
puts "cuantos deberes tienes?"
numero_deberes = gets.to_i+1
while(numero < numero_deberes)
    if numero % 13 == 0
        deberesIngles = deberesIngles+1
    elsif numero % 11 == 0 
        deberesFisica = deberesFisica+1
    elsif numero % 7 == 0
        deberesCalculo = deberesCalculo+1
    elsif numero % 5 == 0 
        deberesFundamentos = deberesFundamentos+1
    elsif numero % 3 == 0
        deberesCompiladores = deberesCompiladores+1
    elsif numero % 2 == 0
        deberesAlgebra = deberesAlgebra+1
    else
        deberesAnalisis = deberesAnalisis+1
    numero = numero+1
    end
end

numero = numero -1
puts "Para #{numero_deberes} deberes, por cada materia se tiene la siguiente cantidad de deberes:"
puts "Analisis: "+deberesAnalisis
puts "Algebra: "+deberesAlgebra
puts "Compiladores: "+deberesCompiladores
puts "Fundamentos: "+deberesFundamentos
puts "Calculo: "+deberesCalculo
puts "Fisica: "+deberesFisica
puts "Ingles: "+deberesIngles
