const popup = document.querySelector('.popup'); 

const popupEditProfile = document.querySelector('.popup_type_edit-profile'); 
const popupAddCard = document.querySelector('.popup_type_add-card'); 

const formElement = popupEditProfile.querySelector('.popup__form');
const formAddCard = popupAddCard.querySelector('.popup_type_add-card-form');
const formEditProfile = popupEditProfile.querySelector('.popup_type_edit-profile-form');

const profileEditButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.button_add-card');

const addCardCloseButton = popupAddCard.querySelector('.popup__close-button');
const editProfileCloseButton = popupEditProfile.querySelector('.popup__close-button');

const userName = document.querySelector('.profile__title');
const userJob = document.querySelector('.profile__subtitle');

const nameInput = formElement.querySelector('.popup__form-text_type_name');
const jobInput = formElement.querySelector('.popup__form-text_type_job');

const titleInput = formAddCard.querySelector('.popup__form-text_type_title');
const linkInput = formAddCard.querySelector('.popup__form-text_type_link');

const buttonElementAddCard = document.querySelector('.popup__form-submit_type_add-card');


function openPopup(popup) {
	popup.classList.add('popup_opened');
	document.addEventListener('keydown', closePopupEsc);
	document.addEventListener('mousedown', closePopupMousedown);
} 

function closePopup(popup) {
	popup.classList.remove('popup_opened');
	document.removeEventListener('keydown', closePopupEsc);
	document.removeEventListener('mousedown', closePopupMousedown);
}

function formSubmitHandler (evt) {
	evt.preventDefault(); 
	userName.textContent = nameInput.value;
	userJob.textContent = jobInput.value;
}

profileEditButton.addEventListener('click', function () {
	nameInput.value = userName.textContent;
	jobInput.value = userJob.textContent;
	openPopup(popupEditProfile);
});
formElement.addEventListener('submit', formSubmitHandler);

function formSubmitAddCard (evt) {
	evt.preventDefault(); 

	renderCard({name: titleInput.value, link: linkInput.value})
}


addCardButton.addEventListener('click', function () {
	titleInput.value = '';
	linkInput.value = '';
	openPopup(popupAddCard);
	deactivateButton(buttonElementAddCard);
});

formAddCard.addEventListener('submit', formSubmitAddCard);


editProfileCloseButton.addEventListener('click', function () {
	closePopup(popupEditProfile);
});

addCardCloseButton.addEventListener('click', function () {
	closePopup(popupAddCard);
});

formElement.addEventListener('submit', function () {
	closePopup(popupEditProfile);
});

formAddCard.addEventListener('submit', function () {
	closePopup(popupAddCard);
});

const initialCards = [
{
	name: 'Архыз',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
{
	name: 'Челябинская область',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
},
{
	name: 'Иваново',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
},
{
	name: 'Камчатка',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
},
{
	name: 'Холмогорский район',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
},
{
	name: 'Байкал',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}
];

const elements = document.querySelector('.elements');

import Card from './Card.js';

const renderCard = (item) => {
	const card = new Card(item, '#element-template');
  const cardElement = card.generateCard();
	elements.prepend(cardElement);
}

initialCards.forEach((item) => {
    renderCard(item);
});

function deactivateButton(buttonElement) {
	buttonElement.classList.add('button_inactive');
	buttonElement.setAttribute('disabled', '');
}

const keyCodeEsc = 27;

function closePopupEsc(evt) {
  if (evt.keyCode == keyCodeEsc)  {
    closePopup(document.querySelector('.popup_opened'));
  }
};

function closePopupMousedown(evt) {
  if (evt.target.classList.contains('popup_opened')) { 
    closePopup(document.querySelector('.popup_opened'));
  }
};

import FormValidator from './FormValidator.js';

const defultConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__form-text',
	submitButtonSelector: '.popup__form-submit',
	inactiveButtonClass: 'button_inactive',
	inputErrorClass: 'popup__form-text_type_error',
	errorClass: 'popup__form-text-error_active'
};

const editProfileFormValidator = new FormValidator (defultConfig, formEditProfile);
const addCardFormValidator = new FormValidator (defultConfig, formAddCard);

editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();