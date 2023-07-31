

// var numero = 5; 

// var titulo = document.getElementById('titulo');

// for(var contador = 0; contador < numero; contador++){
  

//    titulo.style.color = 'red';
// }
    
var buttonMode = document.querySelector('input#modeButton')
var on = 'Dark Mode'
var off = 'Clear Mode'
buttonMode.addEventListener('click', ()=>{

   if(buttonMode.value == on){
      buttonMode.value = off

      document.documentElement.style.setProperty("--color-principal", "grey")
      document.documentElement.style.setProperty("--color-secundaria", "red")
      document.documentElement.style.setProperty("--color-complementar", "white")
   }
   else{

      buttonMode.value = on
   
      document.documentElement.style.setProperty("--color-principal", "blue")
      document.documentElement.style.setProperty("--color-secundaria", "red")
      document.documentElement.style.setProperty("--color-complementar", "white")
   }

})

