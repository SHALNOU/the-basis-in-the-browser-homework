// Получаем все элементы с классом "has-tooltip"
const elements = document.querySelectorAll('.has-tooltip');

// Обрабатываем каждый элемент
elements.forEach(element => {
	// Добавляем обработчик клика
	element.addEventListener('click', (event) => {
		// Получаем подсказку для текущего элемента
		const tooltipText = element.getAttribute('title');
		event.preventDefault();
		// Создаем элемент подсказки
		const tooltip = document.createElement('div');
		tooltip.classList.add('tooltip');
		tooltip.textContent = tooltipText;

		// Позиционируем подсказку относительно элемента
		const elementRect = element.getBoundingClientRect();
		tooltip.style.top = elementRect.top + elementRect.height + 'px';
		tooltip.style.left = elementRect.left + 'px';

		// Добавляем подсказку к документу
		document.body.appendChild(tooltip);

		// Добавляем класс "tooltip_active" для отображения подсказки
		tooltip.classList.add('tooltip_active');

		// Обрабатываем клик вне элемента и подсказки
		const outsideClickListener = event => {
			if (!element.contains(event.target) && !tooltip.contains(event.target)) {
				tooltip.classList.remove('tooltip_active');
				document.removeEventListener('click', outsideClickListener);
				setTimeout(() => {
					tooltip.remove();
				}, 300);
			}
		};

		// Добавляем обработчик клика за пределами элемента и подсказки
		document.addEventListener('click', outsideClickListener);
	});
});
