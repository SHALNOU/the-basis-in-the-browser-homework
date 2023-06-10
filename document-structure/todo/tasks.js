// Получаем необходимые элементы
const tasksForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

// Функция для создания новой задачи
function createTask(title) {
	const taskElement = document.createElement('div');
	taskElement.classList.add('task');

	const titleElement = document.createElement('div');
	titleElement.classList.add('task__title');
	titleElement.textContent = title;

	const removeButton = document.createElement('a');
	removeButton.classList.add('task__remove');
	removeButton.innerHTML = '&times;'; // крестик 
	removeButton.addEventListener('click', () => {
		taskElement.remove(); // Удаляем задачу при клике на кнопку удаления
	});

	taskElement.appendChild(titleElement);
	taskElement.appendChild(removeButton);

	return taskElement;
}

// Функция для добавления новой задачи
function addTask(event) {
	event.preventDefault(); // Предотвращаем отправку формы

	const title = taskInput.value.trim();
	if (title !== '') {
		const task = createTask(title);
		tasksList.appendChild(task);
		taskInput.value = ''; // Очищаем поле ввода после добавления задачи
	}
}

// Обработчик события при отправке формы
tasksForm.addEventListener('submit', addTask);
