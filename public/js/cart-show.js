const cart = require('./shop-cart');

window.addEventListener("load", (e) => {
    const cartDetail = document.querySelector(".cart-content_products"); //es todo el div que contiene el cart
    const thrashCart = document.querySelector(".content-empty_btn");
    const deleteProduct = document.querySelector(".actions-form_delete");

    let articulosCarrito = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(articulosCarrito);
    showCart();

    function showCart() {
        articulosCarrito.forEach((producto) => {
            document.querySelector(".product-title").innerHTML = producto.brand;
            document.querySelector(".product-title").innerHTML += producto.model;
            document.querySelector(".product-price").innerHTML = producto.price;
            document.querySelector(".products-details_img").setAttribute("src", producto.image);
            // id: producto.id

            console.log(producto.image);
        });
    }

    //trash cart is correctly removed
    thrashCart.addEventListener("click", (e) => {
        e.preventDefault();
        //  alert('delete cart');
        localStorage.clear("cart");
        location.reload();
    });

    deleteProduct.addEventListener("click", (e) => {
        if (e.target.classList.contains("actions-form_delete")) {
            e.preventDefault();
            cart.moveCart();
            const product = e.target.parentElement.parentElement;
            const productId = product.querySelector(".actions-form_left").getAttribute("data-product-id");
            articulosCarrito = articulosCarrito.filter((product) => product.id !== productId);   
            cartIcon.animate(cartSpinning, timeSpinning);
        
        }
    });
    //console.log(articulosCarrito);
});
