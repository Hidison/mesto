import Popup from './Popup.js';

import {
	defultConfig
  } from '../utils/constants.js';

class PopupWithForm extends Popup {
    constructor( {popupSelector, handleFormSubmit} ) {
      super(popupSelector);
      this._popup = super.takePopup();
      this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValues() {
      this._formValues = {};
      this._inputList = Array.from(this._popup.querySelectorAll(defultConfig.inputSelector));
      
      this._inputList.forEach(input => this._formValues[input.name] = input.value);
      
      return this._formValues;
    }

    setEventListeners() {
      this._popup.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
      })

      this._popup.querySelector('.popup__form').reset();
      super.setEventListeners();
    }

    close() {
      super.close();
    }

  };

  export default PopupWithForm;