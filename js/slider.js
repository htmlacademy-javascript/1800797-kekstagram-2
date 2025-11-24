import { EffectsSettings } from './constants.js';

const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const radioList = document.querySelector('.effects__list');
const image = document.querySelector('.img-upload__preview img');
const effectBar = document.querySelector('.img-upload__effect-level');
const originalEffect = document.querySelector('#effect-none');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 0,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      return parseFloat(value);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const updateSliderOption = (effect) => {
  const {slider} = EffectsSettings[effect];
  sliderElement.noUiSlider.updateOptions(slider);
};

const renderEffect = (effect) => {
  const {style, units} = EffectsSettings[effect];
  let filterStyle = '';
  filterStyle = `${style}(${valueElement.value}${units})`;
  image.style.filter = filterStyle;
};

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
  renderEffect(document.querySelector('.effects__radio:checked').value);
});

radioList.addEventListener('change', (evt) => {
  if (evt.target.name === 'effect') {
    if (evt.target.value === 'none') {
      effectBar.classList.add('hidden');
      image.style.filter = '';
    } else {
      updateSliderOption(evt.target.value);
      renderEffect(evt.target.value);
      effectBar.classList.remove('hidden');
    }
  }
});

const resetEffects = () => {
  effectBar.classList.add('hidden');
  image.style.filter = '';
  originalEffect.checked = true;
};

resetEffects();

export { resetEffects };
