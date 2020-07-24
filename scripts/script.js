const popup = document.querySelector('.popup'); 

const popupEditProfile = document.querySelector('.popup_type_edit-profile'); 
const popupAddCard = document.querySelector('.popup_type_add-card'); 

const formElement = popupEditProfile.querySelector('.popup__form');
const formAddCard = popupAddCard.querySelector('.popup_type_add-card-form');

const profileEditButton = document.querySelector('.profile__edit-button');
const profileButton = document.querySelector('.profile__button');

const addCardCloseButton = popupAddCard.querySelector('.popup__close-button');
const editProfileCloseButton = popupEditProfile.querySelector('.popup__close-button');

const userName = document.querySelector('.profile__title');
const userJob = document.querySelector('.profile__subtitle');

const nameInput = formElement.querySelector('.popup__form-text_type_name');
const jobInput = formElement.querySelector('.popup__form-text_type_job');

const titleInput = formAddCard.querySelector('.popup__form-text_type_title');
const linkInput = formAddCard.querySelector('.popup__form-text_type_link');

function togglePopup(popup) {
	popup.classList.toggle('popup_opened');
}

function formSubmitHandler (evt) {
	evt.preventDefault(); 
	userName.textContent = nameInput.value;
	userJob.textContent = jobInput.value;
}

profileEditButton.addEventListener('click', function () {
	nameInput.value = userName.textContent;
	jobInput.value = userJob.textContent;
});
formElement.addEventListener('submit', formSubmitHandler);

function formSubmitAddCard (evt) {
	evt.preventDefault(); 

	renderCard({name: titleInput.value, link: linkInput.value})
}

profileButton.addEventListener('click', function () {
	titleInput.value = '';
	linkInput.value = '';
});
formAddCard.addEventListener('submit', formSubmitAddCard);


profileEditButton.addEventListener('click', function () {
	togglePopup(popupEditProfile);
});

editProfileCloseButton.addEventListener('click', function () {
	togglePopup(popupEditProfile);
});

profileButton.addEventListener('click', function () {
	togglePopup(popupAddCard);
});

addCardCloseButton.addEventListener('click', function () {
	togglePopup(popupAddCard);
});

formElement.addEventListener('submit', function () {
	togglePopup(popupEditProfile);
});

formAddCard.addEventListener('submit', function () {
	togglePopup(popupAddCard);
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

	cardLikeButton.addEventListener('click', function (evt) {
		evt.target.classList.toggle('button-like_active');
	});

	cardDeleteButton.addEventListener('click', function () {
		const listItem = cardDeleteButton.closest('.element');
		listItem.remove();
	});

	elementFullImage.addEventListener('click', function () {
		togglePopup(popupElementFullImage);
		popupElementFullImageTitle.textContent = data.name;
		popupElementFullImageContainer.src = data.link; 
	});

	return cardElement;
}

elementFullImageCloseButton.addEventListener('click', function () {
	togglePopup(popupElementFullImage);
});

function renderCard(data) {	
	elements.prepend(createCard(data));
}

initialCards.forEach((data) => {
	renderCard(data);
})