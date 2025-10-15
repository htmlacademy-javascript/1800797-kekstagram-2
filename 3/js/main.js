const PHOTOS = 25;

const DESCRIPTION = [
  'Классно!',
  'Бодро',
  'Огонь!',
  'Пожар',
  'Весело',
  'Вкусно',
  'Аппетитно',
  'Восторженно',
  'Смело',
  'Отнудь не...'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const MIN_LIKES = 15;

const MAX_LIKES = 200;

const COMMENTS = 500;

const MIN_AVATAR = 1;

const MAX_AVATAR = 6;

const NAMES = [
  'Иван',
  'Пётр',
  'Александр',
  'Николай',
  'Максим',
  'Светлана',
  'Елена',
  'Мария',
  'Евгения',
  'Надежда'
];

const MIN_COMMENTS = 1;

const MAX_COMMENTS = 30;

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

console.log(getPhotos);
