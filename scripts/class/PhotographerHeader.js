export class PhotographerHeader {
    constructor(photographerData, photographerNodeList) {
        this.PhotographerHeader(photographerData, photographerNodeList)
    }

    PhotographerHeader(photographerData, photographerNodeList) {
        // créer une variable pour le recup le lien de la photo de profile de l'utilisateur
        const picture = `assets/photographers/id_photos/${photographerData.portrait}`

        // créer un h2 comme nom du photographe
        const userName = document.createElement( 'h2')
        userName.textContent = photographerData.name

        // créer un p comme Lieu de naissance
        const userCountry = document.createElement( 'p')
        userCountry.textContent = photographerData.city + ", " + photographerData.country

        // créer un p comme Tagline
        const userQuote = document.createElement( 'p')
        userQuote.textContent = photographerData.tagline

        // créer l'element photo de profile
        const userPicture = document.createElement( 'img')
        userPicture.setAttribute("src", picture)
        userPicture.classList.add('user-picture')

        // créer l'element user price
        const userPrice = document.createElement("span")
        userPrice.textContent = photographerData.price + ` € / jour`

        // appendChild le nom et la photo de profile
        photographerNodeList[0].appendChild(userName)
        photographerNodeList[0].appendChild(userCountry)
        photographerNodeList[0].appendChild(userQuote)
        photographerNodeList[1].appendChild(userPicture)
        photographerNodeList[2].appendChild(userPrice)
    }
}