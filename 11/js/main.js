import { getPhotos } from './api.js';
import './form.js';
import { setFilters } from './filter.js';
import { showAlert } from './utlis.js';

getPhotos()
  .then((photos) => {
    setFilters(photos);
  })
  .catch(() => {
    showAlert();
  });
