class FormValidator {
	constructor(settings, formElement) {
		this._formElement = formElement;
		this._settings = settings;
	}

	_showInputError(inputElement) {
		this._errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
		inputElement.classList.add(this._settings.inputErrorClass);
		this._errorElement.textContent = inputElement.validationMessage;
		this._errorElement.classList.add(this._settings.errorClass);
	}

	_hideInputError(inputElement) {
		this._errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
		inputElement.classList.remove(this._settings.inputErrorClass);
		this._errorElement.classList.remove(this._settings.errorClass);
		this._errorElement.textContent = '';
	}

	_isValid(inputElement) {
		if (!inputElement.validity.valid) {
			this._showInputError(inputElement);
		} else {
			this._hideInputError(inputElement);
		}
	}

	_hasInvalidInput() {
		return this._inputList.some((inputElement) => {
			return !inputElement.validity.valid;
		});
	}

	_deactivateButton = () => {
		this._buttonElement.classList.add('button_inactive');
		this._buttonElement.setAttribute('disabled', '');
	}

	_toggleButtonState() {
		if (this._hasInvalidInput()) {
			this._deactivateButton();
		} else {
			this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
			this._buttonElement.removeAttribute('disabled', '');
		}
	}

	_setEventListeners() {
		this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
		this._buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);

		this._toggleButtonState();

		this._inputList.forEach((inputElement) => {
			inputElement.addEventListener('input', () => {
				
				this._isValid(inputElement);
				this._toggleButtonState();
			});
		});
	}

	enableValidation = () => {

		this._formElement.addEventListener('submit', (evt) => {
			evt.preventDefault();
		});

		this._setEventListeners();
	};

};

export default FormValidator;