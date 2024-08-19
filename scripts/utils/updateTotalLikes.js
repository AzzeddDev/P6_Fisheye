export function updateTotalLikes(mediaList) {
    const totalLikes = mediaList.reduce((sum, media) => sum + media.likes, 0) // Calculez le total des likes

    // Recherchez l'élément userPrice à mettre à jour
    const userPriceAndLikes = document.getElementById("userPrice")
    let userPrice = userPriceAndLikes.querySelector("span")

    if (!userPrice) {
        userPrice = document.createElement("span");
        userPriceAndLikes.appendChild(userPrice)
    }

    // Mettez à jour le texte de l'élément userPrice
    const photographerPrice = window.photographerData?.price || 0;
    userPrice.textContent = `${totalLikes} ♥ ${photographerPrice} € / jour`
}
