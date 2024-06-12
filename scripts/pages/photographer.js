import {MediaFactory} from "../factory/mediaFactory.js"
import {PhotographerHeader} from "../class/photographerHeader.js"
import {PhotographerMedias} from "../class/photographerMedias.js"

// Fonction pour récupérer l'ID de l'utilisateur à partir de l'URL
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

                // Sélectionner les classes des div
                const photographerNodeList = document.querySelectorAll(".user_infos, .user_picture, .photograph-price")
                const photographersImages = document.querySelector(".photograph-images")

                // Generer un Header avec les infos du photograph
                new PhotographerHeader(photographerData, photographerNodeList)

                // Generer les Medias du photograph
                new PhotographerMedias(photographerData, mediaList, photographersImages)


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

// Appeler la fonction pour afficher les informations du photographe
displayPhotographerInfo()

