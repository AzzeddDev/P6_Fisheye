import {getPhotographerInfos} from "../api/api.js"
import {getUserIDFromURL} from "./getUserIDFromURL.js"

// Global variable to keep track of the total like count
let totalLikes = 0;

export async function handleLikesMedias(likeElement, initialLikes) {
    //
    const photographersData = await getPhotographerInfos()
    const userID = getUserIDFromURL()
    const photographerData = photographersData.photographers.find(p => p.id === parseInt(userID))
    //

    let isLiked = false
    let likeCount = initialLikes

    // Update the global totalLikes
    totalLikes += likeCount

    // Create a text node to hold the like count
    const likeText = document.createTextNode(likeCount)

    //
    const iconLike = document.createElement("i")
    iconLike.classList.add('fa-solid', 'fa-heart')

    // Append the text node and keep the existing icon
    likeElement.innerHTML = '' // Clear any existing content
    likeElement.appendChild(likeText)
    likeElement.appendChild(iconLike) // Ensure icon is appended

    const userPriceAndLikes = document.getElementById("userPrice")

    // Create or find the userPrice element to update
    let userPrice = userPriceAndLikes.querySelector("span")
    if (!userPrice) {
        userPrice = document.createElement("span")
        userPriceAndLikes.appendChild(userPrice)
    }

    // Initialize userPrice content
    userPrice.textContent = `${totalLikes} ♥ ${photographerData.price} € / jour`


    likeElement.addEventListener('click', () => {
        if (isLiked) {
            likeCount--
            totalLikes-- // Decrease the total likes
        } else {
            likeCount++
            totalLikes++ // Increase the total likes
        }
        isLiked = !isLiked
        likeText.textContent = likeCount // Update only the text content

        // Update the userPrice element content
        userPrice.textContent = `${totalLikes} ♥ ${photographerData.price} € / jour`
    })
}