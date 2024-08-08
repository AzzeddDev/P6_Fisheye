import { MediaFactory } from "../factory/mediaFactory.js"
import { mediaTypeFormat } from "./mediaTypeFormat.js"

// fonction pour afficher les médias filtrés
export function displayFilteredMedia(mediaList, mediaFolder, photographersImages) {
    // effacer le contenu actuel
    photographersImages.innerHTML = ''

    // boucler à travers les médias et afficher les éléments
    mediaList.forEach(media => {
        new MediaFactory(media, mediaFolder, photographersImages)
    })

    let mediaListChildren = photographersImages.children

    // recuperer le modal
    const modal = document.getElementById("gallerie")
    // const captionText = document.getElementById("caption")
    const captionText = document.createElement("div")
    captionText.setAttribute("id", "caption")
    const prevBtn = document.getElementById("prevBtn")
    const nextBtn = document.getElementById("nextBtn")

    let mediaIndex = 0

    for (let i = 0; i < mediaListChildren.length; i++) {
        let firstChildNode = mediaListChildren[i].childNodes[0]
        // console.log(firstChildNode)

        if (firstChildNode && firstChildNode.nodeType === Node.ELEMENT_NODE) {
            firstChildNode.addEventListener('click', (event) => {
                event.preventDefault()

                // supprimer les elements de media precedemment ajoutes
                const existingMedia = modal.querySelector('.modal-content')
                if (existingMedia) {
                    modal.removeChild(existingMedia)
                }

                mediaTypeFormat(modal, i)

                modal.style.display = "block"

                captionText.textContent = mediaList[i].title
                modal.appendChild(captionText)

                mediaIndex = i
            })
        }
    }

    function showMedia(index) {
        // supprimer les elements de media precedemment ajoutes
        const existingMedia = modal.querySelector('.modal-content')
        if (existingMedia) {
            modal.removeChild(existingMedia)
        }

        mediaTypeFormat(modal, index)
        captionText.textContent = mediaList[index].title
        modal.appendChild(captionText)
    }

    prevBtn.addEventListener('click', () => {
        mediaIndex = (mediaIndex > 0) ? mediaIndex - 1 : mediaList.length - 1
        showMedia(mediaIndex)
    })

    nextBtn.addEventListener('click', () => {
        mediaIndex = (mediaIndex < mediaList.length - 1) ? mediaIndex + 1 : 0
        showMedia(mediaIndex)
    })

    document.addEventListener('keydown', (event) => {
        if (modal.style.display === "block") {
            if (event.key === 'ArrowLeft') {
                mediaIndex = (mediaIndex > 0) ? mediaIndex - 1 : mediaList.length - 1
                showMedia(mediaIndex)
            } else if (event.key === 'ArrowRight') {
                mediaIndex = (mediaIndex < mediaList.length - 1) ? mediaIndex + 1 : 0
                showMedia(mediaIndex)
            }
        }
    })
}
