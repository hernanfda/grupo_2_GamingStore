const addProduct = document.querySelector(".btn-agregar-Detail");
let shoppingCart = [];

loadEventListeners();

function loadEventListeners() {
    addProduct.addEventListener("click", addToCart);

    document.addEventListener("DOMContentLoaded", () => {
        shoppingCart = JSON.parse(localStorage.getItem("cart")) || [];
        syncLocalStorage();
    });
}

function readProductData(product) {
    const infoProduct = {
        brand: product.querySelector(".brand").getAttribute("value"),
        model: product.querySelector(".model").getAttribute("value"),
        image: product.querySelector("#producto").getAttribute("src"),
        price: parseInt(product.querySelector(".priceCart").getAttribute("value")),
        id: parseInt(product.querySelector(".btn-agregar-Detail").getAttribute("value")),
        cantidad: 1,
    }

    if (shoppingCart.some((product) => product.id == infoProduct.id)) {
        // console.log("si paso el == del id");
        const products = shoppingCart.map(product => {
            if (product.id == infoProduct.id) { 
                //si es el mismo id aumento la cantidad
                let cantidad = parseInt(product.cantidad);
                cantidad++;
                product.cantidad = cantidad;
                return product; //lo retorno con la cantidad aumentada
            } else {
                return product; //lo retorno con cantidad 1
            }
        });
        shoppingCart = [...products];
    } else {
        shoppingCart = [...shoppingCart, infoProduct];
    }
    console.log(shoppingCart);
    syncLocalStorage()
    //////ACA EN EL CARRITO DE JS TIENE LA FUNCION CARRITOHTML()
}

function addToCart(e) {
    const cartIcon = document.querySelector(".fa-cart-shopping");
    const cartSpinning = [{ transform: "rotate(360deg)", color: 'rgb(162, 0, 255)' }]; //despues podria ser que incremente un numero de items e el cart
    const timeSpinning = {
        duration: 500,
        iterations: 1,
    };
    e.preventDefault();
    const product = e.target.parentElement.parentElement.parentElement;
    //console.log(product);
       readProductData(product);
    
    syncLocalStorage();
    cartIcon.animate(cartSpinning, timeSpinning);
}

function syncLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(shoppingCart));
}
