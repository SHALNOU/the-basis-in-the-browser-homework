const fontSizeSmall = document.querySelectorAll('.font-size');
const bookBig = document.getElementById('book')

fontSizeSmall.forEach((size) => {
	size.addEventListener('click', (event) => {
		event.preventDefault();
		fontSizeSmall.forEach((el) => {
			el.classList.remove('font-size_active');
		});

		size.classList.add('font-size_active')
		if (size.classList.contains('font-size_small')) {
			bookBig.classList.add('font-size_small')
		} else {
			bookBig.classList.remove('font-size_small')
		}

		if (size.classList.contains('font-size_big')) {
			bookBig.classList.add('font-size_big')
		} else {
			bookBig.classList.remove('font-size_big')
		}
	});
});

const fontSizeBig = document.querySelectorAll('.font-size');
const bookSmall = document.getElementById('book')

fontSizeBig.forEach((size) => {
	size.addEventListener('click', (event) => {
		event.preventDefault();
		fontSizeBig.forEach((el) => {
			el.classList.remove('font-size_active');
		});

		size.classList.add('font-size_active')
		if (size.classList.contains('font-size_small')) {
			bookSmall.classList.add('font-size_small')
		} else {
			bookSmall.classList.remove('font-size_small')
		}

		if (size.classList.contains('font-size_big')) {
			bookSmall.classList.add('font-size_big')
		} else {
			bookSmall.classList.remove('font-size_big')
		}
	});
});


const textColorLinks = document.querySelectorAll('.book__control_color .color');
const contant = document.querySelectorAll('p')



textColorLinks.forEach((text) => {
	text.addEventListener('click', (event) => {
		event.preventDefault()
		textColorLinks.forEach((el) => {
			el.classList.remove('color_active')
		})
		text.classList.add('color_active')

		if (text.classList.contains('text_color_whitesmoke')) {
			book.classList.add('book_color-whitesmoke')
		} else {
			book.classList.remove('book_color-whitesmoke')
		}

		if (text.classList.contains('text_color_gray')) {
			book.classList.add('text_color_gray')
		} else {
			book.classList.remove('text_color_gray')
		}

		if (text.classList.contains('text_color_black')) {
			book.classList.add('text_color_black')
		} else {
			book.classList.remove('text_color_black')
		}
	})
})

const textBgLinks = document.querySelectorAll('.book__control_background .color')

textBgLinks.forEach((text) => {
	text.addEventListener('click', (event) => {
		event.preventDefault()
		textBgLinks.forEach((el) => {
			el.classList.remove('color_active')
		})
		text.classList.add('color_active')

		if (text.classList.contains('bg_color_black')) {
			book.classList.add('bg_color_black')
		} else {
			book.classList.remove('bg_color_black')
		}

		if (text.classList.contains('bg_color_gray')) {
			book.classList.add('bg_color_gray')
		} else {
			book.classList.remove('bg_color_gray')
		}

		if (text.classList.contains('bg_color_white')) {
			book.classList.add('bg_color_white')
		} else {
			book.classList.remove('bg_color_white')
		}
	})
})