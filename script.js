const body = document.querySelector('body');
const closeIcon = document.querySelector('.close-icon');
const popupBtn = document.querySelector('.popup-btn');
const container = document.querySelector('.container');
const newsLetter = document.querySelector('.news-letter');
const subsCard = document.querySelector('.subscribe-card');
const subsBtn = document.querySelector('#subs-btn');

closeIcon.addEventListener('click', (e) => {
  body.classList.remove('popup-open');
  body.classList.remove('body-opacity');
  newsLetter.classList.remove('hide');
  subsCard.classList.add('hide');
});

popupBtn.addEventListener('click', (e) => {
  body.classList.toggle('popup-open');
  body.classList.toggle('body-opacity');
  newsLetter.classList.remove('hide');
  subsCard.classList.add('hide');
  e.stopPropagation();
});
container.addEventListener('click', (e) => {
  e.stopPropagation();
});

window.addEventListener('click', (e) => {
  body.classList.remove('popup-open');
  body.classList.remove('body-opacity');
  newsLetter.classList.remove('hide');
  subsCard.classList.add('hide');
});

newsLetter.addEventListener('click', (e) => {
  newsLetter.classList.add('hide');
  subsCard.classList.remove('hide');
});

//
