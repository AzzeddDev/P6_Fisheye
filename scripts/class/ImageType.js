import {modalMediaDisplay} from "../utils/modalMediaDisplay.js"
import {handleLikesMedias} from "../utils/handleLikesMedias.js"

export class ImageType {
    constructor(media, mediaFolder, photographersImages) {
        this.ImageType(media, mediaFolder, photographersImages)
    }

    ImageType(media, mediaFolder, photographersImages) {
        const article = document.createElement("article")
        article.classList.add("card")

        const divMedia = document.createElement("div")
        const divInfos = document.createElement("div")

        const buttonMedia = document.createElement("a")
        buttonMedia.href = "#"

        const imgElement = document.createElement("img")
        const imgName = document.createElement("p")
        const imgLikes = document.createElement("span")
        const dateMedia = document.createElement("span")

        const likeCount = media.likes

        imgElement.src = `${mediaFolder}/${media.image}`
        imgElement.classList.add('file-media-grid')

        const iconLike = document.createElement("i")
        iconLike.classList.add('fa-solid', 'fa-heart')

        imgName.textContent = media.title
        imgLikes.setAttribute("id", "likeBtn")

        divInfos.classList.add('media-infos-div')

        divMedia.classList.add('divMediaRelative')
        dateMedia.classList.add('dateMediaAbsolute')
        dateMedia.textContent = media.date

        modalMediaDisplay(buttonMedia, imgElement, media, mediaList)

        // Use the extracted function to handle likes
        handleLikesMedias(imgLikes, likeCount)

        photographersImages.appendChild(article).appendChild(divMedia).appendChild(imgElement)
        photographersImages.appendChild(article).appendChild(divMedia).appendChild(dateMedia)
        photographersImages.appendChild(article).appendChild(divInfos).appendChild(imgName)
        photographersImages.appendChild(article).appendChild(divInfos).appendChild(imgLikes)

        return article
    }
}