

var slideIndex = 1;
showSlides(slideIndex);
timer();
function currentSlide(n) {
	showSlides(slideIndex = n);
}



// var dots = document.getElementsByClassName('dot').onclick = function() {
// 	showSlides(slideIndex);
// };

function timer() {
	setInterval(showSlides(slideIndex), 1000);
}


function showSlides(n) {
	

	var slides = document.getElementsByClassName('text');
	var dots = document.getElementsByClassName('dot');

	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i] = dots[i].className.replace('active', '');
	}

	slides[slideIndex-1].style.display = 'block';
	dots[slideIndex-1].className += 'active';
}