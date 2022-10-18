window.addEventListener('load', function(){
    let articulos = document.querySelectorAll(".articulo")
    // console.log(articulos.length)
    let section = document.querySelector('section')
    let body = document.querySelector('body')
    let footer= document.querySelector('footer')
    // let div = document.querySelector('#true')
    if(articulos.length < 8){
        section.style.height = '100%'
        body.style.position = "unset"
        footer.style.position ="absolute";
        footer.style.bottom = "0px"
    }
})