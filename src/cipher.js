const cipher = {
  encode: (Offset, str) => {
    if(isNaN(Offset)||Offset<=0||Offset==""){
      throw new TypeError("Ocurrio un error");
    }
    let newstring = "";
    let x = Offset % 26;
    for (let i = 0; i < str.length; i++) {
      if ((str.charCodeAt(i) <= 90 && str.charCodeAt(i) >= 65)||(str.charCodeAt(i) <= 122 && str.charCodeAt(i) >= 97)) {
        if ((str.charCodeAt(i) > 90 - x && str.charCodeAt(i)<=90)||str.charCodeAt(i) > 122 - x ) {
          newstring += String.fromCharCode(str.charCodeAt(i) - 26 + x);
        } else {
          newstring += String.fromCharCode(str.charCodeAt(i) + x);
        }
      }else{
        newstring += String.fromCharCode(str.charCodeAt(i));
      }
    }
    return newstring;
  },
  decode: (Offset, str) => {
    if(isNaN(Offset)||Offset<=0||Offset==""){
      throw new TypeError("Ocurrio un error");
    }
    let newstring = "";
    let x = Offset % 26;
    for (let i = 0; i < str.length; i++) {
      if((str.charCodeAt(i) <= 90 && str.charCodeAt(i) >= 65)||(str.charCodeAt(i) <= 122 && str.charCodeAt(i) >= 97)){
        if ((str.charCodeAt(i) >= 65 + x && str.charCodeAt(i) <= 90)||str.charCodeAt(i) >= 97+x) {
          newstring += String.fromCharCode(str.charCodeAt(i) - x);
        }else{
          newstring += String.fromCharCode(str.charCodeAt(i) + 26 - x);
        }
      }else{
        newstring += String.fromCharCode(str.charCodeAt(i));
      }
    }
    return newstring;
  },
};

export default cipher;
