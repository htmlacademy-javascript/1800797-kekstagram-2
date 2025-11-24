import { Popups } from './constants';
import { isEscKey } from './utlis';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const templates = {
  [Popups.SUCCESS]: successTemplate,
  [Popups.ERROR]: errorTemplate
};

const closePopUp = () => {
  document.querySelector('.popup').remove();
  document.removeEventListener('keydown', onClickEsc);
};

const showPopup = (typePopup) => {
  const popupElement = templates[typePopup].cloneNode(true);
  document.body.append(popupElement);

  popupElement.addEventListener('click', ({ target }) => {
    if (target.classList.contains(typePopup) || target.classList.contains(`${typePopup}__button`)) {
      popupElement.remove();
    }
  });
  popupElement.classList.add('popup');
  document.addEventListener('keydown', onClickEsc);
};

function onClickEsc(evt) {
  if (isEscKey(evt)) {
    evt.preventDefault();
    closePopUp();
  }
}

export {
  showPopup
};
