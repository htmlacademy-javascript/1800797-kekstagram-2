import { renderThumbnail } from './thumbnails.js';
import { getPhotos } from './api.js';
import './form.js';

getPhotos().then((photos) => {
  renderThumbnail(photos);
});
