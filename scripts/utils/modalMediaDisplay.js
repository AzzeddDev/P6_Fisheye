export function modalMediaDisplay(buttonMedia, imgElement, media) {
    // recuperer le modal
    const modal = document.getElementById("gallerie")
    const captionText = document.getElementById("caption")
    const prevBtn = document.getElementById("prevBtn")
    const nextBtn = document.getElementById("nextBtn")



    // ajouter un addEventListener au buttonImg
    buttonMedia.addEventListener("click", (event) => {
        event.preventDefault()

        // supprimer les elements de media precedemment ajoutes
        const existingMedia = modal.querySelector('.modal-content')
        if (existingMedia) {
            modal.removeChild(existingMedia)
        }

        // condition pour afficher images ou video
        if (media.image) {
            const imgDisplayed = document.createElement("img")
            imgDisplayed.classList.add("modal-content")
            imgDisplayed.src = imgElement.src
            modal.appendChild(imgDisplayed)
        } else if (media.video) {
            const videoDisplayed = document.createElement("video")
            const sourceVideo = document.createElement("source")
            videoDisplayed.classList.add("modal-content")
            sourceVideo.src = `${mediaFolder}/${media.video}`
            videoDisplayed.controls = true
            modal.appendChild(videoDisplayed).appendChild(sourceVideo)
        }

        modal.style.display = "block"

        captionText.textContent = media.title
        modal.appendChild(captionText)
    })






    // recuperer le span X
    const span = document.getElementsByClassName("close")[0]

    // le modal ce ferme quand on clique sur le X
    span.onclick = function() {
        modal.style.display = "none"
    }

    // le modal ce ferme quand on clique sur l'arriere plan
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none"
        }
    }
}