class Api {
    constructor() {

    }

    getInitialCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-15/cards', {
            method: 'GET',
            headers: {
                authorization: '71f3852f-9196-47d1-bd3b-fa85f23dbdb4'
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => {
                console.log(`Ошибка: ${err}`);
            });
    }

    getPersonInfo() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-15/users/me', {
            method: 'GET',
            headers: {
                authorization: '71f3852f-9196-47d1-bd3b-fa85f23dbdb4',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => {
                console.log(`Ошибка: ${err}`);
            });
    }

    sendUserInformation(data) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-15/users/me', {
            method: 'PATCH',
            headers: {
                authorization: '71f3852f-9196-47d1-bd3b-fa85f23dbdb4',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => {
                console.log(`Ошибка: ${err}`);
            });
    }

    addNewCard(data) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-15/cards', {
            method: 'POST',
            headers: {
                authorization: '71f3852f-9196-47d1-bd3b-fa85f23dbdb4',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => {
                console.log(`Ошибка: ${err}`);
            });
    }

    delCard(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-15/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: '71f3852f-9196-47d1-bd3b-fa85f23dbdb4',
                'Content-Type': 'application/json'
            },
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => {
                console.log(`Ошибка: ${err}`);
            });
    }

    likeCard(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-15/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: {
                authorization: '71f3852f-9196-47d1-bd3b-fa85f23dbdb4',
                'Content-Type': 'application/json'
            },
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => {
                console.log(`Ошибка: ${err}`);
            });
    }

    removelikeCard(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-15/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: '71f3852f-9196-47d1-bd3b-fa85f23dbdb4',
                'Content-Type': 'application/json'
            },
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => {
                console.log(`Ошибка: ${err}`);
            });
    }

    editAvatar(data) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-15/users/me/avatar', {
            method: 'PATCH',
            headers: {
                authorization: '71f3852f-9196-47d1-bd3b-fa85f23dbdb4',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => {
                console.log(`Ошибка: ${err}`);
            });
    }

}

export const api = new Api();