let slideIndex = 1;
// let timer //the timer will get a value when showSlides kicks in
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    // clearTimeout(timer); //reset timer each time we change slides with the arrows
    showSlides((slideIndex += n));
}

// dot image controls
function currentSlide(n) {
    // clearTimeout(timer); //reset timer each time we select a slide manually
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    // if (n === undefined) { slideIndex++ } //Auto start the slideshow
    //the or.. prevents the auto mechanism to hit an empty index
    if (n > slides.length || slideIndex > slides.length) {
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
    // timer = setTimeout(showSlides, 16000) //timer starts
}