export function galleryTemplate(photosData) {
  return photosData.map(photoCardTemplate).join('');
}

function photoCardTemplate(photo) {
  return `<li class="gallery-item">
  <a href="${photo.largeImageURL}" class="gallery-item-link"
    ><img
      class="gallery-item-img"
      src="${photo.webformatURL}"
      alt="${photo.tags}"
      width="360"
  /></a>
  <ul class="photo-info-list">
    <li class="photo-info-item">
      <p class="photo-data-name">Likes</p>
      <p class="photo-data">${photo.likes}</p>
    </li>
    <li class="photo-info-item">
      <p class="photo-data-name">Views</p>
      <p class="photo-data">${photo.views}</p>
    </li>
    <li class="photo-info-item">
      <p class="photo-data-name">Comments</p>
      <p class="photo-data">${photo.comments}</p>
    </li>
    <li class="photo-info-item">
      <p class="photo-data-name">Downloads</p>
      <p class="photo-data">${photo.downloads}</p>
    </li>
  </ul>
</li>`;
}
