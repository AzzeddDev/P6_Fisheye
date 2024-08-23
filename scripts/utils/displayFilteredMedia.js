import { MediaFactory } from "../factory/mediaFactory.js"
import { mediaTypeFormat } from "./mediaTypeFormat.js"

// fonction pour afficher les médias filtrés
export function displayFilteredMedia(mediaList, mediaFolder, photographersImages, type) {
    // trier la liste des médias si le type est 'popularité'
    if (type === 'popularité') {
        mediaList = mediaList.sort((a, b) => b.likes - a.likes)
    }

    // effacer le contenu actuel
    photographersImages.innerHTML = ''

    // boucler à travers les médias et afficher les éléments
    mediaList.forEach(media => {
        new MediaFactory(media, mediaFolder, photographersImages)
    })

    const mediaListChildren = photographersImages.children

    // récupérer le modal et les boutons prev & next
    const modal = document.getElementById("gallerie")

    // supprimer les éléments de média précédemment ajoutés
    const cleanModalChild = () => {
        const existingMedia = modal.querySelector('.modal-content')
        const existingCaption = modal.querySelector('#caption')
        if (existingMedia) {
            modal.removeChild(existingMedia)
            modal.removeChild(existingCaption)
        }
    }

    // getElements pour les bouton prev et next
    const prevBtn = document.getElementById("prevBtn")
    const nextBtn = document.getElementById("nextBtn")

    // reset media à zéro
    let mediaIndex = 0

    // boucle pour afficher le bon média
    for (let i = 0; i < mediaListChildren.length; i++) {
        const firstChildNode = mediaListChildren[i].childNodes[0]

        firstChildNode.addEventListener('click', (event) => {
            event.preventDefault()

            // supprimer les éléments de média précédemment ajoutés
            cleanModalChild()

            mediaTypeFormat({
                i,
                mediaFolder,
                modal,
                mediaList,
            })
            modal.style.display = "block"

            mediaIndex = i
        })
    }

    // afficher le média // supprimer l'ancien et afficher le nouveau
    function showMedia(index) {
        // supprimer les éléments de média précédemment ajoutés
        const existingMedia = modal.querySelector('.modal-content')
        const existingCaption = modal.querySelector('#caption')
        if (existingMedia) {
            modal.removeChild(existingMedia)
            modal.removeChild(existingCaption)
        }

        mediaTypeFormat({ modal, i: index, mediaFolder, mediaList })
    }

    // goToPrevious
    const goToPrevious = () => {
        mediaIndex = (mediaIndex > 0) ? mediaIndex - 1 : mediaList.length - 1
        showMedia(mediaIndex)
    }

    // goToNext
    const goToNext = () => {
        mediaIndex = (mediaIndex < mediaList.length - 1) ? mediaIndex + 1 : 0
        showMedia(mediaIndex)
    }

    // click Events pour les boutons next et prev du modal
    prevBtn.addEventListener('click', () => {
        goToPrevious()
    })

    nextBtn.addEventListener('click', () => {
        goToNext()
    })

    // event pour contrôler le modal avec les touches du clavier
    document.addEventListener('keydown', (event) => {
        if (modal.style.display === "block") {
            if (event.key === 'ArrowLeft') {
                goToPrevious()
            } else if (event.key === 'ArrowRight') {
                goToNext()
            }
        }
    })

    // Fonction pour fermer le modal
    function closeModal() {
        modal.style.display = "none"
        cleanModalChild()
    }

// Événement pour fermer le modal avec la touche Échap
    document.addEventListener('keydown', (event) => {
        if (modal.style.display === "block" && event.key === "Escape") {
            closeModal()
        }
    });

}
