document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image');

// showSlides(slideIndex);

    images.forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.style.transform = 'translateY(-10px)';
        });

        image.addEventListener('mouseleave', () => {
            image.style.transform = 'translateY(0)';
        });
    });
  showSlides(slideIndex);
});


let slideIndex = 1;


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

