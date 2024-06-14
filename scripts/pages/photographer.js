import {MediaFactory} from "../factory/mediaFactory.js"
import {PhotographerHeader} from "../class/photographerHeader.js"
import {PhotographerMedias} from "../class/photographerMedias.js"

// fonction pour récupérer l'ID de l'utilisateur à partir de l'URL
function getUserIDFromURL() {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get('id')
}

async function displayPhotographerInfo() {
    const userID = getUserIDFromURL()

    if (userID) {
        const photographersData = await getPhotographerInfos()

        if (photographersData) {
            const photographerData = photographersData.photographers.find(p => p.id === parseInt(userID))
            const mediaList = photographersData.media.filter(m => m.photographerId === parseInt(userID))

            if (photographerData) {

                // sélectionner les classes des div
                const photographerNodeList = document.querySelectorAll(".user_infos, .user_picture, .photograph-price")
                const photographersImages = document.querySelector(".photograph-images")

                // générer un Header avec les infos du photograph
                new PhotographerHeader(photographerData, photographerNodeList)

                // générer les Medias du photograph
                new PhotographerMedias(photographerData, mediaList, displayFilteredMedia, filterMedia, photographersImages)


            } else {
                console.log(`Photographe avec l'ID ${userID} non trouvé.`)
            }
        } else {
            console.log('Impossible de récupérer les données des photographes.')
        }
    } else {
        console.log('ID utilisateur non trouvé dans l URL.')
    }
}


// fonction pour afficher les médias filtrés
function displayFilteredMedia(mediaList, mediaFolder, photographersImages) {
    // effacer le contenu actuel
    photographersImages.innerHTML = ''

    // boucler à travers les médias et afficher les éléments
    mediaList.forEach(media => {
        new MediaFactory(media, mediaFolder, photographersImages)
    })
}


// fonction pour filtrer les médias
function filterMedia(type) {
    let filteredMediaList

    // conditions des filtres par: popularité - date - titre
    if (type === 'popilarite') {
        filteredMediaList = window.mediaList.sort((a, b) => b.likes - a.likes)
    } else if (type === 'date') {
        filteredMediaList = window.mediaList.sort((a, b) => new Date(b.date) - new Date(a.date))
    } else if (type === 'titre') {
        filteredMediaList = window.mediaList.sort((a, b) => a.title.localeCompare(b.title))
    }

    // console.log(filteredMediaList)

    displayFilteredMedia(filteredMediaList, window.mediaFolder, window.photographersImages)
}




// Appeler la fonction pour afficher les informations du photographe
displayPhotographerInfo()

