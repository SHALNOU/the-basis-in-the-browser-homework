const mainInterests = document.querySelector('.interests_main');
const mainCheckboxes = mainInterests.querySelectorAll('.interest__check');

mainCheckboxes.forEach((check) => {
	check.addEventListener('click', () => {
		//нашел элементы все от родительского 
		const nextToCheck = check.parentElement.nextElementSibling.querySelectorAll('.interest__check')
		nextToCheck.forEach((next) => {
			// когда нажимаешб родителя, срабатывают и дети 
			next.checked = check.checked
		})
	})
})



