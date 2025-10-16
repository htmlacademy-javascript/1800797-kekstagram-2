import {
  PHOTOS,
  DESCRIPTION,
  MESSAGE,
  MIN_LIKES,
  MAX_LIKES,
  COMMENTS,
  MIN_AVATAR,
  MAX_AVATAR,
  NAMES,
  MIN_COMMENTS,
  MAX_COMMENTS
} from './constants.js';

import {
  getRandomInteger, getRandomArrayElement, createRandomIdFromRangeGenerator
} from './utlis.js';


const getCommentId = createRandomIdFromRangeGenerator(1, COMMENTS);


const getComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAMES),
});

const getComments = (volume) => {
  const commentsArray = [];
  for (let i = 1; i <= volume; i++) {
    commentsArray.push(getComment());
  }
  return commentsArray;
};

const getId = createRandomIdFromRangeGenerator(1, PHOTOS);

const getUrl = createRandomIdFromRangeGenerator(1, PHOTOS);

const getPhoto = () => ({
  id: getId(),
  url: `photos/${getUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: getComments(getRandomInteger(MIN_COMMENTS, MAX_COMMENTS))
});

const getPhotos = Array.from({length: PHOTOS}, getPhoto);


export {getPhotos};
