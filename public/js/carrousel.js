let slideIndex = 1;
let timer //the timer will get a value when showSlides kicks in
// Starts the slideshow at the first slide
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    clearTimeout(timer); //reset timer each time we change slides with the arrows
    showSlides((slideIndex += n));
}

// dot image controls
function currentSlide(n) {
    clearTimeout(timer); //reset timer each time we select a slide manually
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n === undefined) { slideIndex++ } //Auto start the slideshow
    //resets the slide show if we or the automatic system hits next at the last slide
    if (n > slides.length || slideIndex > slides.length) {
        slideIndex = 1;
    }
    //go to the las slide if we hit previous in the first one
    if (n < 1) {
        slideIndex = slides.length;
    }
    //"turns of" every active slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //"turns off" all the dots of the dot navigation bar
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // "turns on" the selected slide
    slides[slideIndex - 1].style.display = "block";
    // "turns on" the dot marker that bellongs to the active slide
    dots[slideIndex - 1].className += " active";
    //sets the timer for the automatic system and assings it to a variable so we can call it and reset it when we click a manual controll
    timer = setTimeout(showSlides, 16000)
}