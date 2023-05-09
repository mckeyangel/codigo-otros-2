var formulario = document.querySelector(".formulario");//Se corrige nombre de la clase

formulario.addEventListener("submit",function (e) {//Se corrige evento a addEventListener

  e.preventDefault();//Se agrega Default faltante a la función
  
  var n = formulario.elements[0];//Se agrega ; a las líneas 8, 9 y 10
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value.trim();//Se agrega .trim() para evitar que se se llene solo con espacios  y se agregan ; líneas faltantes
  var edad = e.value;

  var i = na.selectedIndex;//Se agrega ; a las siguientes líneas
  var nacionalidad = na.options[i].value;
  //Se eliminan console.log

  if (nombre.length === 0) {
    n.classList.add("error");
  }//if
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }//if
  if ((nombre.length > 0) && (edad >= 18 && edad < 120) ) {//Se agregan () para mejor lectura y signo = para aceptar la edad de 18
  agregarInvitado(nombre, edad, nacionalidad);
  }//if

});
//Se elimina botón borrar y solo se deja el botón para eliminar dentro del div de cada invitado
function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";//Se agrega ; a los if y a los else if
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }//else if

var lista = document.getElementById("elemento-lista")//Se corrige nombre del Id

var elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista");//Se corrige add
lista.appendChild(elementoLista);
//Se eliminan variables que estaban fuera de la función y quedaban duplicadas

function crearElemento(descripcion, valor) {//Se agregan ; faltantes dentro de la función
var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": ";
inputNombre.value = valor;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}//function crearElemento

crearElemento("Nombre", nombre);//Se agregan ; faltantes
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);

var botonBorrar = document.createElement("button");//Se agregan ; faltantes
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove();
  }//botonBorrar
}//funtion agregarInvitado