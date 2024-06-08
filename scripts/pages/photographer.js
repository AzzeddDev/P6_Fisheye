import {MediaFactory} from "../factory/mediaFactory.js"

// Fonction pour récupérer l'ID de l'utilisateur à partir de l'URL
function getUserIDFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

async function displayPhotographerInfo() {
    const userID = getUserIDFromURL();

    if (userID) {
        const photographersData = await getPhotographerInfos()

        if (photographersData) {
            const photographerData = photographersData.photographers.find(p => p.id === parseInt(userID))
            const mediaList = photographersData.media.filter(m => m.photographerId === parseInt(userID))

            if (photographerData) {

                // Sélectionner les classes des div
                const photographerNodeList = document.querySelectorAll(".user_infos, .user_picture, .photograph-price")
                const photographersImages = document.querySelector(".photograph-images")

                // créer une variable pour le recup le lien de la photo de profile de l'utilisateur
                const picture = `assets/photographers/id_photos/${photographerData.portrait}`

                // créer un h2 comme nom du photographe
                const userName = document.createElement( 'h2')
                userName.textContent = photographerData.name

                // créer un p comme Lieu de naissance
                const userCountry = document.createElement( 'p')
                userCountry.textContent = photographerData.city + ", " + photographerData.country

                // créer un p comme Lieu de naissance
                const userQuote = document.createElement( 'p')
                userQuote.textContent = photographerData.tagline

                // créer l'element photo de profile
                const userPicture = document.createElement( 'img');
                userPicture.setAttribute("src", picture)
                userPicture.classList.add('user-picture')

                // créer l'element user price
                const userPrice = document.createElement("span")
                userPrice.textContent = photographerData.price + `€ / jour`

                // appendChild le nom et la photo de profile
                photographerNodeList[0].appendChild(userName)
                photographerNodeList[0].appendChild(userCountry)
                photographerNodeList[0].appendChild(userQuote)
                photographerNodeList[1].appendChild(userPicture)
                photographerNodeList[2].appendChild(userPrice)

                // selectionner le prénom de l'utilisateur et le transformer en lowercase
                const photographerFirstName = photographerData.name.split(' ')[0].toLowerCase().replace("-", "_")

                // créer le nom du dossier au nom de l'utilisatuer ou sont stocker les images
                const mediaFolder = `assets/images/${photographerFirstName}`

                // créer une boucle en Factory des medias
                mediaList.forEach(media => {
                    new MediaFactory(media, mediaFolder, photographersImages)
                })

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
displayPhotographerInfo();

