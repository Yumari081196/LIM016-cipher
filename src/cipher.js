const cipher = {
  encode: (Offset, str) => {
    if (isNaN(Offset) || Offset <= 0 || Offset == "") {
      throw new TypeError("Ocurrio un error");
    }
    let newstring = "";
    let x = Offset % 26;
    let mayusculasConTilde = "ÁÉÍÓÚ";
    let minusculasConTilde = "áéíóú";
    for (let i = 0; i < str.length; i++) {
      //Mayusculas y minusculas sin ñ
      if ((str.charCodeAt(i) <= 90 && str.charCodeAt(i) >= 65) || (str.charCodeAt(i) <= 122 && str.charCodeAt(i) >= 97)) {
        if ((str.charCodeAt(i) > 90 - x && str.charCodeAt(i) <= 90) || str.charCodeAt(i) > 122 - x) {
          newstring += String.fromCharCode(str.charCodeAt(i) - 26 + x);
        } else {
          newstring += String.fromCharCode(str.charCodeAt(i) + x);
        }
        //Mayusculas con Tilde
      } else if (str[i] == "Á" || str[i] == "É" || str[i] == "Í" || str[i] == "Ó" || str[i] == "Ú") {
        newstring += str[i].replace(str[i], mayusculasConTilde[(Offset + mayusculasConTilde.indexOf(str[i])) % 5]);
        //Minusculas con Tilde
      } else if (str[i] == "á" || str[i] == "é" || str[i] == "í" || str[i] == "ó" || str[i] == "ú") {
        newstring += str[i].replace(str[i], minusculasConTilde[(Offset + minusculasConTilde.indexOf(str[i])) % 5]);
      } else if (str.charCodeAt(i) <= 57 && str.charCodeAt(i) >= 48) {
        newstring += String.fromCharCode((str.charCodeAt(i) - 48 + Offset) % 10 + 48);
        //otros caracteres
      } else {
        newstring += String.fromCharCode(str.charCodeAt(i));
      }
    }
    return newstring;
  },
  decode: (Offset, str) => {
    if (isNaN(Offset) || Offset <= 0 || Offset == "") {
      throw new TypeError("Ocurrio un error");
    }
    let newstring = "";
    let x = Offset % 26;
    let mayusculasConTilde = "ÁÉÍÓÚ";
    let minusculasConTilde = "áéíóú";
    for (let i = 0; i < str.length; i++) {
      if ((str.charCodeAt(i) <= 90 && str.charCodeAt(i) >= 65) || (str.charCodeAt(i) <= 122 && str.charCodeAt(i) >= 97)) {
        if ((str.charCodeAt(i) >= 65 + x && str.charCodeAt(i) <= 90) || str.charCodeAt(i) >= 97 + x) {
          newstring += String.fromCharCode(str.charCodeAt(i) - x);
        } else {
          newstring += String.fromCharCode(str.charCodeAt(i) + 26 - x);
        }
        //Mayusculas con Tilde
      } else if (str[i] == "Á" || str[i] == "É" || str[i] == "Í" || str[i] == "Ó" || str[i] == "Ú") {
        newstring += str[i].replace(str[i], mayusculasConTilde[(5+(- Offset + mayusculasConTilde.indexOf(str[i])) % 5)%5]);
        //Minusculas con Tilde
      } else if (str[i] == "á" || str[i] == "é" || str[i] == "í" || str[i] == "ó" || str[i] == "ú") {
        newstring += str[i].replace(str[i], minusculasConTilde[(5+(- Offset + minusculasConTilde.indexOf(str[i])) % 5)%5]);
      } else if (str.charCodeAt(i) <= 57 && str.charCodeAt(i) >= 48) {
        newstring += String.fromCharCode((str.charCodeAt(i) - 57 - Offset) % 10 + 57);
        //otros caracteres
      } else {
        newstring += String.fromCharCode(str.charCodeAt(i));
      }
    }
    return newstring;
  },
};

export default cipher;
