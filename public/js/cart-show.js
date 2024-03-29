window.addEventListener("load", (e) => {
    const cartDetail = document.querySelector(".cart-content_products"); //es todo el div que contiene el cart
    const trashCart = document.querySelector(".content-empty_btn");

    let articulosCarrito = JSON.parse(localStorage.getItem("cart")) || [];
    showCart();

    function showCart() {
        const productPrices = [];
        articulosCarrito.forEach((producto) => {
            let productQty = producto.cantidad;
            if (productQty > 1) {
                while (productQty >= 1) {
                    productPrices.push(producto.price);
                    productQty--;
                }
            } else {
                productPrices.push(producto.price);
            }

            document.querySelector(".cart-content_products").innerHTML += `<div class='products-details'>

                <img class="products-details_img" src="${producto.image}">
                <div class="products-details_text">
                    <div class='product-title'>${producto.brand}</div>  
                    <div class='product-title'>${producto.model}</div>  
                    <div class='product-price'>$${producto.price}</div>
                    <div class="cart-content_actions">
                    <form class="actions-form">
                        <div class="actions-form_left">
                            <button class="actions-form_delete" id="${producto.id}">Eliminar Producto</button>
                        </div>
                        <div class="actions-form_right">
                            <button class="actions-form_btn" id="minus_btn">&minus;</button>
                            <input type="number" class="actions-form_input" id=${producto.id} name="qty" value=${producto.cantidad} min="1">
                            <button class="actions-form_btn" id="plus_btn">&plus;</button>
                        </div>
                    </form>
                    <div class="actions-line"></div>
                </div>
                </div>  
            </div>`;
        });
        totalValue();

        //Cart qty buttons
        const plusBtn = document.querySelectorAll("#plus_btn");
        const minusBtn = document.querySelectorAll("#minus_btn");
        const qtyField = document.querySelectorAll(".actions-form_input");

        plusBtn.forEach((button, i) => {
            button.addEventListener("click", (e) => {
                e.preventDefault();
                articulosCarrito[i].cantidad += 1;
                qtyField[i].value = articulosCarrito[i].cantidad;
                localStorage.setItem("cart", JSON.stringify(articulosCarrito));
                location.reload();
            });
        });

        minusBtn.forEach((button, i) => {
            button.addEventListener("click", (e) => {
                e.preventDefault();
                if (articulosCarrito[i].cantidad > 1) {
                    articulosCarrito[i].cantidad -= 1;
                    qtyField[i].value = articulosCarrito[i].cantidad;
                    localStorage.setItem("cart", JSON.stringify(articulosCarrito));
                    location.reload();
                }
                //Uncomment the "else" bellow in order to delete the product if the user press minus with the qty in 1
                // else {
                //     let newCart = articulosCarrito.filter((element) => element.id != articulosCarrito[i].id);
                //     localStorage.setItem("cart", JSON.stringify(newCart));
                //     location.reload();
                // }
            });
        });

        //trash cart is correctly removed
        document.querySelector(".content-empty_btn").addEventListener("click", () => {
            localStorage.clear("cart");
            location.reload();
        });
        const deleteProductBtn = document.querySelectorAll(".actions-form_delete");

        deleteProductBtn.forEach((button) => {
            button.addEventListener("click", (e) => {
                let newCart = articulosCarrito.filter((element) => element.id != parseInt(e.target.id));
                localStorage.setItem("cart", JSON.stringify(newCart));
            });
        });

        //Total value function
        function totalValue() {
            let initialValue = 0;
            const sumWithInitial = productPrices.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
            document.querySelector(".summary-number_total").innerText = `$${sumWithInitial}`;
        }
    }
});
