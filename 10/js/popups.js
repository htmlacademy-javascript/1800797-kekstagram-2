import { isEscKey } from './utlis';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const closePopUp = () => {
  document.querySelector('.popup').remove();
  document.removeEventListener('keydown', onClickEsc);
  document.removeEventListener('click', onClickOutside);
};

const showPopupSuccess = () => {
  const successPopupElement = successTemplate.cloneNode(true);
  document.body.append(successPopupElement);
  document.querySelector('.success__button').addEventListener('click', closePopUp);
  successPopupElement.classList.add('popup');
  document.addEventListener('keydown', onClickEsc);
  document.addEventListener('click', onClickOutside);
};

const showPopupError = () => {
  const errorPopupElement = errorTemplate.cloneNode(true);
  document.body.append(errorPopupElement);
  document.querySelector('.error__button').addEventListener('click', closePopUp);
  errorPopupElement.classList.add('popup');
  document.addEventListener('keydown', onClickEsc);
  document.addEventListener('click', onClickOutside);

};

function onClickOutside(evt) {
  if (evt.target.classList.contains('success') || evt.target.classList.contains('error')) {
    closePopUp();
  }
}

function onClickEsc(evt) {
  if (isEscKey(evt)) {
    evt.preventDefault();
    closePopUp();
  }
}

export {
  showPopupSuccess,
  showPopupError
};
