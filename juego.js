let pjugador = 0;
let pcompu = 0;
jugarpu = function () {
    let obtNumero;
    let numero = obtenerAleatorio();
    mostrarCara(numero);
    if (numero == 3) {
        pjugador = pjugador + 1;
        mostrarTexto("lblResu", " Gano Yo");
        mostrarTexto("pjuga", pjugador);
    }
    if (numero == 2) {
        pcompu = pcompu + 1;
        mostrarTexto("lblResu", " Gana la Computadora");
        mostrarTexto("pcompu", pcompu);
    }
    if (numero == 1) {
        pcompu = pcompu + 1;
        mostrarTexto("lblResu", " Empates mi so");
    }
}
jugarpa = function () {
    let obtNumero;
    let numero = obtenerAleatorio();
    mostrarCara(numero);
    if (numero == 1) {
        pjugador = pjugador + 1;
        mostrarTexto("lblResu", " Gano Yo");
        mostrarTexto("pjuga", pjugador);
    }
    if (numero == 3) {
        pcompu = pcompu + 1;
        mostrarTexto("lblResu", " Gana la Computadora");
        mostrarTexto("pcompu", pcompu);
    }
    if (numero == 2) {
        pcompu = pcompu + 1;
        mostrarTexto("lblResu", " Empates mi so");
    }

}
jugarti = function () {
    let obtNumero;
    let numero = obtenerAleatorio();
    mostrarCara(numero);
    if (numero == 2) {
        pjugador = pjugador + 1;
        mostrarTexto("lblResu", " Gano Yo");
        mostrarTexto("pjuga", pjugador);
    }
    if (numero == 1) {
        pcompu = pcompu + 1;
        mostrarTexto("lblResu", " Gana la Computadora");
        mostrarTexto("pcompu", pcompu);
    }
    if (numero == 3) {
        pcompu = pcompu + 1;
        mostrarTexto("lblResu", " Empates mi so");
    }

}
obtieneMinumero = function (valJuego) {
    miNumero = parseInt(valJuego);
    return miNumero;
}

limpiar = function (){
pcompu = 0;
pjugador = 0;
mostrarTexto("pcompu", pcompu);
mostrarTexto("pjuga", pjugador);
mostrarTexto("lblResu", "");
}