import {modalMediaDisplay} from "../utils/modalMediaDisplay.js"
import {handleLikesMedias} from "../utils/handleLikesMedias.js"

export class VideoType {
    constructor(media, mediaFolder, photographersImages) {
        this.VideoType(media, mediaFolder, photographersImages)
    }

    VideoType(media, mediaFolder, photographersImages) {
        const article = document.createElement("article")
        article.classList.add("card")

        const divMedia = document.createElement("div")
        const divInfos = document.createElement("div")

        const buttonMedia = document.createElement("a")
        buttonMedia.href = "#"

        const videoElement = document.createElement("video")
        const videoInfos = document.createElement("p")
        const videoLikes = document.createElement("span")
        const dateMedia = document.createElement("span")

        const likeCount = media.likes

        videoElement.src = `${mediaFolder}/${media.video}`
        videoElement.classList.add('file-media-grid')
        videoElement.controls = false

        divMedia.classList.add('divMediaRelative')
        dateMedia.classList.add('dateMediaAbsolute')
        dateMedia.textContent = media.date

        const iconLike = document.createElement("i")
        iconLike.classList.add('fa-solid', 'fa-heart')

        videoInfos.textContent = media.title
        videoLikes.setAttribute("id", "likeBtn")

        divInfos.classList.add('media-infos-div')

        modalMediaDisplay(buttonMedia, videoElement, media, mediaList)

        // Use the extracted function to handle likes
        handleLikesMedias(videoLikes, likeCount)

        photographersImages.appendChild(article).appendChild(divMedia).appendChild(videoElement)
        photographersImages.appendChild(article).appendChild(divMedia).appendChild(dateMedia)
        photographersImages.appendChild(article).appendChild(divInfos).appendChild(videoInfos)
        photographersImages.appendChild(article).appendChild(divInfos).appendChild(videoLikes)

        return videoElement
    }
}