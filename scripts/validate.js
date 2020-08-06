const showInputError = (formElement, inputElement, errorMessage) => {
	const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
	inputElement.classList.add('popup__form-text_type_error');
	errorElement.textContent = errorMessage;
	errorElement.classList.add('popup__form-text-error_active');
};

const hideInputError = (formElement, inputElement) => {
	const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
	inputElement.classList.remove('popup__form-text_type_error');
	errorElement.classList.remove('popup__form-text-error_active');
	errorElement.textContent = '';
};

const isValid = (formElement, inputElement) => {
	if (!inputElement.validity.valid) {
		showInputError(formElement, inputElement, inputElement.validationMessage);
	} else {
		hideInputError(formElement, inputElement);
	}
};


const hasInvalidInput = (inputList) => {
	return inputList.some((inputElement) => {
		return !inputElement.validity.valid;
	});
};

function deactivateButton(buttonElement) {
	buttonElement.classList.add('button_inactive');
	buttonElement.setAttribute('disabled', '');
}

const toggleButtonState = (inputList, buttonElement) => {
	if (hasInvalidInput(inputList)) {
		deactivateButton(buttonElement);
	} else {
		buttonElement.classList.remove('button_inactive');
		buttonElement.removeAttribute('disabled', '');
	}
};

const setEventListeners = (formElement) => {
	const inputList = Array.from(formElement.querySelectorAll('.popup__form-text'));
	const buttonElement = formElement.querySelector('.popup__form-submit');

	toggleButtonState(inputList, buttonElement);

	inputList.forEach((inputElement) => {
		inputElement.addEventListener('input', () => {
			isValid(formElement, inputElement);
			toggleButtonState(inputList, buttonElement);
		});
	});
};


const enableValidation = () => {
	const formList = Array.from(document.querySelectorAll('.popup__form'));

	formList.forEach((formElement) => {
		formElement.addEventListener('submit', (evt) => {
			evt.preventDefault();
		});


		const fieldsetList = Array.from(formElement.querySelectorAll('.popup__form-set'));
		fieldsetList.forEach((fieldset) => {
			setEventListeners(fieldset);
		});
	});
};

enableValidation();