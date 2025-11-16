import {
  SCALE_STEP,
  MAX_SCALE,
  MIN_SCALE
} from './constants';

const minus = document.querySelector('.scale__control--smaller');
const plus = document.querySelector('.scale__control--bigger');
const scaleControl = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

let scale;

const renderScale = () => {
  scaleControl.value = scale;
  imagePreview.style = `transform: scale(${scale / 100})`;
};

const onMinusClick = () => {
  scale = scale - SCALE_STEP >= MIN_SCALE ? scale - SCALE_STEP : MIN_SCALE;
  renderScale();
};


const onPlusClick = () => {
  scale = scale + SCALE_STEP <= MAX_SCALE ? scale + SCALE_STEP : MAX_SCALE;
  renderScale();
  // disableMaxScale();
};

// function disableMaxScale () {
//   if (scale === MAX_SCALE) {
//     onPlusClick.setAttribute('disabled', true);
//   }
// }


minus.addEventListener('click', onMinusClick);
plus.addEventListener('click', onPlusClick);


const resetScale = () => {
  scale = MAX_SCALE;
  renderScale();
};

export { resetScale };
