window.addEventListener('load',function(){
    const burgerMenu = document.querySelector('.burger');
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll(".navbar-a");
    const header = document.querySelector(".headerActions-Container")
    const productsLink = document.querySelector("#products")
    const user = document.querySelector(".fa-user")
    const userPanel = document.querySelector(".userPanel")
    burgerMenu.addEventListener("click", () => {
        navLinks.forEach(link => {
            link.classList.remove("activo")
        })
        nav.classList.toggle("activo");
        header.classList.toggle("activo")
        burgerMenu.classList.toggle("activo");
        user.classList.toggle("activo");
        userPanel.classList.toggle("activo");
        if(productsLink.id == "products") {
            productsLink.id = "productsActivo"
        } else {
            productsLink.id = "products"
        }
        productsLink.addEventListener("click", (e) => {
            e.preventDefault()
            const products = e.target
            const navBar = document.querySelector(".navbar.activo")
            if(!products.style.color || products.style.color == "white" ) {
                products.style.color = "rgba(164, 89, 255)"
                navBar.style.height = "145px"
            } else {
                products.style.color = "white"
                navBar.style.height = "60px"
            }
            navLinks.forEach(link => {
                if(!link.id) {
                    link.classList.toggle("activo");
                }
            })
        })
    });
    // En caso de clickear un link se desactivan los estilos
    
    navLinks.forEach(a => {
        a.addEventListener("click", () => {
            if(!a.id) {
                const navBar = document.querySelector(".navbar.activo")
                navBar.style.height = "60px"
                productsLink.style.color = "white"
                header.classList.remove("activo")
                nav.classList.remove("activo")
                burgerMenu.classList.remove("activo")
                productsLink.id = "products"
                navLinks.forEach(link => {
                    link.classList.remove("activo");
                })
                user.classList.toggle("activo");
                userPanel.classList.toggle("activo");
            }
        })
    })
});
