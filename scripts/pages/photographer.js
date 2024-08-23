import {getUserIDFromURL} from "../utils/getUserIDFromURL.js"
import {PhotographerInfo} from "../class/PhotographerInfo.js"
import {getPhotographerInfos} from "../api/api.js"
import {btnFilterToggle} from "../utils/btnFilterToggle.js"

async function displayPhotographerInfo() {
    const userID = getUserIDFromURL()


    // early return
    if (!userID){
        console.log('ID utilisateur non trouvé dans l URL.')
        window.alert('ID utilisateur non trouvé dans l URL')
        return;
    }
    

    const photographersData = await getPhotographerInfos()

    if (photographersData) {
        const photographerData = photographersData.photographers.find(p => p.id === parseInt(userID))
        const mediaList = photographersData.media.filter(m => m.photographerId === parseInt(userID))

        if (photographerData) {

            // sélectionner les classes des div
            const photographerNodeList = document.querySelectorAll(".photographHeader__userInfos, .photographHeader__userPicture, .photographHeader__price")
            const photographersImages = document.querySelector(".photograph-images")

            // retourner la class pour générer le header et les médias
            return new PhotographerInfo(photographerData, mediaList, photographerNodeList, photographersImages)

        } else {
            //
            let main = document.getElementById("main")
            main.textContent = '<h1>Cette page n\'existe pas</h1>'
            console.log(`Photographe avec l'ID ${userID} non trouvé.`)
        }
    } else {
        console.log('Impossible de récupérer les données des photographes.')
    }

}

// Appeler la fonction pour afficher les informations du photographe
displayPhotographerInfo()
btnFilterToggle()

