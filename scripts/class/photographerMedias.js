export class PhotographerMedias {
    constructor(photographerData, mediaList, displayFilteredMedia, filterMedia, photographersImages) {
        this.renderMedias(photographerData, mediaList, displayFilteredMedia, filterMedia, photographersImages)
    }

    renderMedias(photographerData, mediaList, displayFilteredMedia, filterMedia, photographersImages) {

        // selectionner le prénom de l'utilisateur et le transformer en lowercase
        const photographerFirstName = photographerData.name.split(' ')[0].toLowerCase().replace("-", "_")

        // créer le nom du dossier au nom de l'utilisatuer ou sont stocker les images
        const mediaFolder = `assets/images/${photographerFirstName}`

        // Stocker la liste des médias pour filtrage
        window.mediaList = mediaList
        // console.log('Media List:', window.mediaList)

        window.mediaFolder = mediaFolder
        // console.log('Media List:', window.mediaList)

        window.photographersImages = photographersImages
        // console.log('Media List:', window.mediaList)

        // Afficher tous les médias initialement
        displayFilteredMedia(mediaList, mediaFolder, photographersImages)

        // Ajouter des écouteurs d'événements pour les boutons de filtre
        document.getElementById('filter-popilarite').addEventListener('click', () => filterMedia('popilarite'))
        document.getElementById('filter-date').addEventListener('click', () => filterMedia('date'))
        document.getElementById('filter-titre').addEventListener('click', () => filterMedia('titre'))
    }
}