// const e = require("express");

window.addEventListener('load',function(){

    const burgerMenu = document.querySelector('.burger')
    const nav = document.querySelector("nav")
    const navLinks = document.querySelectorAll(".navbar-a")
    const header = document.querySelector(".headerActions-Container")
    const headerContainer = document.querySelector(".header-Container")
    const productsLink = document.querySelector("#products")
    const user = document.querySelector(".fa-user")
    const userPanel = document.querySelector(".userPanel")
    const userPanelImg = document.querySelector("#userPanelImg")
    const cart = document.querySelector(".cart")
    const search = document.querySelector(".search")


    burgerMenu.addEventListener("click", (event) => {
        userPanel.style.display = "flex"
        navLinks.forEach(link => {
            link.classList.remove("activo")
        })
        nav.classList.toggle("activo")
        header.classList.toggle("activo")
        burgerMenu.classList.toggle("activo")
        user.classList.toggle("activo")
        userPanel.classList.toggle("activo")
        if (userPanelImg){
            userPanelImg.style.height = "30px"
            userPanelImg.style.width = "30px"
            userPanelImg.style.borderRadius = "50%"
            burgerMenu.addEventListener("click", (event) => {
                if (header.classList.contains("activo")) {
                    userPanelImg.style.display = "block"
                } else {
                    userPanelImg.style.display = "none"
                }
            })
        }
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
                navBar.style.height = "160px"
                navBar.style.padding = "0px 0px 5px 0px"
            } else {
                products.style.color = "white"
                navBar.style.height = "60px"
            }
            navLinks.forEach(link => {
                if(!link.id) {
                    link.classList.toggle("activo");
                }
            })
            burgerMenu.addEventListener("click", (e) => {
                e.preventDefault()
                if(products.style.color || products.style.color == "rgba(164, 89, 255)" ) {
                    products.style.color = "white"
                    navBar.style.height = "60px"
                } else {
                    products.style.color = "rgba(164, 89, 255)"
                    navBar.style.height = "160px"
                    navBar.style.padding = "0px 0px 5px 0px"
                }
            })
        })
        if (cart.style.display == "none" && search.style.display == "none") {
            cart.style.display = "block"
            search.style.display = "block"
            headerContainer.classList.remove("header-Container_activo")
        } else {
            headerContainer.classList.add("header-Container_activo")
            cart.style.display = "none"
            search.style.display = "none"
        }
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
                headerContainer.classList.remove("header-Container_activo")
            }
        })
    })
});
