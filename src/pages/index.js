import './index.css';

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

import {
	initialCards,
	profileEditButton,
	addCardButton,
	userName,
	userJob,
	elements,
	popupElementFullImage,
	popupEditProfile,
	popupAddCard,
	editProfileFormElement,
	addCardFormElement,
	defultConfig
} from '../utils/constants.js';


const elementFullImage = new PopupWithImage(popupElementFullImage);

const clickCard = (name, link) => {
	elementFullImage.open(name, link);
}

const CardList = new Section({
	data: initialCards,
	renderer: (item) => {
		const card = new Card({
			data: item,
			handleCardClick: (name, link) => {
				clickCard(name, link);
			},
		}, '#element-template');

		const cardElement = card.generateCard();
		CardList.setItem(cardElement);
	},
},
	elements
);

CardList.addItem();

const modalAddCard = new PopupWithForm({
	popupSelector: popupAddCard,
	handleFormSubmit: (value) => {
		const renderCard = function (data, cardSelector) {
			return new Card({
				data: data,
				handleCardClick: (name, link) => {
					clickCard(name, link);
				},
			}, cardSelector);
		}

		const card = renderCard({ name: value.title, link: value.link }, '#element-template');

		CardList.setItem(card.generateCard());
		modalAddCard.close();
	},
});

addCardButton.addEventListener('click', () => {
	modalAddCard.open();
	addCardFormElement.title.value = '';
	addCardFormElement.link.value = '';
});

const user = new UserInfo(userName, userJob);

const modalEditProfile = new PopupWithForm({
	popupSelector: popupEditProfile,
	handleFormSubmit: (value) => {
		user.setUserInfo(value.name, value.job);
		modalEditProfile.close();
	}
});

profileEditButton.addEventListener('click', () => {
	modalEditProfile.open();
	const userData = user.getUserInfo();
	editProfileFormElement.name.value = userData.name;
	editProfileFormElement.job.value = userData.job;
});

const editProfileFormValidator = new FormValidator(defultConfig, editProfileFormElement);
const addCardFormValidator = new FormValidator(defultConfig, addCardFormElement);

modalEditProfile.setEventListeners();
modalAddCard.setEventListeners();
elementFullImage.setEventListeners();

editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();