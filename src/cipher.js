const cipher = {
  encode: (Offset, str) => {
    if (isNaN(Offset) || Offset <= 0 || Offset == "") {
      throw new TypeError("Ocurrio un error");
    }
    let newstring = "";
    let x = Offset % 26;
    for (let i = 0; i < str.length; i++) {
      if ((str.charCodeAt(i) <= 90 && str.charCodeAt(i) >= 65) || (str.charCodeAt(i) <= 122 && str.charCodeAt(i) >= 97)) {
        if ((str.charCodeAt(i) > 79 - x && str.charCodeAt(i) <= 78) || (str.charCodeAt(i) > 111 - x && str.charCodeAt(i) <= 110)) {
          newstring += String.fromCharCode(str.charCodeAt(i) + x - 1);
        } else if ((str.charCodeAt(i) > 90 - x && str.charCodeAt(i) <= 90) || (str.charCodeAt(i) > 122 - x && str.charCodeAt(i) <= 122)) {
          newstring += String.fromCharCode(str.charCodeAt(i) - 26 + x);
        } else if (str.charCodeAt(i) == 79 - x) {
          newstring += "Ñ";
        } else if (str.charCodeAt(i) == 111 - x) {
          newstring += "ñ";
        } else {
          newstring += String.fromCharCode(str.charCodeAt(i) + x);
        }
      } else if (String.fromCharCode(str.charCodeAt(i)) == "Ñ") {
        newstring += String.fromCharCode(78 + x);
      } else if (String.fromCharCode(str.charCodeAt(i)) == "ñ") {
        newstring += String.fromCharCode(110 + x);
      } else {
        newstring += String.fromCharCode(str.charCodeAt(i));
      }
      /*if ((str.charCodeAt(i) <= 90 && str.charCodeAt(i) >= 65)||(str.charCodeAt(i) <= 122 && str.charCodeAt(i) >= 97)) {
        if ((str.charCodeAt(i) > 90 - x && str.charCodeAt(i)<=90)||str.charCodeAt(i) > 122 - x ) {
          newstring += String.fromCharCode(str.charCodeAt(i) - 26 + x);
        } else {
          newstring += String.fromCharCode(str.charCodeAt(i) + x);
        }
      }else{
        newstring += String.fromCharCode(str.charCodeAt(i));
      }*/
    }
    return newstring;
  },
  decode: (Offset, str) => {
    if (isNaN(Offset) || Offset <= 0 || Offset == "") {
      throw new TypeError("Ocurrio un error");
    }
    let newstring = "";
    let x = Offset % 26;
    for (let i = 0; i < str.length; i++) {
      if ((str.charCodeAt(i) <= 90 && str.charCodeAt(i) >= 65) || (str.charCodeAt(i) <= 122 && str.charCodeAt(i) >= 97)) {
        if ((str.charCodeAt(i) < 78 + x && str.charCodeAt(i) >= 79) || (str.charCodeAt(i) < 110 + x && str.charCodeAt(i) >= 111)) {
          newstring += String.fromCharCode(str.charCodeAt(i) - x + 1);
        } else if ((str.charCodeAt(i) < 65 + x && str.charCodeAt(i) >= 65) || (str.charCodeAt(i) < 97 + x && str.charCodeAt(i) >= 97)) {
          newstring += String.fromCharCode(str.charCodeAt(i) + 26 - x);
        } else if (str.charCodeAt(i) == 78 + x) {
          newstring += "Ñ";
        } else if (str.charCodeAt(i) == 110 + x) {
          newstring += "ñ";
        } else {
          newstring += String.fromCharCode(str.charCodeAt(i) - x);
        }
      } else if (String.fromCharCode(str.charCodeAt(i)) == "Ñ") {
        newstring += String.fromCharCode(79 - x);
      } else if (String.fromCharCode(str.charCodeAt(i)) == "ñ") {
        newstring += String.fromCharCode(111 - x);
      } else {
        newstring += String.fromCharCode(str.charCodeAt(i));
      }
      /*if((str.charCodeAt(i) <= 90 && str.charCodeAt(i) >= 65)||(str.charCodeAt(i) <= 122 && str.charCodeAt(i) >= 97)){
        if ((str.charCodeAt(i) >= 65 + x && str.charCodeAt(i) <= 90)||str.charCodeAt(i) >= 97+x) {
          newstring += String.fromCharCode(str.charCodeAt(i) - x);
        }else{
          newstring += String.fromCharCode(str.charCodeAt(i) + 26 - x);
        }
      }else{
        newstring += String.fromCharCode(str.charCodeAt(i));
      }*/
    }
    return newstring;
  },
};

export default cipher;
