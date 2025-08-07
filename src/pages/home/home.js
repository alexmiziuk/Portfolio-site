import 'normalize.css';
import '../../styles/main.scss';
import './home.scss';
import mailIcon from '../../assets/images/icons/mail.svg';
import { navMenu } from '../../modules/navMenu';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import { validateForm } from '../../modules/validateForm';
import { sendMail } from '../../modules/sendMail';

function addMailIcon() {
	const mailIconElement = document.createElement('img');
	mailIconElement.src = mailIcon;
	mailIconElement.alt = 'Mail Icon';
	mailIconElement.className = 'mail__icon';

	const mailContainer = document.querySelector('.mail');
	if (mailContainer) {
		mailContainer.prepend(mailIconElement);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	addMailIcon();
	navMenu();
	
		$('.slick-slider').slick({
			slidesToShow: 7,
			slidesToScroll: 1,
			arrows: true, 
			dots: true,
			autoplay: true,
			autoplaySpeed: 3000,
			responsive: [
				{
					breakpoint: 1920,
					settings: {
						slidesToShow: 6.3,
						dots: true

					}
				},
				{
					breakpoint: 1201,
					settings: {
						slidesToShow: 5.3,
						dots: true
					}
				},
				{
					breakpoint: 1025,
					settings: {
						slidesToShow: 4.3,
						dots: true,
						
					}
				},
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 3.3,
						dots: true,
						
					}
				}
			]
		});
	

	validateForm();
	sendMail();

});
