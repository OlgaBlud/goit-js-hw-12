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
refs.loadMoreBtn.addEventListener('click', handleLoadMoreBtnClick);

async function onSearchBtnSubmit(event) {
  event.preventDefault();
  query = event.target.elements.searchField.value.trim();
  currentPage = 1;
  if (query === '') {
    clearGallery();
    displayMessage('You forgot enter data for search', '#ffa000');
    hideElement(refs.loadMoreBtn);
    return;
  }
  showElement(refs.loader);
  hideElement(refs.loadMoreBtn);
  try {
    const { totalHits, hits } = await fetchPhotos(query, currentPage);
    updateGallery(totalHits, hits);
  } catch (error) {
    showErrMessage(error);
  } finally {
    updateLoadMoreBtnStatus();
    hideElement(refs.loader);
  }
}

async function handleLoadMoreBtnClick() {
  hideElement(refs.loadMoreBtn);
  showElement(refs.loader);
  currentPage++;
  try {
    const { hits } = await fetchPhotos(query, currentPage);
    const markup = galleryTemplate(hits);
    insertGalleryMarkup(markup);
    lightbox.refresh();
    catchLastPage();
    scrollOldElements();
  } catch (error) {
    showErrMessage(error);
  } finally {
    updateLoadMoreBtnStatus();
    hideElement(refs.loader);
  }
}

function updateLoadMoreBtnStatus() {
  if (currentPage >= maxPage) {
    hideElement(refs.loadMoreBtn);
  } else showElement(refs.loadMoreBtn);
}

function catchLastPage() {
  if (maxPage !== currentPage) {
    return;
  } else {
    displayMessage(
      "We're sorry, but you've reached the end of search results.",
      '#ffa000'
    );
  }
  refs.searchForm.reset();
}

function hideElement(element) {
  element.classList.add('visually-hidden');
}

function showElement(element) {
  element.classList.remove('visually-hidden');
}
function showErrMessage(error) {
  console.log(error);
  displayMessage(
    'An error occurred while fetching photos. Please try again later.',
    '#EF4040'
  );
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
function scrollOldElements() {
  const galleryItem = refs.gallery.children[0];
  const galleryItemHeight = galleryItem.getBoundingClientRect().height;
  const scrollHeight = galleryItemHeight * 2;
  scrollBy({
    top: scrollHeight,
    behavior: 'smooth',
  });
}
function updateGallery(totalElements, elementsArr) {
  if (totalElements === 0) {
    clearGallery();
    displayMessage(
      'Sorry, there are no images matching your search query. Please try again!',
      '#EF4040'
    );
    hideElement(refs.loader);
    refs.searchForm.reset();
    return;
  }
  maxPage = Math.ceil(totalElements / perPage);
  const markup = galleryTemplate(elementsArr);
  insertGalleryMarkup(markup);
  lightbox.refresh();
  catchLastPage();
}

function clearGallery() {
  refs.gallery.innerHTML = '';
}
function insertGalleryMarkup(markup) {
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}
