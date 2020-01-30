
def imprimir(array)
    for i in 0..array.length-1 do
        puts "dato:  #{array[i]} posicion: #{i}"
    end
    return 
end
def actualizar(array)
    puts "Ingrese un valor a agregar"
    temp = gets.to_f
    puts "Ingrese la posicion"
    posicion = gets.to_i
    array.insert(posicion,temp)
    puts "arreglo actualizado"
    imprimir(array)
    return array
end
def crear(array)
    puts "ingrese la cantidad de valores a agregar"
    longitud = gets.to_i
    for i in 0..longitud-1 do
        puts "ingrese un valor a agregar"
        temp = gets.to_i
        array[i] = temp
    end
    imprimir(array)
    return array
end
def eliminar(array)
    puts "ingrese la posicion a eliminar"
    posicion = gets.to_i
    for i in posicion..array.length do
        array[i] = array[i+1]
    end
    array.pop
    imprimir(array)
    return array
end
def main()
    arreglo = []
    puts "escoja una opcion crear[1], eliminar elemento[2] o actualizar[3]"
    opcion = gets.chomp
    es_crear = opcion == "1" || opcion == "crear[1]" || opcion == "crear"  
    es_eliminar = opcion == "2" || opcion == "eliminar elemento[2]" || opcion == "eliminar elemento"
    es_actualizar = opcion == "3" || opcion == "actualizar[3]" || opcion == "actualizar" 
    if es_crear
      arreglo = crear(arreglo)
    end
    if es_eliminar
       arreglo = eliminar(arreglo)
    end
    if es_actualizar
       arreglo = actualizar(arreglo)
    end
    main
end
main
    