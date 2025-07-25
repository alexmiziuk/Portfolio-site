import 'normalize.css';
import '../../styles/main.scss';
import './home.scss';
import mailIcon from '../../assets/images/icons/mail.svg';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';




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
	$(document).ready(function () {
  $('.slick-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });
});

});
