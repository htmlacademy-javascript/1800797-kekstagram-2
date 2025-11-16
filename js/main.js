import { renderThumbnail } from './thumbnails.js';
import { getPhotos } from './data.js';
import './form.js';
import './scale.js';
renderThumbnail(getPhotos());
