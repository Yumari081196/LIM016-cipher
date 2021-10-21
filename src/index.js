import cipher from './cipher.js';
// CONDICION EDAD PARA PASAR A LA SEGUNDA PANTALLA
const DePantalla1a2 = document.getElementById("DePantalla1a2");
    DePantalla1a2.addEventListener("click", () => {
      let edad = parseInt(document.getElementById("Edad").value);
      if(edad>=15&& edad<100){
        document.getElementById("primeraPantalla").style.display = "none";
        document.getElementById("segundaPantalla").style.display = "block";
      }else{
        document.getElementById("advertencia").innerHTML = "Rellenar el campo correctamente";
      }
      
    })
    
//BOTON CIFRAR
const bttnEncode = document.getElementById("Codificar");
bttnEncode.addEventListener("click", () => {
  let offset = parseInt(document.getElementById("Desplazamiento").value);
  let string = document.getElementById("textToEncode").value;
  //Recibir offset negativos o positivos
  if (offset >= 0) {
    document.getElementById("newMessage").innerHTML = "<b style='color:#8d64e4;'>"+cipher.encode(offset, string)+"</b>";
  } else {
    document.getElementById("newMessage").innerHTML = "<b style='color:#8d64e4;'>"+cipher.decode(-offset, string)+"</b>";
  }

})

//BOTON DESCIFRAR
const bttnDecode = document.getElementById("Decodificar");
bttnDecode.addEventListener("click", () => {
  let offset = parseInt(document.getElementById("Desplazamiento").value);
  let string = document.getElementById("textToDecode").value;
  //Recibir offset negativos o positivos
  if (offset >= 0) {
    document.getElementById("newMessage").innerHTML ="<b style='color:#d460d0;'>"+ cipher.decode(offset, string)+"</b>";
  } else {
    document.getElementById("newMessage").innerHTML ="<b style='color:#d460d0;'>"+ cipher.encode(-offset, string)+"</b>";
  }
})

//PANTALLA EMERGENTE
const abrir=document.getElementById("Abrir");
abrir.addEventListener("click",()=>{
  document.getElementById("Ayuda").style.display = "block";
  return false
})
const cerrar=document.getElementById("Cerrar");
cerrar.addEventListener("click",()=>{
  document.getElementById("Ayuda").style.display = "none";
})

//BOTON REFRESCAR
const REFRESCAR = document.getElementById("refresh");
REFRESCAR.addEventListener("click", () => {
  document.getElementById("newMessage").innerHTML = "";
})
console.log(cipher);
