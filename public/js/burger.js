window.addEventListener('load',function(){
    const burgerMenu = document.querySelector('.burger')
    const nav = document.querySelector('nav')
    burgerMenu.addEventListener("click", () => {
        nav.style.display = 'block'
    })
})
