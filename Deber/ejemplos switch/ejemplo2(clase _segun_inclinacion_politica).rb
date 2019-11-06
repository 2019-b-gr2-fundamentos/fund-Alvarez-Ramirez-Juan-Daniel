puts "Con que ideologia politica se identifica? considere las opciones izquierda[1],centro izquierda[2],cnetro derecha[3],derecha[4],ultra derecha[5]"
input = gets
case input
when 1
    puts "usted probablemente esta entre clase media o baja"
when 2
    puts "usted probablemente esta entre clase media o media baja"
when 3
    puts "usted probablemente esta entre clase media o media alta"
when 4
    puts "usted probablemente esta entre clase media o alta"
when 5
    puts "usted probablemente esta entre clase meida o alta"
else
    puts "input no identificado, asegurese de ingresar un numero"
end