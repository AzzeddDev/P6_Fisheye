import {MediaFactory} from "../factory/mediaFactory.js"

// fonction pour afficher les médias filtrés
export function displayFilteredMedia(mediaList, mediaFolder, photographersImages) {
    // effacer le contenu actuel
    photographersImages.innerHTML = ''

    // boucler à travers les médias et afficher les éléments
    mediaList.forEach(media => {
        new MediaFactory(media, mediaFolder, photographersImages)
    })
}