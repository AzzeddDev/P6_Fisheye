import {getPhotographerInfos} from "../api/api.js"
import {getUserIDFromURL} from "./getUserIDFromURL.js"

// variable globale pour garder une trace du nombre total de likes
let totalLikes = 0;

export async function handleLikesMedias(likeElement, initialLikes) {
    //
    const photographersData = await getPhotographerInfos()
    const userID = getUserIDFromURL()
    const photographerData = photographersData.photographers.find(p => p.id === parseInt(userID))
    //

    let isLiked = false
    let likeCount = initialLikes

    // mettre à jour le total global de Likes
    totalLikes += likeCount

    // créer un text node avoir le même nombre de likes
    const likeText = document.createTextNode(likeCount)

    //
    const iconLike = document.createElement("i")
    iconLike.classList.add('fa-solid', 'fa-heart')

    // ajoutez un text node et conservez l'icône existante
    likeElement.innerHTML = '' // effacer tout contenu existant
    likeElement.appendChild(likeText)
    likeElement.appendChild(iconLike) // assurez-vous que l'icône est ajoutée

    const userPriceAndLikes = document.getElementById("userPrice")

    // rechercher l'élément userPrice à mettre à jour
    let userPrice = userPriceAndLikes.querySelector("span")
    if (!userPrice) {
        userPrice = document.createElement("span")
        userPriceAndLikes.appendChild(userPrice)
    }

    // initialiser le contenu userPrice
    userPrice.textContent = `${totalLikes} ♥ ${photographerData.price} € / jour`


    likeElement.addEventListener('click', () => {
        if (isLiked) {
            likeCount--
            totalLikes-- // diminuer le total de likes
        } else {
            likeCount++
            totalLikes++ // augmenter le total de likes
        }
        isLiked = !isLiked
        likeText.textContent = likeCount // mettre à jour uniquement le contenu du texte

        // mettre à jour le contenu de l'élément userPrice
        userPrice.textContent = `${totalLikes} ♥ ${photographerData.price} € / jour`
    })
}