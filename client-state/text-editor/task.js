// Получаем ссылку на элемент textarea
const editor = document.getElementById('editor');

// Проверяем, есть ли сохраненное значение в локальном хранилище
if (localStorage.getItem('editorValue')) {
	// Если есть, устанавливаем сохраненное значение в текстовый редактор
	editor.value = localStorage.getItem('editorValue');
}

// Обработчик события ввода текста
editor.addEventListener('input', function () {
	// Сохраняем текущее значение текстового редактора в локальное хранилище
	localStorage.setItem('editorValue', editor.value);
});

// Обработчик события клика на кнопку "Очистить содержимое"
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', function () {
	// Очищаем значение текстового редактора
	editor.value = '';
	// Удаляем сохраненное значение из локального хранилища
	localStorage.removeItem('editorValue');
});
