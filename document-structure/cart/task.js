const products = document.querySelectorAll('.product');
// список продуктов 
const decMinus = document.querySelectorAll('.product__quantity-control_dec');
// кнопки минус
const decPlus = document.querySelectorAll('.product__quantity-control_inc');
// кнопки плюс
const numberProduct = document.querySelectorAll('.product__quantity-value');
//число продуктов при нажатии на +
const buttonProduct = document.querySelectorAll('.product__add');
//кнопка положить в корзину 
const cartProduct = [];
// массив хранящий список продуктов которые положили в корзину 


//кнопка минуса 
decMinus.forEach((minus, index) => {
	//прохожусь массивом по кнопкам 
	minus.addEventListener('click', () => {
		// навешиваю обработчик 
		let number = parseInt(numberProduct[index].textContent) // парсент делает число целым, и делает его числом, а не строкой 
		// пресваиваю в переменную данное число на странице 
		if (number === 1) {
			numberProduct[index].textContent = 1
			// проверяю если данное число на странице равно единице, то оно и будет оставаться еденицой  
		} else {
			number -= 1
			// условие что бы число на странице не пошло в минус 
			numberProduct[index].textContent = number
		}
	})
})

decPlus.forEach((plus, index) => {
	//прохожусь массивом по кнопкам 
	plus.addEventListener('click', () => {
		// навешиваю обработчик 
		let number = parseInt(numberProduct[index].textContent)
		// пресваиваю в переменную данное число на странице 
		number += 1
		// с каждым кликом число увеличивается на 1 
		numberProduct[index].textContent = number
		//вывод числа на экран 
	})
})

buttonProduct.forEach((button, index) => {
	// прошелся по кнопкам в корзину 
	button.addEventListener('click', () => {
		// навешал обрботчик 
		const product = products[index]
		// продукт из списка продуктов
		const productId = product.dataset.id
		// айди продукта из списка продуктов 
		const productImage = product.querySelector('.product__image').getAttribute('src')
		// картинка продукта из списка продуктов 
		const quantityNumber = parseInt(numberProduct[index].textContent)
		//  данное число на странице 

		const idCartProduct = cartProduct.indexOf(item => item.id === productId)
		// поиск картинки в массиве по айди, если есть то плюс 1

		if (idCartProduct !== -1) {
			numberProduct[index].textContent.quantityNumber += quantityNumber
			// если у нас индех возвращает что что то в масиве есть то мы просто полюсуем к этому значению
		} else {
			const objProduct = {
				id: productId,
				image: productImage,
				quantity: quantityNumber,
			}
			// если нет, то создаем новый обект с продуктом где его айди картинка и номер и пушим в массив корзина 
			cartProduct.push(objProduct)
		}
		console.log(cartProduct)
		renderCartItems()
		// функция показа продукта на экране 
		animateProductToCart(productImage)
	})
})

function renderCartItems() {
	const cartContainer = document.querySelector('.cart__products');
	//нашли корзину
	cartContainer.innerHTML = '';
	//обнулили ее 
	cartProduct.forEach(item => {
		// прошлись по ней фоичем, дабы поменять конечный продукт
		const cartProductElement = document.createElement('div');
		// создал див 
		cartProductElement.classList.add('cart__product');
		// закинул в него класс корзины 
		cartProductElement.dataset.id = item.id;
		// установил что моя карзина теперь id продукта 


		const productImage = document.createElement('img');
		// создал има Борисович 
		productImage.classList.add('cart__product-image');
		// добавил в него класс
		productImage.src = item.image;
		//установил новый имадж обекту 
		cartProductElement.appendChild(productImage);
		//добавил после родителя 

		const productCount = document.createElement('div');
		productCount.classList.add('cart__product-count');
		productCount.textContent = item.quantity;
		cartProductElement.appendChild(productCount);
		cartContainer.appendChild(cartProductElement);
		// все тоже самое и тут, только с числом продукта 
	});
}





