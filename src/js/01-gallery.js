
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
const galleryMarkup = createGallaryItemsMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

galleryList.addEventListener('click', onBlockStandartAction);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    scrollZoom: false,
});

function createGallaryItemsMarkup(items) {
    return items
        .map(({ description, preview, original }) => {
            return `<a class="gallery__item" href="${original}">
          <img
            class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
        })
        .join('');
}

function onBlockStandartAction(e) {
    e.preventDefault();
}