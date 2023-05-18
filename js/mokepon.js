function seleccionaMascotaJugador(){
    alert("Seleccionando Mascota del Jugador");
}


window.onload = function(){
    document.getElementById('btn-mascota').onclick = seleccionaMascotaJugador;

}