export function mediaTypeFormat({ modal, i, mediaList, mediaFolder}) {
    // condition pour afficher images ou video
    if (mediaList[i].image) {
        const imgDisplayed = document.createElement("img")
        const captionText = document.createElement("p")
        captionText.setAttribute("id", "caption")

        imgDisplayed.classList.add("modal-content")
        imgDisplayed.src = `${mediaFolder}/${mediaList[i].image}`

        // rajouter alt au img
        imgDisplayed.setAttribute("alt", mediaList[i].title)

        modal.appendChild(imgDisplayed)

        captionText.textContent = mediaList[i].title
        modal.appendChild(captionText)
    } else if (mediaList[i].video) {
        const videoDisplayed = document.createElement("video")
        const sourceVideo = document.createElement("source")
        const captionText = document.createElement("p")
        captionText.setAttribute("id", "caption")

        videoDisplayed.classList.add("modal-content")
        sourceVideo.src = `${mediaFolder}/${mediaList[i].video}`

        // rajouter alt au img
        videoDisplayed.setAttribute("alt", mediaList[i].title)

        videoDisplayed.controls = true
        modal.appendChild(videoDisplayed).appendChild(sourceVideo)

        captionText.textContent = mediaList[i].title
        modal.appendChild(captionText)
    }
}