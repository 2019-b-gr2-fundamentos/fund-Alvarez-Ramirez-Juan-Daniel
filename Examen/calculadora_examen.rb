def sumar(numUno, numDos) 
    resultado = numUno + numDos
    return resultado
end
def restar(numUno, numDos) 
    resultado = numUno - numDos
    return resultado
end
def multiplicar(numUno, numDos) 
    resultado = numUno * numDos
    return resultado
end
def dividir(numUno, numDos)
    resultado = numUno / numDos
    return resultado
end

def exponencial(num)
    resultado = Math::E^num
    return resultado
end
def hipotenusa(numUno, numDos)
    hipSq = numUno^2 + numDos^2
    resultado = Math.sqrt(hipSq)
    return resultado
end
def seno(num)
    resultado = Math.sin(num)
    return resultado
end
def coseno(num)
    resultado = Math.cos(num)
    return resultado
end
def tangente(num)
    resultado = Math.tan(num)
    return resultado
end
def arcCos(num)
    resultado = Math.acos(num)
    return resultado
end

def calculadora
    puts 'Selecciona una opcion: Suma[1], Resta[2], multiplicacion[3], division[4], exponencial[5], hipotenusa[6], seno[7], coseno[8], tangente[9], arccos[10], cerrar[11]'
    operacion = gets
    esSuma = operacion == "1" ||operacion == "Suma" || operacion == "Suma[1]"
    esResta = operacion == "2" || operacion == "Resta" ||operacion == "Resta[2]"
    esDivision = operacion == "3" ||operacion == "multiplicacion" ||operacion == "multiplicacion[3]"
    esMultiplicacion = operacion == "4" ||operacion == "division" ||operacion == "division[4]"

    esExponencial = operacion == "5" ||operacion == "exponencial" ||operacion == "exponencial[5]"
    esHipotenusa = operacion == "6" ||operacion == "hipotenusa" ||operacion == "hipotenusa[6]"
    esSeno = operacion == "7" ||operacion == "seno" ||operacion == "seno[7]"
    esCoseno = operacion == "8" ||operacion == "coseno" ||operacion == "coseno[8]"
    esTangente = operacion == "9" ||operacion == "tangente" ||operacion == "tangente[9]"
    esArcCos = operacion == "10" ||operacion == "arctan" ||operacion == "arctan[10]"

    cerrar = operacion == "11" || operacion == "cerrar" || operacion == "cerrar[11]" ||  
    if esSuma || esMultiplicacion || esDivision || esResta
        puts "ingrese el numero uno"
        numeroUno = gets
        puts "ingrese el numero dos"
        numeroDos = gets

        if esSuma
            puts sumar(numeroDos, numeroUno)
        end
        if esResta
            puts restar(numeroUno, numeroDos)
        end
        if esMultiplicacion
            puts multiplicar(numeroUno, numeroDos)
        end
        if esDivision
            puts dividir(numeroUno, numeroDos)
        end
        if esHipotenusa
            puts hipotenusa(numeroUno, numeroDos)
        end
        calculadora
    end
    if esExponencial || esSeno || esCoseno || esTangente || esArcCos
        puts "escribir el numero:"
        num = gets
        if esExponencial
            puts exponencial(num)
        end
        if esSeno
            puts seno(num)
        end
        if esCoseno
            puts coseno(num)
        end
        if esTangente
            puts tangente(num)
        end
        if esArcCos
            puts arcCos(num)
        end
        calculadora
    end
    if (cerrar)
        puts "adios"
        break
    end
    calculadora
end

calculadora
