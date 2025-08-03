import { showModalResult, modalContentSuccess, modalContentError } from './modalResult.js';
import { spinnerShow, spinnerHide } from './spinner.js';

export function sendMail() { 
	document.getElementById('contactForm').addEventListener('submit', function (e) {
		e.preventDefault(); // предотвращает перезагрузку страницы при отправке формы
	
		const name = document.getElementById('name').value;
		const surname = document.getElementById('surname').value;
		const email = document.getElementById('email').value;
		const telephone = document.getElementById('telephone').value;
		const message = document.getElementById('message').value;
		const checkbox = document.getElementById('checkbox').checked;
	
		const formData = new FormData();
		formData.append('name', name);
		formData.append('surname', surname);
		formData.append('email', email);
		formData.append('telephone', telephone);
		formData.append('message', message);
		formData.append('checkbox', checkbox);
	
		if (!name || !surname || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !telephone || !/^\+\d{1,15}$/.test(telephone) || !message || !checkbox) {
			return;
		}
	
		spinnerShow();
	
		fetch('mailer/smart.php', {
			method: 'POST',
			body: formData,
		})
			.then(response => {
				if (response.ok) {
					return response.text(); // Если ответ успешен, вернуть текст ответа
				} else {
					throw new Error('Network response was not ok');
				}
			})
			.then(data => {
	
				// Обработка ответа
				console.log('Message sent successfully!');
				document.getElementById('contactForm').reset(); // Сбрасывает форму
	
				spinnerHide();
				showModalResult();
				modalContentSuccess();
			})
			.catch(error => {
	
				document.getElementById('contactForm').reset(); // Сбрасывает форму
				console.error('Message sent failed:', error);
	
				spinnerHide();
				showModalResult();
				modalContentError();
			});
	});	
}