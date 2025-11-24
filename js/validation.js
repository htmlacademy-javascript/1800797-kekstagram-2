import {
  DESCRIPTION_LENGTH,
  HASHTAG_SYMBOLS,
  HASHTAGS_VOLUME
} from './constants.js';
import { checkString } from './utlis.js';

const imageUploadForm = document.querySelector('.img-upload__form');
const hashtagField = document.querySelector('.text__hashtags');
const descriptionField = document.querySelector('.text__description');

const pristine = new Pristine(imageUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
  errorTextClass: 'form__error'
},
true
);

const getTagsArray = (value) => value.replace(/ +/g, ' ').trim().toLowerCase().split(' ');

const validateDescription = (value) => checkString(value, DESCRIPTION_LENGTH);

const validateHashtagVolume = (value) => getTagsArray(value).length <= HASHTAGS_VOLUME;

const validateHashtag = (value) => {
  const tags = getTagsArray(value);
  return !value.length ? true : !tags.some((tag) => !HASHTAG_SYMBOLS.test(tag));
};

pristine.addValidator(
  descriptionField,
  validateDescription,
  `Длина описания не должна превышать ${DESCRIPTION_LENGTH} символов.`,
  1,
  true
);

pristine.addValidator(
  hashtagField,
  validateHashtagVolume,
  `Колличество хэштегов не должно превышать ${HASHTAGS_VOLUME}`,
  1,
  true
);

pristine.addValidator(
  hashtagField,
  validateHashtag,
  `Хэштег начинается с символа # (решётка);
   строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;
   хеш-тег не может состоять только из одной решётки;
   максимальная длина одного хэштега 20 символов, включая решётку;`
);

const validateUniqueHashtag = (value) => {
  const tags = getTagsArray(value);
  const uniqueTags = [...new Set(tags)];
  return tags.length === uniqueTags.length;
};

pristine.addValidator(
  hashtagField,
  validateUniqueHashtag,
  'Хэштег не должен повторяться',
  1,
  true
);

const validateForm = () => pristine.validate();

const resetValidation = () => {
  pristine.reset();
};

export { validateForm, resetValidation };
