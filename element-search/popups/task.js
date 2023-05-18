const modalMain = document.getElementById('modal_main');
const showSuccess = document.querySelector('.show-success');
const idModalSuccess = document.getElementById('modal_success');
const close = document.querySelector('.modal__close');

modalMain.style.display = 'block';

close.addEventListener('click', () => {
	modalMain.style.display = 'none';
});

showSuccess.addEventListener('click', () => {
	idModalSuccess.style.display = 'block';
	console.log('thbdfz');

	const closeSuccess = idModalSuccess.querySelector('.modal__close')
	closeSuccess.addEventListener('click', () => {
		modalMain.style.display = 'none'
		idModalSuccess.style.display = 'none'
	})
});
