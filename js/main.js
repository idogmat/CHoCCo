//slider
var slides = document.querySelectorAll('.slider-item'),
prev = document.querySelector('#arrow-left'),
next = document.querySelector('#arrow-right'),
slideIndex = 1;

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('structure-block-visible');
        slides[i].classList.remove('structure-block-hidden');
        slides[slideIndex - 1].classList.add('structure-block-hidden');
        slides[slideIndex - 1].classList.remove('structure-block-visible');
            // slides[i].style.display = 'none';
            // slides[slideIndex - 1].style.display = 'flex';
		}
    }
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
    
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
    
        prev.addEventListener('click', function () {
            plusSlides(-1);
        });
    
        next.addEventListener('click', function () {
            plusSlides(1);
        });
//menu
