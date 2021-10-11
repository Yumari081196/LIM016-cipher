import cipher from './cipher.js';

const correccion = document.getElementById("Boton");
correccion.addEventListener("click", () => {
  let edad = document.getElementById("Edad").value;
  let edadInt = Number(edad);
  if (isNaN(edadInt) || edadInt <= 0 || edadInt == "") {
    document.getElementById("advertencia").innerHTML = "Rellenar el campo de manera correcta";
    throw new TypeError("Ocurrio un error");
  }
  if (edadInt < 15 || edadInt>90) {
    document.getElementById("advertencia").innerHTML = "Tener minimo 15 años";
    return;
  } else {
    document.getElementById("primeraPantalla").style.display = "none";
    document.getElementById("segundaPantalla").style.display = "block";
  }
})
const bttnEncode = document.getElementById("Codificar");
bttnEncode.addEventListener("click", () => {
  let offset = parseInt(document.getElementById("Desplazamiento").value);
  let string = document.getElementById("textParaCipher").value;
  if(offset>=0){
    document.getElementById("textcodeencode").innerHTML = cipher.encode(offset, string);
  }else{
    document.getElementById("textcodeencode").innerHTML = cipher.decode(-offset, string);
  }
  
})

const bttnDecode = document.getElementById("Decodificar");
bttnDecode.addEventListener("click", () => {
  let offset = parseInt(document.getElementById("Desplazamiento").value);
  let string = document.getElementById("textParaCipher").value;
  if(offset>=0){
    document.getElementById("textcodeencode").innerHTML = cipher.decode(offset, string);
  }else{
    document.getElementById("textcodeencode").innerHTML = cipher.encode(-offset, string);
  }
})
const REFRESCAR = document.getElementById("refresh");
REFRESCAR.addEventListener("click", () => {
  document.getElementById("textcodeencode").innerHTML = "";
})
console.log(cipher);
