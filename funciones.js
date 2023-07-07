// en esta parte bamos a trabajas todo el tema de funcines 
 function getName(){
     return'hola mundo';
 };

const mensaje=getName();

 console.log(mensaje);

 // arrow funtion
 function suma(a, b){// funciones noemales que pueden ser tratadas como clases 
     return a+b;
 };
console.log(suma(2, 3));

const sum=(a,b)=>{
     return a+b;// estas son fuciones muchos mas ajiles y consume menos recursos 
     };
     console.log(sum(4,6));

const rest=(a,b) => a-b;
const resta=rest(10,7);
console.log(resta);
