import {
  RANDOM_PHOTOS_VALUE,
  RENDER_DELAY
} from './constants.js';
import { renderThumbnail } from './thumbnails.js';
import { debounce } from './utlis.js';

const filterBlock = document.querySelector('.img-filters');

const debouncedRender = debounce(renderThumbnail, RENDER_DELAY);

const showFilters = () => {
  filterBlock.classList.remove('img-filters--inactive');
};

const filterPhotos = {
  ['filter-default']: (photos) => photos,
  ['filter-random']: (photos) => [...photos].sort(() => Math.random() - 0.5).slice(0, RANDOM_PHOTOS_VALUE),
  ['filter-discussed']: (photos) => [...photos].sort((a, b) => b.comments.length - a.comments.length)
};

const setActiveButton = (filterButton) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  filterButton.classList.add('img-filters__button--active');
};

const setFilters = (photos) => {
  showFilters();
  renderThumbnail(photos);
  filterBlock.addEventListener('click', ({target}) => {
    if (target.classList.contains('img-filters__button')) {
      const id = target.id;
      debouncedRender(filterPhotos[id](photos));
      setActiveButton(target);
    }
  });
};

export { setFilters };
