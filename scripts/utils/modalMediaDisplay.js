export function modalMediaDisplay() {
    // recuperer le modal
    const modal = document.getElementById("gallerie")

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