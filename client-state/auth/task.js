document.addEventListener("DOMContentLoaded", function () {
	// Получаем ссылки на элементы DOM
	const signinForm = document.getElementById("signin__form");
	const welcomeBlock = document.getElementById("welcome");
	const userIdElement = document.getElementById("user_id");

	// Проверяем, есть ли сохраненный id пользователя в локальном хранилище
	const userId = localStorage.getItem("user_id");
	if (userId) {
		// Если есть, отображаем блок приветствия с id пользователя
		welcomeBlock.classList.add("welcome_active");
		userIdElement.textContent = userId;
	}

	// Обработчик отправки формы авторизации
	signinForm.addEventListener("submit", function (event) {
		event.preventDefault(); // Предотвращаем отправку формы по умолчанию

		// Получаем данные из формы
		const formData = new FormData(signinForm);

		// Отправляем POST-запрос на сервер
		fetch(signinForm.action, {
			method: "POST",
			body: formData
		})
			.then(function (response) {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("Ошибка HTTP: " + response.status);
				}
			})
			.then(function (data) {
				if (data.success) {
					// Если авторизация успешна, сохраняем id пользователя в локальное хранилище
					const userId = data.user_id;
					localStorage.setItem("user_id", userId);

					// Отображаем блок приветствия с id пользователя
					welcomeBlock.classList.add("welcome_active");
					userIdElement.textContent = userId;
				} else {
					// Если авторизация не удалась, выводим сообщение об ошибке
					alert("Неверный логин/пароль");
				}
			})
			.catch(function (error) {
				// Обрабатываем ошибки
				console.error(error);
				alert("Произошла ошибка при отправке запроса");
			});
	});
});
