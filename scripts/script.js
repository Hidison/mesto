let ProfileButton = document.querySelector('.profile__edit-button');
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
    jobInput.value = name2.textContent;;
}

ProfileButton.addEventListener('click', PopupOpened);
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