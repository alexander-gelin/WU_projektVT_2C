const nav = document.querySelector('.burgerlinks')
const burger = document.querySelector('.burger')

function toggleMeny() {
    nav.classList.toggle('burgeractive')
    burger.classList.toggle('toggle')
}

document.querySelector('.burger').addEventListener('click', toggleMeny)

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slideimages");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000); 
}