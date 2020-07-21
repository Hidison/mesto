let ProfileEditButton = document.querySelector('.profile__edit-button');
let PopupCloseButton = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup'); 
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__form-text_type_name');
let jobInput = document.querySelector('.popup__form-text_type_job');
let name1 = document.querySelector('.profile__title');
let name2 = document.querySelector('.profile__subtitle');

function PopupOpened() {
	popup.classList.add('popup_opened');
}

function PopupClosed() {
	popup.classList.remove('popup_opened');
	nameInput.value = name1.textContent;
	jobInput.value = name2.textContent;
}

ProfileEditButton.addEventListener('click', PopupOpened);
PopupCloseButton.addEventListener('click', PopupClosed);

function formSubmitHandler (evt) {
	evt.preventDefault(); 

	nameInput.value;
	jobInput.value;

	name1.textContent = nameInput.value;
	name2.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', PopupClosed);


let ProfileButton = document.querySelector('.profile__button');
let PopupAddCardCloseButton = document.querySelector('.popup__close-button_type_add-card-close');
let popupAddCard = document.querySelector('.popup_type_add-card'); 
let formAddCard = document.querySelector('.popup_type_add-card-form');
let titleInput = document.querySelector('.popup__form-text_type_title');
let linkInput = document.querySelector('.popup__form-text_type_link');

function PopupAddCardOpened() {
	popupAddCard.classList.add('popup_opened');
}

function PopupAddCardClosed() {
	popupAddCard.classList.remove('popup_opened');
	titleInput.value = '';
	linkInput.value = '';
}

ProfileButton.addEventListener('click', PopupAddCardOpened);
PopupAddCardCloseButton.addEventListener('click', PopupAddCardClosed);

function formSubmitAddCard (evt) {
	evt.preventDefault(); 

	const elementTemplate = document.querySelector('#element-template').content.querySelector('.element');
	
	const cardElement = elementTemplate.cloneNode(true);

	const cardImage = cardElement.querySelector('.element__image');
	const cardTitle = cardElement.querySelector('.element__title');
	const cardLikeButton = cardElement.querySelector('.element__button-like');
	const cardDeleteButton = cardElement.querySelector('.element__remove_image');
	const elementFullImage = cardElement.querySelector('.element__image');
    const elementFullImageCloseButton = document.querySelector('.popup__close-button_type_full-image-close');
    const popupElementFullImage = document.querySelector('.popup_type_full-image'); 
    const popupElementFullImageContainer = document.querySelector('.popup__full-image');
    const popupElementFullImageTitile = document.querySelector('.popup__title_type_full-image');

	cardTitle.textContent = titleInput.value;
	cardImage.src = linkInput.value;

	cardLikeButton.addEventListener('click', function (evt) {
		evt.target.classList.toggle('button-like_active');
	});

	cardDeleteButton.addEventListener('click', function () {
    const listItem = cardDeleteButton.closest('.element');
    listItem.remove();
    });

    elementFullImage.addEventListener('click', function () {
    popupElementFullImage.classList.add('popup_opened');
    popupElementFullImageTitile.textContent = cardTitle.textContent;
    popupElementFullImageContainer.src = cardImage.src; 
    });

    elementFullImageCloseButton.addEventListener('click', function () {
    popupElementFullImage.classList.remove('popup_opened');
    });

	elements.prepend(cardElement);
}

formAddCard.addEventListener('submit', formSubmitAddCard);
formAddCard.addEventListener('submit', PopupAddCardClosed);



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

initialCards.forEach((data) => {
	const cardElement = elementTemplate.cloneNode(true);

	const cardImage = cardElement.querySelector('.element__image');
	const cardTitle = cardElement.querySelector('.element__title');
	const cardLikeButton = cardElement.querySelector('.element__button-like');
	const cardDeleteButton = cardElement.querySelector('.element__remove_image');
	const elementFullImage = cardElement.querySelector('.element__image');
    const elementFullImageCloseButton = document.querySelector('.popup__close-button_type_full-image-close');
    const popupElementFullImage = document.querySelector('.popup_type_full-image'); 
    const popupElementFullImageContainer = document.querySelector('.popup__full-image');
    const popupElementFullImageTitile = document.querySelector('.popup__title_type_full-image');

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
    popupElementFullImageTitile.textContent = data.name;
    popupElementFullImageContainer.src = data.link; 
    });

    elementFullImageCloseButton.addEventListener('click', function () {
    popupElementFullImage.classList.remove('popup_opened');
    });

	elements.append(cardElement);
})



//let elementImage = document.querySelector('.element__image');
//let elementImageCloseButton = document.querySelector('.popup__close-button_type_full-image-close');







