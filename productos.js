/* 

auriculares: https://images.fravega.com/f500/95d11723d52ea94a869d3e744825e257.jpg
notebook: https://images.fravega.com/f300/a5cba39cb966302c53e544548b3b7b2c.jpg.webp

minicomponente: https://images.fravega.com/f300/e8d98416a3c8d0de4276925ea0efa17a.jpg
 */

const imagenesProductos = [
   "https://http2.mlstatic.com/D_NQ_NP_2X_619126-MLA50232132766_062022-F.webp",
   "https://http2.mlstatic.com/D_NQ_NP_2X_847906-MLA49763193559_042022-F.webp",
   "https://http2.mlstatic.com/D_NQ_NP_991401-MLA31351342525_072019-O.webp",
];


const nombreProductos = ["tv", "celular", "pc"]; //, "auriculares", "notebook"
 
    function mostrarVector(vector){
        for (let i = 0; i < (nombreProductos.length); i++) {
            
            console.log(nombreProductos[i]); 
        }
        
    }
    
nombreProductos.push("auriculares","notebook");
mostrarVector(nombreProductos);



function mostrarVector(vector){
    for (let i = 0; i < (imagenesProductos.length); i++) {
        
        console.log(imagenesProductos[i]); 
    }
    
}

imagenesProductos.push("https://images.fravega.com/f500/95d11723d52ea94a869d3e744825e257.jpg","https://images.fravega.com/f300/a5cba39cb966302c53e544548b3b7b2c.jpg.webp");
mostrarVector(imagenesProductos);



// Punto 2 - ok

let productoNuevo = "prod def";
let textoProducto = "texto def";

function agregarProducto() {
    productoNuevo = document.querySelector ('#nuevo_producto').value;
    textoProducto = document.querySelector ('#texto_producto').value;
    document.querySelector(`#texto_nuevo`).innerHTML = `
    <h4> Producto ${textoProducto} </h4>  
    <img width="300px" src=${productoNuevo}>
    `;
    
}

