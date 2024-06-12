import {MediaFactory} from "../factory/mediaFactory.js";

export class PhotographerMedias {
    constructor(photographerData, mediaList, photographersImages) {
        this.renderMedias(photographerData, mediaList, photographersImages)
    }

    renderMedias(photographerData, mediaList, photographersImages) {

        // selectionner le prénom de l'utilisateur et le transformer en lowercase
        const photographerFirstName = photographerData.name.split(' ')[0].toLowerCase().replace("-", "_")

        // créer le nom du dossier au nom de l'utilisatuer ou sont stocker les images
        const mediaFolder = `assets/images/${photographerFirstName}`

        mediaList.forEach(media => {
            new MediaFactory(media, mediaFolder, photographersImages)
        })
    }
}