import 'normalize.css';
import '../../styles/main.scss';
import './home.scss';
import mailIcon from '../../assets/images/icons/mail.svg';

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

addMailIcon()



