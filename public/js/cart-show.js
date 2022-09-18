window.addEventListener("load", (e) => {
    let articulosCarrito = JSON.parse( localStorage.getItem('cart') ) || []  ;
 
    const cartDetail = document.querySelector(".cart-content_products")

    document.addEventListener('DOMContentLoaded', () => {
        // console.log(articulosCarrito);
       // carritoHTML();
    });
    
    cartDetail.addEventListener("click", (e) => {
        alert("click")
        console.log(articulosCarrito); //se ve el array
    })
    
    
})