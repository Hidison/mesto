import Popup from './Popup.js'

class PopupWithDel extends Popup {
  constructor ( {popupSelector, handleFormSubmit} ) {
    super(popupSelector);
    this._popup = super.takePopup();
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._delElement);
    })
    
    super.setEventListeners();
  }

  open (data) {
    super.open()
    this._delElement = data
  }

  close() {
    super.close();
  }
}

export default PopupWithDel;