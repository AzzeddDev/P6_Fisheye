import {getPhotographerInfos} from "../api/api.js"
import {photographerCard} from "../templates/photographerCard.js"

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section")

    photographers.forEach((photographer) => {
        const photographerModel = photographerCard(photographer)
        const userCardDOM = photographerModel.getUserCardDOM()
        photographersSection.appendChild(userCardDOM)
    })
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographerInfos()
    await displayData(photographers)
}

init()
