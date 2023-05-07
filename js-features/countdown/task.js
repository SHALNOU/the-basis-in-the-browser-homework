const elementNumber = document.getElementById('timer')

let count = 59;
let message = 'вы согласны почку продать?'
let timer = setInterval(() => {
	count--;
	elementNumber.innerHTML = count;
	if (count < 0) {
		result = window.confirm(message)
		clearInterval(timer);
	}
}, 10)

elementNumber.onclick = function () {
	if ((window.confirm(message))) {
		window.open("https://www.google.com", "Thanks for Visiting!");
	}
}


//способ 2 

// let hour = 2;
// let minute = 30;
// let second = 0;
// let timer;
// let count = document.getElementById('timer')

// function redact(number) {
// 	return number < 10 ? `0${number}` : `${number}`
// }

// function timerResult() {
// 	second--
// 	if (second < 0) {
// 		second = 59;
// 		minute--
// 		if (minute < 0) {
// 			minute = 59;
// 			hour--
// 			if (hour < 0) {
// 				count.innerHTML = '00:00:00'
// 				alert('time stop')
// 			}
// 		}
// 	}
// 	const hourRedact = redact(hour)
// 	const minuteRedact = redact(minute)
// 	const secondRedact = redact(second)
// 	count.innerHTML = `${hourRedact}:${minuteRedact}:${secondRedact}`
// }
// timer = setInterval(timerResult, 1000)

