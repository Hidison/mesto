import './index.css';

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithDel from '../components/PopupWithDel.js';

import {
	profileEditButton,
	addCardButton,
	profileAvatar,
	userName,
	userJob,
	elements,
	popupElementFullImage,
	popupEditProfile,
	popupEditAvatar,
	popupAddCard,
	popupDelCard,
	editProfileFormElement,
	editAvatarFormElement,
	addCardFormElement,
	defultConfig,
} from '../utils/constants.js';

import {
	api
} from '../components/Api.js';


const elementFullImage = new PopupWithImage(popupElementFullImage);

const clickCard = (name, link) => {
	elementFullImage.open(name, link);
}

const renderCard = function (data, userData, cardSelector) {
	const card = new Card({
		data: data,
		userData: userData,
		handleCardClick: (name, link) => {
			clickCard(name, link);
		},
		handleLikeClick: (cardId) => {
			if (card.isLiked()) {
				api.removelikeCard(cardId)
					.then((data) => {
						card.updateLikesNumber(data)
					})
					.catch((error) => {
						console.log(error)
					})
			} else {
				api.likeCard(cardId)
					.then((data) => {
						card.updateLikesNumber(data)
					})
					.catch((error) => {
						console.log(error)
					})
			}
		},
		handleDeleteIconClick: (element, cardId) => {
			modalDelCard.open({ element, cardId })
		},
	}, cardSelector);

	return card;
}

const cardList = new Section({
	data: {},
	renderer: (item, userData) => {
		const card = renderCard(item, userData, '#element-template');

		const cardElement = card.generateCard();
		cardList.setItem(cardElement);
	},
}, elements
);

const promises = [api.getInitialCards(), api.getPersonInfo()]

Promise.all(promises)
	.then(([resCard, resUser]) => {
		user.setUserInfo(resUser._id, resUser.name, resUser.about, resUser.avatar)
		cardList.setRenderedItems(resCard);
		cardList.addItem(resUser);

		profileEditButton.addEventListener('click', () => {
			editProfileFormValidator.disableInputError();
			editProfileFormValidator.activeButton();
			editProfileFormElement.reset();
			modalEditProfile.open();
			const userData = user.getUserInfo();
			editProfileFormElement.name.value = userData.name;
			editProfileFormElement.job.value = userData.about;
		});
		
		profileAvatar.addEventListener('click', () => {
			editAvatarFormValidator.disableInputError();
			editAvatarFormValidator.activeButton();
			editAvatarFormElement.reset();
			modalEditAvatar.open();
			editAvatarFormElement.link.value = user.getUserInfo().avatar;
		});

		addCardButton.addEventListener('click', () => {
			addCardFormValidator.disableInputError();
			addCardFormValidator.deactivateButton();
			addCardFormElement.reset();
			modalAddCard.open();
			addCardFormElement.title.value = '';
			addCardFormElement.link.value = '';
		});
	})
	.catch((error) => {
		console.log(error)
	})

function renderLoading(popup, isLoading) {
	const popupFormButton = document.querySelector(popup).querySelector('.popup__form-submit');

	if (isLoading) {
		popupFormButton.value = 'Сохранение...';
	}
	else {
		popupFormButton.value = 'Сохраненить';
	}
}

const modalAddCard = new PopupWithForm({
	popupSelector: popupAddCard,
	handleFormSubmit: (value) => {
		renderLoading(popupAddCard, true);
		api.addNewCard({
			name: value.title,
			link: value.link
		})
			.then(data => {
				const card = renderCard(data, user.getUserInfo(), '#element-template');

				cardList.setMyItem(card.generateCard());
				modalAddCard.close();
				renderLoading(popupAddCard, false);
			})
			.catch((error) => {
				console.log(error)
			});
	},
});

const user = new UserInfo({
	userName: userName,
	userJob: userJob,
	userAvatar: profileAvatar
});

const modalEditProfile = new PopupWithForm({
	popupSelector: popupEditProfile,
	handleFormSubmit: (value) => {
		renderLoading(popupEditProfile, true);
		api.sendUserInformation({ name: value.name, about: value.job })
			.then(data => {
				user.setUserInfo(data._id, data.name, data.about, data.avatar);
				modalEditProfile.close();
				renderLoading(popupEditProfile, false);
			})
			.catch((error) => {
				console.log(error)
			});
	}
});

const modalEditAvatar = new PopupWithForm({
	popupSelector: popupEditAvatar,
	handleFormSubmit: (value) => {
		renderLoading(popupEditAvatar, true)
		api.editAvatar( {avatar: value.link} )
			.then(data => {
				user.setUserInfo(data._id, data.name, data.about, data.avatar);
				modalEditAvatar.close();
				renderLoading(popupEditAvatar, false);
			})
			.catch((error) => {
				console.log(error)
			});
	}
});

const modalDelCard = new PopupWithDel({
	popupSelector: popupDelCard,
	handleFormSubmit: ( {element, cardId} ) => {
		api.delCard(cardId)
			.then(() => {
				element.remove();
				modalDelCard.close()
			})
			.catch((error) => {
				console.log(error)
			})
	}
});

const editProfileFormValidator = new FormValidator(defultConfig, editProfileFormElement);
const editAvatarFormValidator = new FormValidator(defultConfig, editAvatarFormElement);
const addCardFormValidator = new FormValidator(defultConfig, addCardFormElement);

modalEditProfile.setEventListeners();
modalEditAvatar.setEventListeners();
modalAddCard.setEventListeners();
modalDelCard.setEventListeners();
elementFullImage.setEventListeners();

editProfileFormValidator.enableValidation();
editAvatarFormValidator.enableValidation();
addCardFormValidator.enableValidation();