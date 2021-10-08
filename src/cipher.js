const cipher = {
  encode: (m, y) => {
    if(isNaN(m)||m<=0||m==""){
      throw new TypeError("Ocurrio un error");
    }
    let newstrinarray = "";
    let x = m % 26;
    for (let i = 0; i < y.length; i++) {
      if ((y.charCodeAt(i) <= 90 && y.charCodeAt(i) >= 65) ||y.charCodeAt(i)==32) {
        if (y.charCodeAt(i) > 90 - x) {
          newstrinarray += String.fromCharCode(y.charCodeAt(i) - 26 + x);
        }else if (y.charCodeAt(i) == 32) {
          newstrinarray += String.fromCharCode(32);
        } else {
          newstrinarray += String.fromCharCode(y.charCodeAt(i) + x);
        }
      }else{
        newstrinarray='<i>"Ops, caracteres ingresados no validos"</i>';
      }
    }
    return newstrinarray;
  },
  decode: (m, y) => {
    if(isNaN(m)||m<=0||m==""){
      throw new TypeError("HOLAAAAAAAAAAAAAAAAAA");
    }
    let newstrinarray = "";
    let x = m % 26;
    for (let i = 0; i < y.length; i++) {
      if((y.charCodeAt(i) <= 90 && y.charCodeAt(i) >= 65) ||y.charCodeAt(i)==32){
        if (y.charCodeAt(i) >= 65 + x) {
          newstrinarray += String.fromCharCode(y.charCodeAt(i) - x);
        }else if (y.charCodeAt(i) == 32) {
          newstrinarray += String.fromCharCode(32);
        }else{
          newstrinarray += String.fromCharCode(y.charCodeAt(i) + 26 - x);
        }
      }else{
        newstrinarray='<i>"Ops, caracteres ingresados no validos"</i>';
      }
    }
    return newstrinarray;
  },
};

export default cipher;
