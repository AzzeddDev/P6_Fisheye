// fonction pour récupérer l'ID de l'utilisateur à partir de l'URL
export function getUserIDFromURL() {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get('id')
}