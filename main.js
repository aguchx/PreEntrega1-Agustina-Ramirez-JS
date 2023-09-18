
// pedir datos al usuario. 
let alto= parseFloat(prompt('Por favor, ingrese el alto del diseño en centimetros: '));
let ancho= parseFloat(prompt('Por favor, ingrese el ancho del diseño en centimetros: '));
let cantidadUnidades= parseFloat(prompt('Por favor, ingrese la cantidad de unidades que necesite imprimir: '));

// calcular la cantidad de unidades por hoja
const unidadesPorHoja = calcularUnidadesPorHoja(alto, ancho);


function calcularUnidadesPorHoja(alto, ancho) {
    const anchoHojaA4 = 21; 
    const altoHojaA4 = 29.7; 

     
    if (ancho > anchoHojaA4 || alto > altoHojaA4) {
        return 0; // No entran ninguna unidad en una hoja
    }

    const unidadesPorAncho = Math.floor(anchoHojaA4 / ancho);
    const unidadesPorAlto = Math.floor(altoHojaA4 / alto);

    return unidadesPorAncho * unidadesPorAlto;
}


// calcular la cantidad de hojas necesarias
let hojasNecesarias = 0;

if (unidadesPorHoja > 0) {
    hojasNecesarias = 1;
}

// calcular hojas necesarias
for (let unidadesRestantes = cantidadUnidades; unidadesRestantes > unidadesPorHoja; unidadesRestantes -= unidadesPorHoja) {
    hojasNecesarias++;
}

 // costo por copia de $250
 const costoPorCopia = 250;

 // calcular el costo total
 let costoTotal = hojasNecesarias*costoPorCopia;
 

 // mostrar los resultados
 alert("Cantidad de unidades por hoja: " + unidadesPorHoja +
       "\nCantidad de hojas necesarias: " + hojasNecesarias +
       "\nCosto total: $" + costoTotal.toFixed(2)); 
       // Redondear 2 decimales


// mostrar todos los valores funcionando por consola
console.log('Ancho del diseño = '+ ancho);
console.log('Alto del diseño = '+ alto);
console.log('Cantidad de unidades = '+ cantidadUnidades);
console.log('Cantidad unidades x hoja ='+ unidadesPorHoja);
console.log('Cantidad Hojas necesarias ='+ hojasNecesarias);
console.log('Costo total ='+ costoTotal);
