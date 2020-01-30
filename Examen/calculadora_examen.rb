def sumar(num_uno, num_dos) 
    resultado = num_uno.to_f + num_dos.to_f
    return resultado
end
def restar(num_uno, num_dos) 
    resultado = num_uno.to_f-num_dos.to_f
    return resultado
end
def multiplicar(num_uno, num_dos) 
    resultado = num_uno.to_f * num_dos.to_f
    return resultado
end
def dividir(num_uno, num_dos)
    resultado = num_uno.to_f / num_dos.to_f
    return resultado
end

def exponencial(num)
    resultado = Math.exp(num.to_f)
    return resultado
end
def hipotenusa(num_uno, num_dos)
    hipSq = num_uno.to_f**2 + num_dos.to_f**2
    resultado = Math.sqrt(hipSq)
    return resultado
end
def seno(num)
    resultado = Math.sin(num.to_f)
    return resultado
end
def coseno(num)
    resultado = Math.cos(num.to_f)
    return resultado
end
def tangente(num)
    resultado = Math.tan(num.to_f)
    return resultado
end
def arc_cos(num)
    resultado = Math.acos(num.to_f)
    return resultado
end

def calculadora
    puts 'Selecciona una opcion: Suma[1], Resta[2], multiplicacion[3], division[4], exponencial[5], hipotenusa[6], seno[7], coseno[8], tangente[9], arc_cos[10], cerrar[11]'
    operacion = gets.chomp

    es_suma = operacion == "1" or operacion == "Suma" or  operacion == "Suma[1]"
    es_resta = operacion == "2" or  operacion == "Resta" or operacion == "Resta[2]"
    es_division = operacion == "3" or operacion == "multiplicacion" or operacion == "multiplicacion[3]"
    es_multiplicacion = operacion == "4" or operacion == "division" or operacion == "division[4]"

    es_exponencial = operacion == "5" or operacion == "exponencial" or operacion == "exponencial[5]"
    es_hipotenusa = operacion == "6" or operacion == "hipotenusa" or operacion == "hipotenusa[6]"
    es_seno = operacion == "7" or operacion == "seno" or operacion == "seno[7]"
    es_coseno = operacion == "8" or operacion == "coseno" or operacion == "coseno[8]"
    es_tangente = operacion == "9" or operacion == "tangente" or operacion == "tangente[9]"
    es_arc_cos = operacion == "10" or operacion == "arctan" or operacion == "arctan[10]"

    cerrar = operacion == "11" or  operacion == "cerrar" or  operacion == "cerrar[11]"

    if es_suma or  es_multiplicacion or  es_division or  es_resta
        puts "ingrese el numero uno"
        numeroUno = gets
        puts "ingrese el numero dos"
        numeroDos = gets

        if es_suma
            puts sumar(numeroDos, numeroUno)
        end
        if es_resta
            puts restar(numeroUno, numeroDos)
        end
        if es_multiplicacion
            puts multiplicar(numeroUno, numeroDos)
        end
        if es_division
            puts dividir(numeroUno, numeroDos)
        end
        if es_hipotenusa
            puts hipotenusa(numeroUno, numeroDos)
        end
        calculadora
    end
    if es_exponencial or  es_seno or  es_coseno or  es_tangente or  es_arc_cos
        puts "escribir el numero:"
        num = gets
        if es_exponencial
            puts exponencial(num)
        end
        if es_seno
            puts seno(num)
        end
        if es_coseno
            puts coseno(num)
        end
        if es_tangente
            puts tangente(num)
        end
        if es_arc_cos
            puts arc_cos(num)
        end
        return 1
        calculadora
    end
    if (cerrar)
        return 0
    end
    puts operacion
    calculadora
    return 1
end

if calculadora == 1 
    calculadora
end
puts "adios"
