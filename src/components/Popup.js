import {
	keyCodeEsc,
} from '../utils/constants.js';

class Popup {
    constructor(popupSelector) {
       this._popup = document.querySelector(popupSelector);
   }

   open() {
    this._popup.classList.add('popup_opened');

    document.addEventListener('keyup',(evt) => 
        this._handleEscClose(evt));

    document.addEventListener('mousedown',(evt) => 
        this._closePopupMousedown(evt));
}

close() {
    this._popup.classList.remove('popup_opened');
    
    document.removeEventListener('keyup', (evt) => 
        this._handleEscClose(evt));

    document.removeEventListener('mousedown',(evt) => 
        this._closePopupMousedown(evt));
}

_handleEscClose(evt) {
    if (evt.keyCode == keyCodeEsc)  {
        this.close();
    }
}

_closePopupMousedown(evt) {
    if (evt.target.classList.contains('popup_opened')) { 
        this.close();
    }
}

setEventListeners() {
    const CloseButton = this._popup.querySelector('.popup__close-button');

    CloseButton.addEventListener('click', () => {
       this.close();
   });
}

takePopup() {
    return this._popup;
}
};

export default Popup;