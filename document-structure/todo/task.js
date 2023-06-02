const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const tasks = document.getElementById('tasks__list');

function createElement(title) {
	const taskElement = document.createElement('div');
	taskElement.classList.add('task');
	// создается и настраивается DOM-элемент, представляющий задачу.

	const titleElement = document.createElement('div');
	titleElement.classList.add('task__title');
	titleElement.textContent = title;
	// текстовое содержимое элемента
	const removeButton = document.createElement('a');
	removeButton.classList.add('task__remove');
	removeButton.innerHTML = "\uD83D\uDC3C";
	// устанавливается внутреннее содержимое элемента в виде символа Unicode, что бы при нажатии удалить 
	removeButton.addEventListener('click', () => {
		taskElement.remove();
	});
	// удаление строки 
	taskElement.appendChild(titleElement);
	taskElement.appendChild(removeButton);
	// добовление родителю дочерних
	return taskElement;
}

function addTask(event) {
	event.preventDefault();
	// отключение ссылки 
	const title = input.value.trim();
	// тримирование от пробелов 
	if (title !== '') {
		const task = createElement(title);
		tasks.appendChild(task);
		input.value = '';
	}
}

