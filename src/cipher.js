const cipher = {
  encode:(m,y)=>{
    let newstrinarray="";
    let x=m%26;
    for(let i=0;i<y.length;i++){
      if(parseInt(y.charCodeAt(i))<=90-x && parseInt(y.charCodeAt(i))>=65){
        newstrinarray+=String.fromCharCode(parseInt(y.charCodeAt(i))+x);
      }
      if(parseInt(y.charCodeAt(i))>90-x){
        newstrinarray+=String.fromCharCode(parseInt(y.charCodeAt(i))-26+x);
      }
      if(parseInt(y.charCodeAt(i))==32){
        newstrinarray+=String.fromCharCode(32);
      }
      
    }
    return newstrinarray;
  },
  decode:(m,y)=>{
    let newstrinarray="";
    let x=m%26;
    for(let i=0;i<y.length;i++){
      if(parseInt(y.charCodeAt(i))<=90 && parseInt(y.charCodeAt(i))>=65+x){
        newstrinarray+=String.fromCharCode(parseInt(y.charCodeAt(i))-x);
      }
      if(parseInt(y.charCodeAt(i))<65+x && parseInt(y.charCodeAt(i))!=32){
        newstrinarray+=String.fromCharCode(parseInt(y.charCodeAt(i))+26-x);
      }
      if(parseInt(y.charCodeAt(i))==32){
        newstrinarray+=String.fromCharCode(32);
      }
      
    }
    return newstrinarray;
  },
};

export default cipher;
