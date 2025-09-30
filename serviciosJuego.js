obtieneLetraAscii = function (placa, posicion) {
    let valAscci = parseInt(placa.charCodeAt(posicion));
    return valAscci
}
obtenerAleatorio = function () {
    let numero = parseInt(Math.random() * 3 + 1);
    return numero
}

mostrarCara = function (numero) {
    console.log(numero);
    if (numero == 1) { cambiarImagen("imgDado", "./images/piedra.png"); }
    else if (numero == 2) { cambiarImagen("imgDado", "./images/papel.png"); }
    else if (numero == 3) { cambiarImagen("imgDado", "./images/tijera.png"); }

}
cambiarImagen = function (idComponente, imagen) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = imagen;
}
jugarpu = function () {
    let valjuego = 1;
    return valjuego;
}
jugarpa = function () {
    let valjuego = 2;
    return valjuego;
}
jugarti = function () {
    let valjuego = 3;
    return valjuego;
}