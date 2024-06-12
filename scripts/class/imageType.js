export class ImageType {
    constructor(media, mediaFolder, photographersImages) {
        this.createImageElement(media, mediaFolder, photographersImages)
    }

    createImageElement(media, mediaFolder, photographersImages) {
        const article = document.createElement("article")
        const imgElement = document.createElement("img")
        const divInfos = document.createElement("div")
        const imgName = document.createElement("p")
        const imgLikes = document.createElement("span")

        imgElement.src = `${mediaFolder}/${media.image}`
        imgElement.classList.add('file-media-grid')

        imgName.textContent = media.title
        imgLikes.textContent = media.likes
        divInfos.classList.add('media-infos-div')

        photographersImages.appendChild(article).appendChild(imgElement)
        photographersImages.appendChild(article).appendChild(divInfos).appendChild(imgName)
        photographersImages.appendChild(article).appendChild(divInfos).appendChild(imgLikes)
        return article
    }
}