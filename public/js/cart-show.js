window.addEventListener("load", (e) => {
    let articulosCarrito = JSON.parse( localStorage.getItem('cart') ) || []  ;
 
    const cartDetail = document.querySelector(".cart-content_products") //es todo el div que contiene el cart
    const thrashCart = document.querySelector(".content-empty_btn");
    const deleteProduct = document.querySelector(".actions-form_delete");

    document.addEventListener('DOMContentLoaded', () => {
         console.log(articulosCarrito);
       // carritoHTML();
    });
    
    cartDetail.addEventListener("click", (e) => {
       // alert("click")
        console.log(articulosCarrito); //se ve el array
    })

    thrashCart.addEventListener("click", (e) => {
        e.preventDefault();
      //  alert('delete cart');
        localStorage.removeItem('cart');
        location.reload();
    })

    deleteProduct.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(e.target);
    })
    //console.log(articulosCarrito);
    
})