import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupSelector) {
      super(popupSelector);
      this._popup = super.takePopup();
      this._popupTitle = this._popup.querySelector('.popup__title');
      this._popupFullImage = this._popup.querySelector('.popup__full-image');
    }

    open(name, link) {
      super.open();
      this._popupTitle.textContent = name;
      this._popupFullImage.src = link;
      this._popupFullImage.alt = name;
    }

  };

  export default PopupWithImage;