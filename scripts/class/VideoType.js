import {modalMediaDisplay} from "../utils/modalMediaDisplay.js"

export class VideoType {
    constructor(media, mediaFolder, photographersImages) {
        this.VideoType(media, mediaFolder, photographersImages)
    }

    VideoType(media, mediaFolder, photographersImages) {
        // créer article + div
        const article = document.createElement("article")
        const divMedia = document.createElement("div")
        const divInfos = document.createElement("div")

        const buttonMedia = document.createElement("a")
        buttonMedia.href = "#"

        // créer les elements du Media
        const videoElement = document.createElement("video")
        const videoInfos = document.createElement("p")
        const videoLikes = document.createElement("span")
        const dateMedia = document.createElement("span")

        //
        videoElement.src = `${mediaFolder}/${media.video}`
        videoElement.classList.add('file-media-grid')
        videoElement.controls = false

        //
        divMedia.classList.add('divMediaRelative')
        dateMedia.classList.add('dateMediaAbsolute')
        dateMedia.textContent = media.date

        //
        videoInfos.textContent = media.title
        videoLikes.textContent = media.likes
        divInfos.classList.add('media-infos-div')

        modalMediaDisplay(buttonMedia, videoElement, media)

        //
        photographersImages.appendChild(article).appendChild(divMedia).appendChild(buttonMedia).appendChild(videoElement)
        photographersImages.appendChild(article).appendChild(divMedia).appendChild(dateMedia)
        photographersImages.appendChild(article).appendChild(divInfos).appendChild(videoInfos)
        photographersImages.appendChild(article).appendChild(divInfos).appendChild(videoLikes)

        //
        return videoElement
    }
}