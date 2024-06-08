export class VideoType {
    constructor(media, mediaFolder, photographersImages) {
        const article = document.createElement("article")
        const divInfos = document.createElement("div")
        const videoElement = document.createElement("video")
        const videoInfos = document.createElement("p")
        const videoLikes = document.createElement("span")

        videoElement.src = `${mediaFolder}/${media.video}`
        videoElement.classList.add('file-media-grid')
        videoElement.controls = false

        videoInfos.textContent = media.title
        videoLikes.textContent = media.likes
        divInfos.classList.add('media-infos-div')

        photographersImages.appendChild(article).appendChild(videoElement)
        photographersImages.appendChild(article).appendChild(divInfos).appendChild(videoInfos)
        photographersImages.appendChild(article).appendChild(divInfos).appendChild(videoLikes)
        return videoElement
    }
}