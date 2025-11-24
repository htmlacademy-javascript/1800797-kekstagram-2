const MAX_SHOWN_COMMENTS = 5;

const DESCRIPTION_LENGTH = 140;

const HASHTAGS_VOLUME = 5;

const HASHTAG_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const SCALE_STEP = 25;

const MIN_SCALE = 25;
const MAX_SCALE = 100;

const POST_DATA_URL = 'https://31.javascript.htmlacademy.pro/kekstagram/';

const GET_DATA_URL = 'https://31.javascript.htmlacademy.pro/kekstagram/data';

const ALERT_SHOW_TIME = 5000;

const RANDOM_PHOTOS_VALUE = 10;

const RENDER_DELAY = 500;

const Popups = {
  SUCCESS: 'success',
  ERROR: 'error'
};

const EFFECTS = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

const DEFAULT_EFFECT = EFFECTS.NONE;

const EffectsSettings = {
  [EFFECTS.NONE]: {
    slider: {
      range: {
        min: 0,
        max: 100,
      },
      start: 80,
      step: 1
    },
    style: '',
    units: ''
  },
  [EFFECTS.CHROME]: {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1
    },
    style: 'grayscale',
    units: ''
  },
  [EFFECTS.SEPIA]: {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1
    },
    style: 'sepia',
    units: ''
  },
  [EFFECTS.MARVIN]: {
    slider: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1
    },
    style: 'invert',
    units: '%'
  },
  [EFFECTS.PHOBOS]: {
    slider: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1
    },
    style: 'blur',
    units: 'px'
  },
  [EFFECTS.HEAT]: {
    slider: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1
    },
    style: 'brightness',
    units: ''
  }
};

export {
  MAX_SHOWN_COMMENTS,
  DESCRIPTION_LENGTH,
  HASHTAGS_VOLUME,
  HASHTAG_SYMBOLS,
  SCALE_STEP,
  MIN_SCALE,
  MAX_SCALE,
  POST_DATA_URL,
  GET_DATA_URL,
  ALERT_SHOW_TIME,
  RANDOM_PHOTOS_VALUE,
  RENDER_DELAY,
  Popups,
  EFFECTS,
  DEFAULT_EFFECT,
  EffectsSettings
};

