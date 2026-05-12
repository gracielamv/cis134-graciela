function navFunction() { 
    
var x = document.getElementById("nav"); 
if (x.className === "") { 
    x.className += "responsive"; 
} else { 
    x.className = ""; 
} 
} 

let slideIndex = 0;
showSlides();

// https://www.w3schools.com/howto/howto_js_slideshow.asp
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000);
}