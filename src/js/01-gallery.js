import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const imagesMarkup = createGalleryImagesMurkup(galleryItems);

function createGalleryImagesMurkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a href="${original}" class="gallery__link">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>
      `;
    })
    .join('');
}

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

// меняем инициализацию SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

galleryContainer.addEventListener('click', onGalleryContainerCLick);

function onGalleryContainerCLick(event) {
  event.preventDefault();

  if (event.target.classList.contains('gallery__image')) {
    const selectedImageOriginalURL = event.target.dataset.source;

    lightbox.open({ url: selectedImageOriginalURL });
  }
}
