let pechenka = document.getElementById('cookie');
let counter = document.getElementById('clicker__counter');
let clickSpeedElement = document.getElementById('clicker__speed');
let curent = 0; // колличество кликов 
let lastClickTime = 0; // время когда был последний клик 
let clickSpeed = 0; // скорость клика 
let clickCount = 0; // общее колличество кликов 

pechenka.addEventListener('click', function () {
	curent++;
	if (curent > 20) {
		alert('иди займись делом!!!');
		curent = 0;
	}
	counter.innerHTML = curent;
	let size = (curent % 2 === 0) ? '210px' : '190px';
	pechenka.style.height = size;
	pechenka.style.width = size;

	let currentTime = new Date().getTime();

	if (lastClickTime !== 0) {
		let timeWeenClicks = currentTime - lastClickTime;
		clickSpeed = 1000 / timeWeenClicks;
		clickCount++;
		clickSpeedElement.innerHTML = clickSpeed.toFixed(2);
	}
	lastClickTime = currentTime;
});

// сложно , гугл приходиться сильно юзать, у самого масла в голове не хватает!
// сделать счетчик времени между кликов(
//  Скажите это нормаьно ? а то я переживаю скажут на рабботе что я неучь(

