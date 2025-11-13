import { MAX_SHOWN_COMMENTS } from './constants.js';
import { isEscKey, isEnterKey } from './utlis.js';
const bigPicture = document.querySelector('.big-picture');
const buttonClose = document.querySelector('.big-picture__cancel');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const bigPictureCommentsContainer = bigPicture.querySelector('.social__comments');
const bigPictureCommentItem = bigPicture.querySelector('.social__comment');
const bigPictureCommentsLoader = bigPicture.querySelector('.social__comments-loader');
const bigPictureSocialCount = bigPicture.querySelector('.social__comment-count');

const commentsList = [];
let commentsVolume = 0;

const renderButtonLoader = () => {
  if (!commentsList.length) {
    bigPictureCommentsLoader.classList.add('hidden');
  } else {
    bigPictureCommentsLoader.classList.remove('hidden');
  }
};

const renderStatistics = () => {
  bigPictureSocialCount.innerHTML = `<span class="social__comment-shown-count">${commentsVolume - commentsList.length}
    </span> из <span class="social__comment-total-count">${commentsVolume}</span> комментариев`;
};

const renderComment = (comment) => {
  const commentElement = bigPictureCommentItem.cloneNode(true);
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__text').src = comment.message;
  return commentElement;
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();
  commentsList.splice(0, MAX_SHOWN_COMMENTS).forEach((item) => {
    fragment.append(renderComment(item));
  });
  bigPictureCommentsContainer.append(fragment);
  renderButtonLoader();
  renderStatistics();
};

const openBigPicture = (photo) => {
  commentsVolume = photo.comments.length;
  bigPictureCommentsContainer.innerHTML = '';
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');;
  bigPictureImage.src = photo.url;
  likesCount.textContent = photo.likes;
  socialCaption.textContent = photo.description;
  commentsList.length = 0;
  commentsList.push(...photo.comments.slice());
  renderComments(photo.comments);
  document.addEventListener('keydown', onClickEsc);
};

bigPictureCommentsLoader.addEventListener('click', (evt) => {
  evt.preventDefault();
  renderComments();
});

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');;
  document.removeEventListener('keydown', onClickEsc);
};

buttonClose.addEventListener('click', () => {
  closeBigPicture();
});

buttonClose.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeBigPicture();
  }
});


function onClickEsc(evt) {
  if (isEscKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

export { openBigPicture };
