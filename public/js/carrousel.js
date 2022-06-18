let slideIndex = 1;
let timer
// let i
showSlides(slideIndex);
// autoShowSlides();

// Next/previous controls
function plusSlides(n) {
    clearTimeout(timer);
    showSlides((slideIndex += n));
}

// dot image controls
function currentSlide(n) {
    clearTimeout(timer);
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n === undefined) { slideIndex++ }
    console.log(slideIndex)
    if (n > slides.length || slideIndex > slides.length) {
        console.log("vuelve a 1")
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    timer = setTimeout(showSlides, 16000)
}