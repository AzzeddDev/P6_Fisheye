// variable globale pour garder une trace du nombre total de likes
import {getPhotographerInfos} from "../api/api.js"
import {getUserIDFromURL} from "./getUserIDFromURL.js"

let totalLikes = 0

// Fonction pour réinitialiser le total des likes
export function resetTotalLikes() {
    totalLikes = 0
}

export async function handleLikesMedias(likeElement, initialLikes) {
    const photographersData = await getPhotographerInfos()
    const userID = getUserIDFromURL()
    const photographerData = photographersData.photographers.find(p => p.id === parseInt(userID))

    let isLiked = false;
    let likeCount = initialLikes

    // Ajouter le nombre initial de likes au total global
    totalLikes += likeCount

    const likeText = document.createTextNode(likeCount)

    const iconLike = document.createElement("i")
    iconLike.classList.add('fa-solid', 'fa-heart')

    // effacer tout contenu existant
    likeElement.innerHTML = ''
    likeElement.appendChild(likeText)

    // appenchild l'icône
    likeElement.appendChild(iconLike)

    const userPriceAndLikes = document.getElementById("userPrice")

    let userPrice = userPriceAndLikes.querySelector("span")
    if (!userPrice) {
        userPrice = document.createElement("span")
        userPriceAndLikes.appendChild(userPrice)
    }

    userPrice.textContent = `${totalLikes} ♥ ${photographerData.price} € / jour`

    likeElement.addEventListener('click', () => {
        if (isLiked) {
            likeCount--

            // diminuer le total de likes
            totalLikes--
            iconLike.style.color = ''
        } else {
            likeCount++

            // augmenter le total de likes
            totalLikes++;
            iconLike.style.color = 'blue'
        }
        isLiked = !isLiked

        // mettre à jour le contenu du texte
        likeText.textContent = likeCount

        userPrice.textContent = `${totalLikes} ♥ ${photographerData.price} € / jour`
    })
}
