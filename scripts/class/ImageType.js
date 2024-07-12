import {modalMediaDisplay} from "../utils/modalMediaDisplay.js"

export class ImageType {
    constructor(media, mediaFolder, photographersImages) {
        this.ImageType(media, mediaFolder, photographersImages)
    }

    ImageType(media, mediaFolder, photographersImages) {
        // créer article + div
        const article = document.createElement("article")
        const divMedia = document.createElement("div")
        const divInfos = document.createElement("div")

        const buttonMedia = document.createElement("a")
        buttonMedia.href = "#"

        // créer les elements du Media
        const imgElement = document.createElement("img")
        const imgName = document.createElement("p")
        const imgLikes = document.createElement("span")
        const dateMedia = document.createElement("span")

        //
        imgElement.src = `${mediaFolder}/${media.image}`
        imgElement.classList.add('file-media-grid')

        //
        imgName.textContent = media.title
        imgLikes.textContent = media.likes
        divInfos.classList.add('media-infos-div')

        //
        divMedia.classList.add('divMediaRelative')
        dateMedia.classList.add('dateMediaAbsolute')
        dateMedia.textContent = media.date

        modalMediaDisplay(buttonMedia, imgElement, media, mediaList)

        //
        photographersImages.appendChild(article).appendChild(divMedia).appendChild(buttonMedia).appendChild(imgElement)
        photographersImages.appendChild(article).appendChild(divMedia).appendChild(dateMedia)
        photographersImages.appendChild(article).appendChild(divInfos).appendChild(imgName)
        photographersImages.appendChild(article).appendChild(divInfos).appendChild(imgLikes)

        //
        return article
    }
}