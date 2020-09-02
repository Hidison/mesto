class Card {
	constructor({ data, handleCardClick }, cardSelector) {
		this._cardSelector = cardSelector;
		this._name = data.name;
		this._handleCardClick = handleCardClick;
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
		this._element = null;
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
			this._handleCardClick(this._name, this._link);
		});
	}
}

export default Card;