import {MediaFactory} from "../factory/mediaFactory.js"
import {mediaTypeFormat} from "./mediaTypeFormat.js";

// fonction pour afficher les médias filtrés
export function displayFilteredMedia(mediaList, mediaFolder, photographersImages) {
    // effacer le contenu actuel
    photographersImages.innerHTML = ''

    // boucler à travers les médias et afficher les éléments
    mediaList.forEach(media => {
        new MediaFactory(media, mediaFolder, photographersImages)
    })

    let mediaListChildren = photographersImages.children
    // let mediaListChildrenNodesBtn = photographersImages.children[0].childNodes[0]
    // console.log(mediaListChildren)
    // console.log(mediaListChildrenNodesBtn)


    // recuperer le modal
    const modal = document.getElementById("gallerie")
    const captionText = document.getElementById("caption")
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

    prevBtn.addEventListener('click', () => {
        if (mediaIndex > 0) {mediaIndex--

            // supprimer les elements de media precedemment ajoutes
            const existingMedia = modal.querySelector('.modal-content')
            if (existingMedia) {
                modal.removeChild(existingMedia)
            }

            mediaTypeFormat(modal, mediaIndex)
            captionText.textContent = mediaList[mediaIndex].title
        }
    })

    nextBtn.addEventListener('click', () => {
        if (mediaIndex < mediaList.length - 1) {mediaIndex++

            // supprimer les elements de media precedemment ajoutes
            const existingMedia = modal.querySelector('.modal-content')
            if (existingMedia) {
                modal.removeChild(existingMedia)
            }

            mediaTypeFormat(modal, mediaIndex)
            captionText.textContent = mediaList[mediaIndex].title
        }
    })
}