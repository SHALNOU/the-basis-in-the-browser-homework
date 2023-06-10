const form = document.getElementById('myForm');
const progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);

	xhr.upload.addEventListener('progress', (event) => {
		if (event.lengthComputable) {
			const percentComplete = (event.loaded / event.total) * 100;
			progress.value = percentComplete;
		}
	});

	xhr.onreadystatechange = () => {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200) {
				// Загрузка завершена успешно
				console.log('Загрузка завершена успешно');
				progress.value = 100; // Устанавливаем значение прогресса на максимум
			} else {
				// Произошла ошибка при загрузке
				console.error('Произошла ошибка при загрузке');
				progress.value = 0; // Устанавливаем значение прогресса на 0
			}
		}
	};

	xhr.send(new FormData(form));
});
