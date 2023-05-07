const hole = document.querySelectorAll('.hole')
const dead = document.getElementById('dead')
const lost = document.getElementById('lost')


let deadGame = 0;
let lostGame = 0;

hole.forEach(holes => {
	holes.addEventListener('click', function () {
		const plus = holes.className.includes('hole_has-mole');
		if (plus) {
			deadGame++
			dead.innerHTML = deadGame
		} else {
			lostGame++
			lost.innerHTML = lostGame
		}
		if (deadGame > 10) {
			deadGame = 0;
			alert('nice victory!');
		} else if (lostGame > 5) {
			lostGame = 0;
			alert('Game Over!');
		}
	})
})