import { fetchPhotos } from './js/pixabay-api';
import { galleryTemplate } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import closeIcon from './img/close.svg';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 350,
});

searchForm.addEventListener('submit', onSearchBtnSubmit);

function onSearchBtnSubmit(event) {
  event.preventDefault();
  const valueToSearch = event.target.elements.searchField.value.trim();

  if (valueToSearch === '') {
    gallery.innerHTML = '';
    displayMessage('You forgot enter data for search', '#ffa000');
    return;
  }
  loader.classList.remove('visually-hidden');

  fetchPhotos(valueToSearch)
    .then(data => {
      if (data.hits.length === 0) {
        gallery.innerHTML = '';
        displayMessage(
          'Sorry, there are no images matching your search query. Please try again!',
          '#EF4040'
        );
      } else {
        const markup = galleryTemplate(data.hits);
        gallery.innerHTML = markup;
        lightbox.refresh();
      }

      loader.classList.add('visually-hidden');
    })
    .catch(error => {
      displayMessage(
        'An error occurred while fetching photos. Please try again later.',
        '#EF4040'
      );
      loader.classList.add('visually-hidden');
    });
  searchForm.reset();
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
