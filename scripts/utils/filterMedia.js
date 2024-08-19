// fonction pour filtrer les médias
import {displayFilteredMedia} from "./displayFilteredMedia.js"
import {resetTotalLikes} from "./handleLikesMedias.js"

export function filterMedia(type) {
    // Réinitialiser le total des likes à chaque utilisation d'un filtre
    resetTotalLikes();

    let filteredMediaList;

    // conditions des filtres par: popularité - date - titre
    if (type === 'popilarite') {
        filteredMediaList = window.mediaList.sort((a, b) => b.likes - a.likes)
    } else if (type === 'date') {
        filteredMediaList = window.mediaList.sort((a, b) => new Date(b.date) - new Date(a.date))
    } else if (type === 'titre') {
        filteredMediaList = window.mediaList.sort((a, b) => a.title.localeCompare(b.title))
    }

    displayFilteredMedia(filteredMediaList, window.mediaFolder, window.photographersImages)
}