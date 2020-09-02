import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupSelector) {
      super(popupSelector);
      this._popup = super.takePopup();
    }

    open(name, link) {
      super.open();
      this._popup.querySelector('.popup__title').textContent = name;
      this._popup.querySelector('.popup__full-image').src = link;
      this._popup.querySelector('.popup__full-image').alt = 'иллюстрация пейзажа';
    }

  };

  export default PopupWithImage;