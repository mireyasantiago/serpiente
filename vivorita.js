alert("mensaje");
//
var serpiente= document.getElementById('cabezaSerpiente');
//definir la posicion  que parte inicilmente de 0 (x,y)
var posicionX= parseInt(0);
var posicionY= parseInt(0);
// el movimiento es de 100 por que mi bloque es de 500
var movimiento= parseInt(100);
// cada vez que se detecta la presion del teclado se inicia la funcion.
document.addEventListener("keydown", moverSerpiente);
/*var reiniciar= document.getElementById('reiniciar');
document.addEventListener("click",reiniciarJuego);*/

function moverSerpiente(){
  // devuelve el codigo de caracteres unicode
  var teclaPresionada= event.keyCode;
  console.log(event)

  switch (teclaPresionada) {
    case 40://abajo
      posicionY = posicionY+movimiento;
      if(posicionY<500){
      serpiente.style.marginTop=posicionY+"px";
      }
      else{
        alert("Fin del Juego");
      }
      break;
    case 38://arriba
      posicionY = posicionY-movimiento;
      if(posicionY>=0){
      serpiente.style.marginTop=posicionY+"px";
      }
      else{
        alert("Fin del Juego");
      }
      break;
    case 39:// derecha
      posicionX = posicionX+movimiento;
      if(posicionX<500){
      serpiente.style.marginLeft= posicionX+"px";
      }
      else{
        alert("Fin del juego");
      }
      break;

    case 37:// izquierda
      posicionX = posicionX-movimiento;
      if(posicionX>=0){
      serpiente.style.marginLeft= posicionX+"px";
      }
      else{
        alert("Fin del juego");
      }
      break;
      default:
  }
}
/*
function reiniciarJuego(){
  posicionX=0;
  posicionY=0;


}*/
