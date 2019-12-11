def imprimir(array)
    for i in 0..array.length-1 do
        puts "dato: #{array[i]} ,posicion: #{i}"
    end
    return
end
def actualizar(array)
    puts "Ingrese un valor a agregar"
    temp = gets
    puts "Ingrese la posicion"
    posicion = gets
    array.insert(posicion,temp)
    puts "arreglo actualizado"
    imprimir(array)
    return array
end
def crear(array)
    puts "ingrese el tamaño del arreglo (ej: 4)"
    longitud = gets.to_i
    for i in 0..longitud-1 do
      puts "ingrese un valor a agregar"
      temp = gets.chomp
      array[i] = temp
    end
    imprimir(array)
    return array
end
def eliminar(array)
    puts "ingrese la posicion a eliminar"
    posicion = gets.to_i
    for i in posicion..array.length-1 do
        array[i] = array[i+1]
    end
    array.pop
    imprimir(array)
    return array
end
def main()
    puts "escoja una opcion crear[1], eliminar elemento[2], actualizar[3] o imprimir arreglo[4]"
    opcion = gets.chomp
    es_crear = opcion == "1" || opcion == "crear[1]" || opcion == "crear"
    es_eliminar = opcion == "2" || opcion == "eliminar elemento[2]" || opcion == "eliminar elemento"
    es_actualizar = opcion == "3" || opcion == "actualizar[3]" || opcion == "actualizar"
    es_imprimir = opcion == "4" || opcion == "imprimir arreglo[4]" || opcion == "imprimir arreglo"
    if es_crear
      arreglo = crear(arreglo)
    end
    if es_eliminar
      arreglo = eliminar(arreglo)
    end
    if es_actualizar
      arreglo = actualizar(arreglo)
    end
    if es_imprimir
      imprimir(arreglo)
    end
    main
end
main
