const popupElementFullImage = document.querySelector('.popup_type_full-image');
const elementFullImageCloseButton = popupElementFullImage.querySelector('.popup__close-button');
const popupElementFullImageContainer = document.querySelector('.popup__full-image');
const popupElementFullImageTitle = document.querySelector('.popup__title_type_full-image'); 

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

class Card {
    constructor(data, cardSelector) {
      this._cardSelector = cardSelector;
      this._name = data.name;
      this._link = data.link;
    }
  
    _getTemplate() {
      const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
  
      return cardElement;
    }
  
    generateCard() {
      this._element = this._getTemplate(); 
      this._setEventListeners();
  
      this._element.querySelector('.element__image').src = this._link;
      this._element.querySelector('.element__image').alt = 'иллюстрация пейзажа';
      this._element.querySelector('.element__title').textContent = this._name;
  
      return this._element;
    }
  
    _likeCard(evt) {
      evt.target.classList.toggle('button-like_active');
    }
  
    _deleteCard() {
        this._element.remove();
    }
    
    _getFullImage() {
        
      openPopup(popupElementFullImage);

      popupElementFullImageTitle.textContent = this._name;
      popupElementFullImageContainer.src = this._link;
      popupElementFullImageContainer.alt = 'иллюстрация пейзажа';
    }
  
    _closeFullImage() {
      closePopup(popupElementFullImage);
    }
  
    _setEventListeners() {
        const cardLikeButton = this._element.querySelector('.element__button-like');
        const cardDeleteButton = this._element.querySelector('.element__remove_image');
        const elementFullImage = this._element.querySelector('.element__image');
  
      cardLikeButton.addEventListener('click', (evt) => {
        this._likeCard(evt);
      });
  
      cardDeleteButton.addEventListener('click', () => {
        this._deleteCard();
      });
  
      elementFullImage.addEventListener('click', () => {
        this._getFullImage();
      });
  
      elementFullImageCloseButton.addEventListener('click', () => {
        this._closeFullImage();
      });
    }
  }

  export default Card;