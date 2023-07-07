

let nombre="oscar uribe ";
// length contador de careacteres de una cadena 
console.log(nombre.length)

// remplaso de cadenas o partes de la cadena 
let direccion="oscaruribe25f@gmail.com";
let direccionModificada=direccion.replace("@",'*')// cambia el valor de laas comillas doble spor lo que esta en la cedna de comillas cencilas 
console.log(direccionModificada);

//funcion chartAt
let apellido="uribe";
let apellidoExtra=apellido.charAt(2);
console.log(apellidoExtra);

// funcion subString 
let correoElectronico="oscaruribe25f@gmail.com";
let correoModificado=correoElectronico.substring(4,correoElectronico.length); //modifica la cadena desde el punto o la pocicion indicada 
console.log(correoModificado);

//split 
let facturas="fact:1@fact:2@fact:3@fact:4"
let arrafacturas=facturas.split("@");
console.log(arrafacturas);
arrafacturas.forEach(Element  => {
     let arraFact=Element.split(":"); // me permite armar otro arra con os dos puntos 
     console.log(arraFact[1]);
     });
//como disminuir costos para las empresas 
// es utilizar cadenas complejas 

let precioProductos="125,450,345,356"
let arraPrecioProductos=precioProductos.split(",");
console.log(arraPrecioProductos)
let contador=0;
arraPrecioProductos.forEach(Element =>{
     contador+=parseInt(Element);
     });

console.log(contador);


//TolowerCase && toUpperCase cambi de malluscula  a minuscula y viseversa 

let nombrerProducto="Oscar Uribe FlORez";
console.log(nombrerProducto.toLowerCase());// muestra toda la casdena en minuscula 
console.log(nombrerProducto.toUpperCase());// muestra toda la cadena en mayuscula 

//trim  elimina espacios inesesarios de una cadena 
let cadenaTrim="oscar ";
console.log(cadenaTrim.trim()); // elimina los espacios en blanco de la cadena al inicio y fin 


//slice() => estrae una porcion d ela cadena 

let cadenaSlice="oscar uribe florez";
let cadenaModificadaSlice=cadenaSlice.slice(-10); // me muestra de atras para delante los que yo quiero comparar 

console.log(cadenaModificadaSlice);

// template string
 let numFact ="0003";
 let cliente="oscar uribe";
 let mensajeFactura="el cliente "+ cliente+"con la factura "+ numFact+"gano un millo de dolares";
 let mensajeTemplFactura=`el cliente ${cliente}con la factura ${numFact} gano un millo de dolares`;
 console.log(mensajeFactura);
 console.log(mensajeTemplFactura);


// search => Include 

let text = " oscar,thomas,greiz,alex,david,saray";
if(text.toLocaleLowerCase().trim().slice(-4).includes("oscar"));

//
