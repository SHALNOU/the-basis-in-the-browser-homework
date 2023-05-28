const elements = Array.from(document.querySelectorAll('.rotator__case'));



function nextElement() {
	for (const element of elements) {
		let elementIndex = elements.indexOf(element);
		if (element.classList.contains('rotator__case_active')) {
			element.classList.remove('rotator__case_active');
			if (elementIndex + 1 === elements.length) {
				elementIndex = 0;
				elements[elementIndex].classList.add('rotator__case_active');
				return console.log('start')
			} else {
				const nextElementSearch = elements[elementIndex + 1]
				nextElementSearch.classList.add('rotator__case_active')
				const dataColor = nextElementSearch.getAttribute('data-color');
				nextElementSearch.style.color = dataColor;
				return console.log('все вроде работает')
			}
		}
	}
}

setInterval(nextElement, 1000)
