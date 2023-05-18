const slider = document.querySelectorAll('.slider__item')
const prev = document.querySelector('.slider__arrow_prev')
const next = document.querySelector('.slider__arrow_next')
const dot = document.querySelectorAll('.slider__dot')

let count = 0;

function showSlide() {
	for (let i = 0; i < slider.length; i++) {
		slider[i].classList.remove('slider__item_active');
	}
	slider[count].classList.add('slider__item_active');
}

next.addEventListener('click', function () {
	for (let i = 0; i < slider.length; i++) {
		let slid = slider[i]
		slid.classList.add('slider__item_active')
	}
	if (count >= slider.length - 1) {
		count = 0;
	} else {
		count++;
	}
	showSlide();
})

prev.addEventListener('click', function () {
	count--;
	if (count < 0) {
		count = slider.length - 1;
	}
	showSlide();
});

dot.forEach(function (dots, index) {
	dots.addEventListener('click', () => {
		count = index
		showSlide()
	})
})
