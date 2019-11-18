numero = 1 ##numero de deberes
deberesAnalisis = 0
deberesAlgebra = 0
deberesCompiladores = 0
deberesFundamentos = 0
deberesCalculo = 0
deberesFisica = 0
deberesIngles = 0

while numero < 1001
    if numero.remainder(13)  == 0
        deberesIngles = deberesIngles+1
    elsif numero .remainder(11)  == 0
        deberesFisica = deberesFisica+1
    elsif numero .remainder(7)  == 0
        deberesCalculo = deberesCalculo+1
    elsif numero .remainder(5)  == 0
        deberesFundamentos = deberesFundamentos+1
    elsif numero .remainder(3)  == 0 {
        deberesCompiladores = deberesCompiladores+1
    elsif numero .remainder(2)  == 0
        deberesAlgebra = deberesAlgebra+1
    else
        deberesAnalisis = deberesAnalisis+1
    end
    numero = numero+1
end
numero = numero-1
puts `Para #{numero} deberes, por cada materia se tiene la siguiente cantidad de deberes:`
puts "Analisis: "+deberesAnalisis
puts "Algebra: "+deberesAlgebra
puts "Compiladores: "+deberesCompiladores
puts "Fundamentos: "+deberesFundamentos
puts "Calculo: "+deberesCalculo
puts "Fisica: "+deberesFisica
puts "Ingles: "+deberesIngles

