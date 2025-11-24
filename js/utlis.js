import { ALERT_SHOW_TIME } from './constants.js';

const alertTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

export const isEscKey = (evt) => evt.key === 'Escape';
export const isEnterKey = (evt) => evt.key === 'Enter';

export const checkString = (string, value) => string.length <= value;

export const showAlert = () => {
  const alertPopup = alertTemplate.cloneNode(true);
  document.body.append(alertPopup);

  setTimeout(() => {
    alertPopup.remove();
  }, ALERT_SHOW_TIME);
};

export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
