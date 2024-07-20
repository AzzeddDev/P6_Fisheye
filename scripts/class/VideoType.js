import {modalMediaDisplay} from "../utils/modalMediaDisplay.js"

export class VideoType {
    constructor(media, mediaFolder, photographersImages) {
        this.VideoType(media, mediaFolder, photographersImages)
    }

    VideoType(media, mediaFolder, photographersImages) {
        // créer article + div
        const article = document.createElement("article")
        article.classList.add("card")

        const divMedia = document.createElement("div")
        const divInfos = document.createElement("div")

        const buttonMedia = document.createElement("a")
        buttonMedia.href = "#"

        // créer les elements du Media
        const videoElement = document.createElement("video")
        const videoInfos = document.createElement("p")
        const videoLikes = document.createElement("span")
        const dateMedia = document.createElement("span")

        // definir les likes initiaux et le statut "j'aime"
        let isLiked = false
        let likeCount = media.likes

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

        modalMediaDisplay(buttonMedia, videoElement, media, mediaList)

        // ajouter un addEventListener a imgLikes pour updated le nombre de likes
        videoLikes.addEventListener('click', () => {
            if (isLiked) {
                likeCount--
            } else {
                likeCount++
            }
            isLiked = !isLiked
            videoLikes.textContent = likeCount
        })

        //
        photographersImages.appendChild(article).appendChild(divMedia).appendChild(buttonMedia).appendChild(videoElement)
        photographersImages.appendChild(article).appendChild(divMedia).appendChild(dateMedia)
        photographersImages.appendChild(article).appendChild(divInfos).appendChild(videoInfos)
        photographersImages.appendChild(article).appendChild(divInfos).appendChild(videoLikes)

        //
        return videoElement
    }
}