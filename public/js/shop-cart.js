window.addEventListener("load", () => {
    const addProduct = document.querySelector("#add-product");
    const cartBrand = document.querySelector(".brand").getAttribute("value");
    const cartModel = document.querySelector(".model").getAttribute("value");
    const cartImage = document.querySelector("img").getAttribute("src");
    const cartPrice = document.querySelector(".priceCart").getAttribute("value");
    const cartId = document.querySelector("#add-product").getAttribute("value");
    const cartIcon = document.querySelector(".fa-cart-shopping")
    let shoppingCart = [];

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
            // { transform: 'rotate(0) scale(1)' },
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
            cartIcon.classList.add(display = "none")
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
