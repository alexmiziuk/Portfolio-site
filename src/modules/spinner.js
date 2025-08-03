const spinner = document.querySelector('.dbl-spinner-wrapper');
const submitBtn = document.querySelector('.contact__button');
export function spinnerShow() {
	if (spinner) {
		submitBtn.classList.add('contacts__button--text-transparent');
		spinner.classList.add('spinner-show');
		}
}
export function spinnerHide() {
	if (spinner) {
		submitBtn.classList.remove('contacts__button--text-transparent');
		spinner.classList.remove('spinner-show');
		
	}
}