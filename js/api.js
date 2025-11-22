import {
  GET_DATA_URL,
  POST_DATA_URL
} from './constants';
import { showAlert } from './utlis';

const getPhotos = () => fetch(GET_DATA_URL)
  .then((responce) => {
    if (!responce.ok) {
      showAlert('Что-то пошло не так...');
      throw new Error();
    }
    return responce.json();
  })
  .catch(() => {
    showAlert('Что-то пошло не так...');
    throw new Error();
  });

const postPhoto = (body) =>
  fetch(POST_DATA_URL, {
    method: 'POST',
    body
  });

export {
  postPhoto,
  getPhotos
};
