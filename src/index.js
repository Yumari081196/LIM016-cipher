import cipher from './cipher.js';

const correccion = document.getElementById("Boton");
correccion.addEventListener("click", () => {
  let edad = document.getElementById("Edad").value;
  let edadInt = Number(edad);
  if (isNaN(edadInt) || edadInt <= 0 || edadInt == "") {
    document.getElementById("advertencia").innerHTML = "Advertencia";
    throw new TypeError("Ocurrio un error");
  }
  if (edadInt < 15 || edadInt>90) {
    document.getElementById("advertencia").innerHTML = "Advertencia";
    return;
  } else {
    document.getElementById("primeraPantalla").style.display = "none";
    document.getElementById("segundaPantalla").style.display = "block";
  }
})
const bttnCode = document.getElementById("Codificar");
bttnCode.addEventListener("click", () => {
  let offset = Number(document.getElementById("Desplazamiento").value);
  let string = document.getElementById("textParaCipher").value;
  document.getElementById("textcodeencode").innerHTML = cipher.encode(offset, string.toUpperCase());
})

const bttnEnCode = document.getElementById("Decodificar");
bttnEnCode.addEventListener("click", () => {
  let offset = Number(document.getElementById("Desplazamiento").value);
  let string = document.getElementById("textParaCipher").value;
  document.getElementById("textcodeencode").innerHTML = cipher.decode(offset, string.toUpperCase());
})
const REFRESCAR = document.getElementById("refresh");
REFRESCAR.addEventListener("click", () => {

  document.getElementById("textcodeencode").innerHTML = "";
})
console.log(cipher);
