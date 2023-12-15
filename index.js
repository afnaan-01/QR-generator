let generate = document.querySelector('#generate');
let downLoad = document.querySelector('#download');
let qr = document.querySelector('img');
let input = document.querySelector('input');

  generate.onclick = ()=>{
      if(!(input.value == '')){
          qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
          downLoad.href = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
     }
  };