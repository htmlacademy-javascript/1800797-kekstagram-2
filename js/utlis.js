import { MAX_SHOWN_COMMENTS } from './constants.js';

function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];


function createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const isEscKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

const checkComments = (comment) => comment <= MAX_SHOWN_COMMENTS ? comment : MAX_SHOWN_COMMENTS;

export { getRandomArrayElement,
  getRandomInteger,
  createRandomIdFromRangeGenerator,
  isEscKey,
  isEnterKey,
  checkComments
};
