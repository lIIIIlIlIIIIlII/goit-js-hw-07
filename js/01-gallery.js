import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryListEl = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardMarkup(galleryItems);

galleryListEl.insertAdjacentHTML("beforeend", cardsMarkup);

function createGalleryCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a></li>`;
    })
    .join("");
}

galleryListEl.addEventListener("click", (event) => {
  event.preventDefault();
  const imageInstance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );
  imageInstance.show();
});

console.log(galleryItems);