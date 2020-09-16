class Popup {
    constructor(popupSelector) {
       this._popup = document.querySelector(popupSelector);
   }

   open() {
    this._popup.classList.add('popup_opened');

    document.addEventListener('keyup', this._handleEscClose.bind(this));
    document.addEventListener('mousedown', this._closePopupMousedown.bind(this));
}

close() {
    this._popup.classList.remove('popup_opened');
    
    document.removeEventListener('keyup', this._handleEscClose.bind(this));
    document.removeEventListener('mousedown', this._closePopupMousedown.bind(this));
}

_handleEscClose(evt) {
    if (evt.keyCode == 27)  {
        this.close();
    }
}

_closePopupMousedown(evt) {
    if (evt.target.classList.contains('popup_opened')) { 
        this.close();
    }
}

setEventListeners() {
    const closeButton = this._popup.querySelector('.popup__close-button');

    closeButton.addEventListener('click', () => {
       this.close();
   });
}

takePopup() {
    return this._popup;
}
};

export default Popup;