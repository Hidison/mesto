const popup = document.querySelector('.popup'); 

const popupEditProfile = document.querySelector('.popup_type_edit-profile'); 
const popupAddCard = document.querySelector('.popup_type_add-card'); 

const formElement = popupEditProfile.querySelector('.popup__form');
const formAddCard = popupAddCard.querySelector('.popup_type_add-card-form');

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
	document.addEventListener('keydown', closePopupKeydown);
	document.addEventListener('mousedown', closePopupMousedown);
} 

function closePopup(popup) {
	popup.classList.remove('popup_opened');
	document.removeEventListener('keydown', closePopupKeydown);
	document.removeEventListener('mousedown', closePopupMousedown);
}

function closePopupKeydown(evt) {
	closePopupEsc(evt);
}

function closePopupMouse(evt) {
	closePopupMousedown(evt);
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
	buttonElementAddCard.classList.add('button_inactive');
	buttonElementAddCard.setAttribute('disabled', '');
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
const elementTemplate = document.querySelector('#element-template').content.querySelector('.element');
const popupElementFullImage = document.querySelector('.popup_type_full-image');
const elementFullImageCloseButton = popupElementFullImage.querySelector('.popup__close-button'); 
const popupElementFullImageContainer = document.querySelector('.popup__full-image');
const popupElementFullImageTitle = document.querySelector('.popup__title_type_full-image');

function createCard(data) {
	const cardElement = elementTemplate.cloneNode(true);

	const cardImage = cardElement.querySelector('.element__image');
	const cardTitle = cardElement.querySelector('.element__title');
	const cardLikeButton = cardElement.querySelector('.element__button-like');
	const cardDeleteButton = cardElement.querySelector('.element__remove_image');
	const elementFullImage = cardElement.querySelector('.element__image');

	cardTitle.textContent = data.name;
	cardImage.src = data.link;
	cardImage.alt = 'иллюстрация пейзажа';

	cardLikeButton.addEventListener('click', function (evt) {
		evt.target.classList.toggle('button-like_active');
	});

	cardDeleteButton.addEventListener('click', function () {
		const listItem = cardDeleteButton.closest('.element');
		listItem.remove();
	});

	elementFullImage.addEventListener('click', function () {
		openPopup(popupElementFullImage);
		popupElementFullImageTitle.textContent = data.name;
		popupElementFullImageContainer.src = data.link;
		popupElementFullImageContainer.alt = 'иллюстрация пейзажа';
	});

	return cardElement;
}

elementFullImageCloseButton.addEventListener('click', function () {
	closePopup(popupElementFullImage);
});

function renderCard(data) {	
	elements.prepend(createCard(data));
}

initialCards.forEach((data) => {
	renderCard(data);
})



const popupList = document.querySelectorAll('.popup');

function closePopupEsc(evt) {
	if (evt.keyCode == 27) { 
		for (var i = 0; i < popupList.length; i++) {
			if (popupList[i].classList.contains('popup_opened')) {
				popupList[i].classList.remove('popup_opened');
			}
		}
	}
}; 

function closePopupMousedown(evt) {
	if (evt.target.classList.contains('popup_opened')) { 
		for (var i = 0; i < popupList.length; i++) {
			if (popupList[i].classList.contains('popup_opened')) {
				popupList[i].classList.remove('popup_opened');
			}
		}
	}
}; 

