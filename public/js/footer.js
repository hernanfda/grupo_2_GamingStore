window.addEventListener('load', function(){
    let articulos = document.querySelectorAll(".articulo")
    // console.log(articulos.length)
    let section = document.querySelector('section')
    // let div = document.querySelector('#true')
    if(articulos.length < 8){
        section.style.height = '100vh'
    }
})