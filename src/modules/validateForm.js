const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const emailInput = document.getElementById('email');
const telephoneInput = document.getElementById('telephone');
const messageInput = document.getElementById('message');
const checkboxInput = document.getElementById('checkbox');
const inputs = [nameInput, emailInput, messageInput, surnameInput, telephoneInput];
const checkboxContainer = document.querySelector('.contact__private');
const nameError = document.querySelector('.error-name');
const surnameError = document.querySelector('.error-surname');
const emailError = document.querySelector('.error-mail');
const telephoneError = document.querySelector('.error-telephone');
const messageError = document.querySelector('.error-message');
const checkboxError = document.querySelector('.error-checkbox');

export function validateForm() {
	function verifyFormFields() {
		form.addEventListener('submit', function (event) {
			let isValid = true;
	
			// Clear previous error states
			clearErrors();
	
			// Validate name
			if (nameInput.value.trim() === '') {
				showError(nameInput, nameError);
				isValid = false;
			}
	
			// Validate surname
			if (surnameInput.value.trim() === '') {
				showError(surnameInput, surnameError);
				isValid = false;
			}
	
			// Validate email
			if (emailInput.value.trim() === '') {
				showError(emailInput, emailError);
				isValid = false;
			} else if (!validateEmail(emailInput.value)) {
				emailError.textContent = 'Vnesite veljavno email naslovo';
				showError(emailInput, emailError);
				isValid = false;
			}
	
			// Validate telephone
			if (telephoneInput.value.trim() === '') {
				showError(telephoneInput, telephoneError);
				isValid = false;
			} else if (!validateTelephone(telephoneInput.value)) {
				telephoneError.textContent = 'Vnesite najprej plus in samo številke';
				showError(telephoneInput, telephoneError);
				isValid = false;
			}
	
			// Validate message
			if (messageInput.value.trim() === '') {
				showError(messageInput, messageError);
				isValid = false;
			}
	
			// Validate checkbox
			if (!checkboxInput.checked) {
				checkboxContainer.classList.add('invalid');
				checkboxError.classList.remove('hide');
				isValid = false;
			}
	
			if (!isValid) {
				event.preventDefault();
			}
		});
	}
	
	function showError(input, errorElement) {
		input.classList.add('invalid');
		errorElement.classList.remove('hide');
	}
	
	function clearErrors() {
		[nameInput, surnameInput, emailInput, telephoneInput, messageInput, checkboxInput].forEach(input => {
			input.classList.remove('invalid');
			checkboxContainer.classList.remove('invalid');
		});
		[nameError, surnameError, emailError, telephoneError, messageError, checkboxError].forEach(errorElement => {
			errorElement.classList.add('hide');
		});
	}
	
	function validateEmail(email) {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(String(email).toLowerCase());
	}
	
	function validateTelephone(telephone) {
		const re = /^\+\d{1,15}$/;
		return re.test(telephone);
	}
	
	// Add focus event listeners to clear errors on focus
	nameInput.addEventListener('focus', () => clearFieldError(nameInput, nameError));
	surnameInput.addEventListener('focus', () => clearFieldError(surnameInput, surnameError));
	emailInput.addEventListener('focus', () => clearFieldError(emailInput, emailError));
	telephoneInput.addEventListener('focus', () => clearFieldError(telephoneInput, telephoneError));
	messageInput.addEventListener('focus', () => clearFieldError(messageInput, messageError));
	checkboxInput.addEventListener('focus', () => {
		checkboxContainer.classList.remove('invalid');
		checkboxError.classList.add('hide');
	});
	
	function clearFieldError(input, errorElement) {
		input.classList.remove('invalid');
		errorElement.classList.add('hide');
	}
	
function handleInputFocusBlur() {
		inputs.forEach(input => {
			input.addEventListener('focus', (event) => {
				event.target.classList.add('placeholder-hidden');
			});
	
			input.addEventListener('blur', (event) => {
				if (event.target.value.trim() === '') {
					event.target.classList.remove('placeholder-hidden');
				}
			});
		});
	}
	
	function restorePlaceholders() {
		inputs.forEach(input => {
			input.classList.remove('placeholder-hidden');
		});
	}
	
	restorePlaceholders();
	handleInputFocusBlur();
	verifyFormFields();  
}