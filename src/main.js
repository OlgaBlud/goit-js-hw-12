import { fetchPhotos } from './js/pixabay-api';
import { galleryTemplate } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import closeIcon from './img/close.svg';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const refs = {
  searchForm: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.load-more-btn'),
};

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 350,
});

let query = '';
let currentPage = 1;
let maxPage = 1;
const perPage = 15;
refs.searchForm.addEventListener('submit', onSearchBtnSubmit);

async function onSearchBtnSubmit(event) {
  event.preventDefault();
  query = event.target.elements.searchField.value.trim();
  currentPage = 1;
  if (query === '') {
    refs.gallery.innerHTML = '';
    displayMessage('You forgot enter data for search', '#ffa000');
    return;
  }
  showElement(refs.loader);
  hideElement(refs.loadMoreBtn);
  try {
    const { totalHits, hits } = await fetchPhotos(query, currentPage);
    if (hits.length === 0) {
      refs.gallery.innerHTML = '';
      displayMessage(
        'Sorry, there are no images matching your search query. Please try again!',
        '#EF4040'
      );
    }
    maxPage = Math.ceil(totalHits / perPage);
    const markup = galleryTemplate(hits);
    refs.gallery.innerHTML = markup;
    lightbox.refresh();
  } catch (error) {
    console.log(error);
    displayMessage(
      'An error occurred while fetching photos. Please try again later.',
      '#EF4040'
    );
  }

  updateLoadMoreBtnStatus();
  hideElement(refs.loader);
}

refs.loadMoreBtn.addEventListener('click', handleLoadMoreBtnClick);

async function handleLoadMoreBtnClick() {
  showElement(refs.loader);
  currentPage++;
  try {
    const { hits } = await fetchPhotos(query, currentPage);
    const markup = galleryTemplate(hits);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
  } catch (error) {
    console.log(error);
    displayMessage(
      'An error occurred while fetching photos. Please try again later.',
      '#EF4040'
    );
  }

  hideElement(refs.loader);
  updateLoadMoreBtnStatus();
}

function displayMessage(message, color) {
  iziToast.show({
    message: message,
    position: 'topRight',
    backgroundColor: color,
    iconUrl: closeIcon,
    messageColor: '#fff',
    theme: 'dark',
    maxWidth: '350px',
  });
}
function updateLoadMoreBtnStatus() {
  if (currentPage >= maxPage) {
    hideElement(refs.loadMoreBtn);
    displayMessage('No more avaliable pictures', '#ffa000');
    refs.searchForm.reset();
  } else showElement(refs.loadMoreBtn);
}

function hideElement(element) {
  element.classList.add('visually-hidden');
}

function showElement(element) {
  element.classList.remove('visually-hidden');
}
