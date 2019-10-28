//04-condicionales.ts
const casado = true;
const mosero = true;
const casadoYMosero = casado == true && mosero == true;

if(casadoYMosero){
    console.log("Si estoy casado y con mosa");
}else{
    console.log("No estoy casado y no tengo mosa");
}
//
//
//
// celularDescargado == true
// celularDañado == true
// amaneceMuerto == true
// estaActivadaLaAlarma != true
// estaEnModoSilencio == true
//const seAtrasoAClase = celularDescargado == true || celularDañado == true || amaneceMuerto == true || estaEnModoSilencio == true || estaActivadaLaAlarma != true

//si el celular esta descargado, el celular esta dañado, amanece muerto, no esta activada la alarma o el celular esta en modo silencio, El se atrasa a clase o se pone a llorar.

const celularDescargado = true;
const celularDañado = true;
const amaneceMuerto = true;
const estaActivadaLaAlarma = true;
const estaEnModoSilencio = true;
const seAtrasoAClase = celularDescargado == true || celularDañado == true || amaneceMuerto == true || estaEnModoSilencio == true || estaActivadaLaAlarma != true;

if(seAtrasoAClase){
    console.log("se atrasa a clase");
}else{
    console.log("se hace bolita hasta la proxima alarma");
}
//AND -> && -> AMPER SIGN
//or -> || -> PIPES
//TRUE Y FALSE = TRUE