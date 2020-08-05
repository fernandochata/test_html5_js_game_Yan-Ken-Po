let puntajeMaquina = 0;
let puntajePersona = 0;
let numeroIntentos = 0;

function jugar(jugadaHumano) {
    document.getElementById("numeroJugadas").innerHTML = ++numeroIntentos;
    var jugadaMaquina = "";
    var jugada = Math.floor(Math.random() * 3);
    if (jugada == 0) {
        document.getElementById("maquina").innerHTML = '<i class="far fa-hand-rock"> PIEDRA</i>';
        jugadaMaquina = "piedra";
    } else {
        if (jugada == 1) {
            document.getElementById("maquina").innerHTML = '<i class="far fa-hand-paper"> PAPEL</i>';
            jugadaMaquina = "papel";
        } else {
            document.getElementById("maquina").innerHTML = '<i class="far fa-hand-scissors"> TIJERAS</i>';
            jugadaMaquina = "tijera";
        }
    };

    if (jugadaHumano == "piedra") {
        if (jugadaMaquina == "piedra") {
            document.getElementById("resultado").className = "text-secondary";
            document.getElementById("resultado").innerHTML = "<h1>EMPATE!</h1>";
            document.getElementById("maquina").className = "btn btn-outline-primary btn-lg";
        } else if (jugadaMaquina == "papel") {
            document.getElementById("resultado").className = "text-danger";
            document.getElementById("resultado").innerHTML = "<h1>PERDISTE!</h1>";
            document.getElementById("puntajeMaquina").innerHTML = ++puntajeMaquina;
            document.getElementById("maquina").className = "btn btn-outline-warning btn-lg";
        } else if (jugadaMaquina == "tijera") {
            document.getElementById("resultado").className = "text-success";
            document.getElementById("resultado").innerHTML = "<h1>GANASTE!</h1>";
            document.getElementById("puntajePersona").innerHTML = ++puntajePersona;
            document.getElementById("maquina").className = "btn btn-outline-info btn-lg";
        }
    } else if (jugadaHumano == "papel") {
        if (jugadaMaquina == "piedra") {
            document.getElementById("resultado").className = "text-success";
            document.getElementById("resultado").innerHTML = "<h1>GANASTE!</h1>";
            document.getElementById("puntajePersona").innerHTML = ++puntajePersona;
            document.getElementById("maquina").className = "btn btn-outline-primary btn-lg";
        } else if (jugadaMaquina == "papel") {
            document.getElementById("resultado").className = "text-secondary";
            document.getElementById("resultado").innerHTML = "<h1>EMPATE!</h1>";
            document.getElementById("maquina").className = "btn btn-outline-warning btn-lg";
        } else if (jugadaMaquina == "tijera") {
            document.getElementById("resultado").className = "text-danger";
            document.getElementById("resultado").innerHTML = "<h1>PERDISTE!</h1>";
            document.getElementById("puntajeMaquina").innerHTML = ++puntajeMaquina;
            document.getElementById("maquina").className = "btn btn-outline-info btn-lg";
        }
    } else if (jugadaHumano == "tijera") {
        if (jugadaMaquina == "piedra") {
            document.getElementById("resultado").className = "text-danger";
            document.getElementById("resultado").innerHTML = "<h1>PERDISTE!</h1>";
            document.getElementById("puntajeMaquina").innerHTML = ++puntajeMaquina;
            document.getElementById("maquina").className = "btn btn-outline-primary btn-lg";
        } else if (jugadaMaquina == "papel") {
            document.getElementById("resultado").className = "text-success";
            document.getElementById("resultado").innerHTML = "<h1>GANASTE!</h1>";
            document.getElementById("puntajePersona").innerHTML = ++puntajePersona;
            document.getElementById("maquina").className = "btn btn-outline-warning btn-lg";
        } else if (jugadaMaquina == "tijera") {
            document.getElementById("resultado").className = "text-secondary";
            document.getElementById("resultado").innerHTML = "<h1>EMPATE!</h1>";
            document.getElementById("maquina").className = "btn btn-outline-info btn-lg";
        }
    } else {
        console.log("Error al ingresar la opcion");
    }
};

function reiniciar() {

    puntajeMaquina = 0;
    puntajePersona = 0;
    numeroIntentos = 0;

    document.getElementById("numeroJugadas").innerHTML = 0;
    document.getElementById("puntajePersona").innerHTML = 0;
    document.getElementById("puntajeMaquina").innerHTML = 0;
    document.getElementById("resultado").className = "";
    document.getElementById("resultado").innerHTML = "<h1>RESULTADO</h1>";

}