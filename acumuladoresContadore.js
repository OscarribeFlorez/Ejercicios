/*let contador=0;
contador = contador+1; //esta es la forma basica 
contador+=1; // esta es la forma compuetsa de hacer un contador o un acumulados 
contador++;
*/


// acumuladores 

let arraPrecios=[150,1600,600,7000,3000];
let acumuladorSuma=0;

arraPrecios.forEach(element=>{
acumuladorSuma+=element;
})
console.log(acumuladorSuma);