const chat = document.querySelector('.chat-widget')
const body = document.querySelector('body')
const chatInputId = document.getElementById('chat-widget__input')


chat.addEventListener('click', (event) => {
	//открытие чата 
	event.stopPropagation()
	chat.classList.add('chat-widget_active')
})
body.addEventListener('click', (event) => {
	//закрытие чата 
	const isClickInsideChat = chat.contains(event.target);
	if (!isClickInsideChat) {
		chat.classList.remove('chat-widget_active');
	}
})

chatInputId.addEventListener('keydown', (event) => {
	//отслеживание для отправки 
	if (event.key === 'Enter') {
		sendMessage()
	}
})

function sendMessage() {
	//реализация отправки сообщения 
	const input = document.querySelector('.chat-widget__input')
	const inputValue = input.value.trim()
	if (inputValue.length > 0) {
		addClientMessage(inputValue)
		input.value = ''
	}
	generateRobotResponse()
}

function addClientMessage(text) {
	//вывод ответов
	//время 
	let currentDate = new Date()
	let hours = currentDate.getHours();
	let minutes = currentDate.getMinutes();
	let seconds = currentDate.getSeconds()

	//разметка с переменными моими
	let messageHTML = `
	<div class="message message_client">
		 <div class="message__time">${hours}:${minutes}:${seconds}</div>
		 <div class="message__text">${text}</div>
	</div>
   `;

	//добовление разметки в html
	const messageText = document.querySelector('.chat-widget__messages')
	let newMarkup = document.createElement('div');
	newMarkup.innerHTML = messageHTML
	messageText.appendChild(newMarkup)
	scrollToBottom()
}


function generateRobotResponse() {
	//генератор рандомного ответа
	const arrayAnswers = [
		"Да, конечно!",
		"Я согласен.",
		"Понимаю, о чём вы говорите.",
		"Не могу дать точного ответа.",
		"Возможно, это зависит от обстоятельств.",
		"Я не уверен, что могу помочь в этом вопросе.",
		"Может быть, стоит обратиться к профессионалам.",
		"Интересно, как вы думаете?",
		"Я бы рекомендовал обратиться за дополнительной информацией.",
		"Давайте рассмотрим другой вариант.",
		"Извините, я не знаю ответа на этот вопрос.",
		"Может быть, стоит провести дополнительные исследования.",
		"Ваше мнение имеет большое значение.",
		"Мне трудно сказать однозначно.",
		"Я могу предложить вам несколько вариантов.",
		"Давайте вместе разберёмся в этом вопросе.",
		"Возможно, ответ на этот вопрос лежит в глубине.",
		"Будет полезно обсудить это с экспертами.",
		"Необходимо учесть различные факторы.",
		"Может быть, стоит попробовать другой подход."
	]


	let randomIndex = Math.floor(Math.random() * arrayAnswers.length)

	//время 
	let currentDate = new Date()
	let hours = currentDate.getHours();
	let minutes = currentDate.getMinutes();
	let seconds = currentDate.getSeconds();

	let messageHTML = `
	<div class="message">
						<div class="message__time">${hours}:${minutes}:${seconds} </div>
						<div class="message__text">${arrayAnswers[randomIndex]} </div>
					</div>
   `;

	const messageText = document.querySelector('.chat-widget__messages')
	let newMarkup = document.createElement('div');
	newMarkup.innerHTML = messageHTML
	messageText.appendChild(newMarkup)
	scrollToBottom()
}

function scrollToBottom() {
	//функция авто прокрутки сообщений 
	const widget = document.querySelector('.chat-widget__messages');
	const lastMessage = widget.lastElementChild;
	lastMessage.scrollIntoView({ behavior: 'smooth' });
	setInterval(() => {
		generateRobotQuestion()
	}, 30000)
}






function generateRobotQuestion() {
	//гинератор ответов после 30 сек
	let currentDate = new Date()
	let hours = currentDate.getHours();
	let minutes = currentDate.getMinutes();
	let seconds = currentDate.getSeconds();

	let messageHTML = `
	<div class="message">
						<div class="message__time">${hours}:${minutes}:${seconds} </div>
						<div class="message__text">${arrayAnswers[randomIndex]} </div>
					</div>
   `;

	const messageText = document.querySelector('.chat-widget__messages')
	let newMarkup = document.createElement('div');
	newMarkup.innerHTML = messageHTML
	messageText.appendChild(newMarkup)
	scrollToBottom()
}