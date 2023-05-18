let links = document.getElementsByClassName("menu__link");
for (let i = 0; i < links.length; i++) {
	var link = links[i];
	link.addEventListener("click", function (event) {
		event.preventDefault();
		let parentMenu = this.closest(".menu");
		let menu = this.nextElementSibling;
		if (menu) {
			menu.classList.toggle("menu_active");
		}
		let submenu = this.querySelector(".menu");
		if (submenu) {
			event.stopPropagation();
		}
	});
}
