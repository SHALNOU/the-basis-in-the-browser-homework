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
		if (deadGame > 9) {
			alert('you win')
			resetGame()
		} else if (lostGame > 4) {
			alert('game over')
			resetGame()
		}
	})
})

function resetGame() {
	deadGame = 0;
	lostGame = 0;
	dead.innerHTML = deadGame;
	lost.innerHTML = lostGame;
}
