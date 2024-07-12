export function mediaTypeFormat(modal, i) {
    // condition pour afficher images ou video
    if (mediaList[i].image) {
        const imgDisplayed = document.createElement("img")
        imgDisplayed.classList.add("modal-content")
        imgDisplayed.src = `${mediaFolder}/${mediaList[i].image}`
        modal.appendChild(imgDisplayed)
    } else if (mediaList[i].video) {
        const videoDisplayed = document.createElement("video")
        const sourceVideo = document.createElement("source")
        videoDisplayed.classList.add("modal-content")
        sourceVideo.src = `${mediaFolder}/${mediaList[i].video}`
        videoDisplayed.controls = true
        modal.appendChild(videoDisplayed).appendChild(sourceVideo)
    }
}