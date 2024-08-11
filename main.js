const slides = document.querySelectorAll('.slide');
const next = document.getElementById("next");
const prev = document.getElementById('prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;

function nextSlide(){
//Get Current Class 
const current = document.querySelector('.current')
// Remove current class
current.classList.remove('current')
// Cheack for next slide
if(current.nextElementSibling){
// Add current class to next element
current.nextElementSibling.classList.add("current")
}else{
slides[0].classList.add('current')
}
setTimeout(()=>current.classList.remove('current'));
}


function prevSlide(){
//Get Current Class
const current = document.querySelector('.current')
// Remove current class
current.classList.remove('current')
// Cheack for next slide
if(current.previousElementSibling){
// Add current class to next element
current.previousElementSibling.classList.add("current")
}else{
slides[slides.length - 1].classList.add('current')
}
setTimeout(()=>current.classList.remove('current'));
}

next.addEventListener('click',nextSlide)
prev.addEventListener('click',prevSlide)
