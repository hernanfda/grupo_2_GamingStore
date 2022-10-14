window.addEventListener("load", (e) => {
    const cartDetail = document.querySelector(".cart-content_products"); //es todo el div que contiene el cart
    const trashCart = document.querySelector(".content-empty_btn");

    let articulosCarrito = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(articulosCarrito);
    showCart();

    function showCart() {
        const productPrices = [];
        articulosCarrito.forEach((producto) => {
            productPrices.push(producto.price);
            document.querySelector(".cart-content_products").innerHTML += `<div class='products-details'>

                <img class="products-details_img" src="${producto.image}">
                <div class="products-details_text">
                    <div class='product-title'>${producto.brand}</div>  
                    <div class='product-title'>${producto.model}</div>  
                    <div class='product-price'>${producto.price}</div>
                    <div class="cart-content_actions">
                    <form class="actions-form">
                        <div class="actions-form_left">
                            <button class="actions-form_delete" id="${producto.id}">Eliminar Producto</button>
                        </div>
                        <div class="actions-form_right">
                            <button class="actions-form_btn">&minus;</button>
                            <input type="number" class="actions-form_input" name="qty">
                            <button class="actions-form_btn">&plus;</button>
                        </div>
                    </form>
                    <div class="actions-line"></div>
                </div>
                </div>  
            </div>`;
        });

        console.log(productPrices);
        let initialValue = 0;
        const sumWithInitial = productPrices.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);

        document.querySelector(".summary-number_total").innerText = `$${sumWithInitial}`;
    }

    //trash cart is correctly removed
    trashCart.addEventListener("click", () => {
        //  alert('delete cart');
        // e.preventDefault();
        console.log("delete de panchito");
        // localStorage.clear("cart");
        // console.log(localStorage);
    });

    const deleteProduct = document.querySelectorAll(".actions-form_delete");

    deleteProduct.forEach((button) => {
        button.addEventListener("click", (e) => {
            let newCart = articulosCarrito.filter((element) => element.id != parseInt(e.target.id));
            localStorage.setItem("cart", JSON.stringify(newCart));
        });
    });

    //console.log(articulosCarrito);
});
