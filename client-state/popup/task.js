
const modal = document.getElementById('subscribe-modal');
const closeButton = modal.querySelector('.modal__close');
const isModalClosed = document.cookie.includes('modalClosed=true');


if (!isModalClosed) {
	modal.classList.add('modal_active');
}
const closeModal = () => {
	modal.classList.remove('modal_active');
	document.cookie = 'modalClosed=true';
};

closeButton.addEventListener('click', closeModal);
