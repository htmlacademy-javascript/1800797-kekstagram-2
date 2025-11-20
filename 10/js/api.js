import { POST_DATA_URL } from './constants';

const postPhoto = (body) =>
  fetch(POST_DATA_URL, {
    method: 'POST',
    body
  });

export { postPhoto };
