window.addEventListener("load", () => {
    const addProduct = document.querySelector(".btn-agregar");
    const cartBrand = document.querySelector(".brand").getAttribute("value");
    const cartModel = document.querySelector(".model").getAttribute("value");
    const cartImage = document.querySelector("img").getAttribute("src");
    const cartPrice = document.querySelector(".priceCart").getAttribute("value");
    const cartId = document.querySelector("#add-product").getAttribute("value");
    const cartIcon = document.querySelector(".fa-cart-shopping")
    let shoppingCart = [];
    let initialValue = 0;

    //selectors for Cart view
    const productTitle = document.querySelector(".product-title");
    const productPriceBefore = document.querySelector(".product-price_before");
    //const productPrice = document.querySelector(".product-price"); // uso el anterior
    const productImage = document.querySelector("img").getAttribute("src");

    if (!localStorage.getItem("cart") || localStorage.getItem("cart") == []) {
        productTitle.innerHTML += "<h3>El carrito esta vacio</h3>";
        // y el precio es 0, dado que no hay productos
        productPrice.innerHTML += `<h3> TOTAL: $${initialValue} </h3>`;
    }

    // document.addEventListener("DOMContentLoaded", () => {
    //     shoppingCart = JSON.parse(localStorage.getItem('cart')) || [];
    // })

    addProduct.addEventListener("click", (e) => {
        e.preventDefault();
        //localStorage.refresh();
        addToCart();
    });

    function addToCart() {
        const cartSpinning = [
            { transform: 'rotate(360deg)' }
          ];
          
        const timeSpinning = {
            duration: 500,
            iterations: 1,
          }
        const newProduct = {
            brand: cartBrand,
            model: cartModel,
            image: cartImage,
            price: parseInt(cartPrice),
            id: cartId,
            cantidad: 1,
        };
        if (!localStorage.getItem("cart") || localStorage.cart.length == 0) {
            shoppingCart.push(newProduct);
            syncLocalStorage(shoppingCart);
            // alert("agregaste");
            cartIcon.animate(cartSpinning, timeSpinning);
        } else {
            let shoppingCart = JSON.parse(localStorage.cart);
            shoppingCart.push(newProduct);
            syncLocalStorage(shoppingCart)
            // alert("agregaste");
            cartIcon.animate(cartSpinning, timeSpinning);
        }
    }

    function syncLocalStorage(cart) {
        localStorage.setItem("cart", JSON.stringify(cart, null, " "));
    }
    // function deleteProducts() {
    //     localStorage.refresh();
    // }
    
 
});
