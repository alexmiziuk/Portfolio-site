import { getScrollBarSize } from './utils.js';

export function showModalResult() {
	const modal = document.getElementById('modalResult');
	modal.classList.add('modal-result_visible');
	// Добавляет класс для отображения модального окна
	var scrollBarSize = getScrollBarSize();
	if (scrollBarSize && scrollBarSize[1] > 0) {
		document.body.style.paddingRight = scrollBarSize[1] + 'px';
	}
	document.body.style.overflow = 'hidden';

	// Закрытие модального окна
	document.getElementById('modalCloseBtn').addEventListener('click', function () {
		setTimeout(() => {
			document.body.style.paddingRight = '';
			document.body.style.overflow = 'auto';
		}, 600);
		modal.classList.remove('modal-result_visible');
	});
}

function createModalContent(titleText, textOne, textTwo) {
	const modalResultContainer = document.querySelector('.modal-result__container');
	modalResultContainer.innerHTML = ''; // Очищаем контейнер

	const resultTitle = document.createElement('h3');
	resultTitle.textContent = titleText;
	resultTitle.className = 'modal-result__title';

	const resultTextOne = document.createElement('p');
	resultTextOne.textContent = textOne;
	resultTextOne.className = 'modal-result__text';

	const resultTextTwo = document.createElement('p');
	resultTextTwo.textContent = textTwo;
	resultTextTwo.className = 'modal-result__text';

	modalResultContainer.appendChild(resultTitle);
	modalResultContainer.appendChild(resultTextOne);
	modalResultContainer.appendChild(resultTextTwo);
}
export function modalContentSuccess() {
	if (window.location.pathname.includes('index.html')) {
		createModalContent('Hvala!', 'Vaša sporočilo je bilo uspešno poslano.', 'Zagotovo vas bomo kontaktirali.');
	} else {
		createModalContent('Thank you!', 'Your message has been successfully sent.', 'We will definitely contact you.');
	}
}

export function modalContentError() {
	if (window.location.pathname.includes('index.html')) {
		createModalContent('Napaka!', 'Žal je šlo nekaj narobe.', 'Preverite, ali imate internetno povezavo.');
	} else {
		createModalContent('Error!', 'Unfortunately, something went wrong.', 'Check if you have an internet connection.');
	}
}