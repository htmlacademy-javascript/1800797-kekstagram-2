import { isEscKey, isEnterKey, checkComments } from './utlis.js';
const bigPicture = document.querySelector('.big-picture');
const buttonClose = document.querySelector('.big-picture__cancel');
const bodyBigPicture = document.querySelector('body');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsTotalQuanity = bigPicture.querySelector('.social__comment-total-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentsShownQuanity = bigPicture.querySelector('.social__comment-shown-count');
const bigPictureCommentsContainer = bigPicture.querySelector('.social__comments');
const bigPictureCommentItem = bigPicture.querySelector('.social__comment');

const renderComment = (comment) => {
  const commentElement = bigPictureCommentItem.cloneNode(true);
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__text').src = comment.message;
  return commentElement;

};

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach((item) => {
    fragment.append(renderComment(item));
  });
  bigPictureCommentsContainer.innerHTML = '';
  bigPictureCommentsContainer.append(fragment);
};


const openBigPicture = (photo) => {
  bigPicture.classList.remove('hidden');
  bodyBigPicture.classList.add('modal-open');
  bigPictureImage.src = photo.url;
  likesCount.textContent = photo.likes;
  commentsTotalQuanity.textContent = photo.comments.length;
  socialCaption.textContent = photo.description;
  commentsShownQuanity.textContent = checkComments(photo.comments.length);
  renderComments(photo.comments);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  bodyBigPicture.classList.remove('modal-open');
};


// pictures.addEventListener('keydown', (evt) => {
//   if(evt.target.classList.contains('picture__img')) {
//     if(isEnterKey(evt)) {
//       openBigPicture();
//     }
//   }
// }
// );

buttonClose.addEventListener('click', () => {
  closeBigPicture();
});

buttonClose.addEventListener('keydown', (evt) => {
  if(isEnterKey(evt)) {
    closeBigPicture();
  }
});

document.addEventListener('keydown', (evt) => {
  if(isEscKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
});
console.log()

export { openBigPicture };
