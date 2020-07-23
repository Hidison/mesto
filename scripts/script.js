const profileEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup'); 
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__form-text_type_name');
const jobInput = document.querySelector('.popup__form-text_type_job');
const name1 = document.querySelector('.profile__title');
const name2 = document.querySelector('.profile__subtitle');

function openPopup() {
	popup.classList.add('popup_opened');
}

function closePopup() {
	popup.classList.remove('popup_opened');
	nameInput.value = name1.textContent;
	jobInput.value = name2.textContent;
}

profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
	evt.preventDefault(); 

	nameInput.value;
	jobInput.value;

	name1.textContent = nameInput.value;
	name2.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', closePopup);


const profileButton = document.querySelector('.profile__button');
const popupAddCardCloseButton = document.querySelector('.popup__close-button_type_add-card-close');
const popupAddCard = document.querySelector('.popup_type_add-card'); 
const formAddCard = document.querySelector('.popup_type_add-card-form');
const titleInput = document.querySelector('.popup__form-text_type_title');
const linkInput = document.querySelector('.popup__form-text_type_link');

function openAddCardPopup() {
	popupAddCard.classList.add('popup_opened');
}

function closeAddCardPopup() {
	popupAddCard.classList.remove('popup_opened');
	titleInput.value = '';
	linkInput.value = '';
}

profileButton.addEventListener('click', openAddCardPopup);
popupAddCardCloseButton.addEventListener('click', closeAddCardPopup);


function formSubmitAddCard (evt) {
	evt.preventDefault(); 

	renderCard({name: titleInput.value, link: linkInput.value})
}

formAddCard.addEventListener('submit', formSubmitAddCard);
formAddCard.addEventListener('submit', closeAddCardPopup);



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

function createCard(data) {
	const cardElement = elementTemplate.cloneNode(true);

	const cardImage = cardElement.querySelector('.element__image');
	const cardTitle = cardElement.querySelector('.element__title');
	const cardLikeButton = cardElement.querySelector('.element__button-like');
	const cardDeleteButton = cardElement.querySelector('.element__remove_image');
	const elementFullImage = cardElement.querySelector('.element__image');
	const elementFullImageCloseButton = document.querySelector('.popup__close-button_type_full-image-close');
	const popupElementFullImage = document.querySelector('.popup_type_full-image'); 
	const popupElementFullImageContainer = document.querySelector('.popup__full-image');
	const popupElementFullImageTitle = document.querySelector('.popup__title_type_full-image');

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
		popupElementFullImage.classList.add('popup_opened');
		popupElementFullImageTitle.textContent = data.name;
		popupElementFullImageContainer.src = data.link; 
	});

	elementFullImageCloseButton.addEventListener('click', function () {
		popupElementFullImage.classList.remove('popup_opened');
	});

	return cardElement;
}

function renderCard(data) {	
	elements.prepend(createCard(data));
}

initialCards.forEach((data) => {
	renderCard(data);
})