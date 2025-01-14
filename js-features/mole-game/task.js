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
			dead.textContent = deadGame
		} else {
			lostGame++
			lost.textContent = lostGame
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
	dead.textContent = deadGame;
	lost.textContent = lostGame;
}
