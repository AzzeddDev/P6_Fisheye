

export class PhotographerHeader {
    constructor(photographerData, photographerNodeList, mediaList) {
        this.PhotographerHeader(photographerData, photographerNodeList, mediaList)
    }

    PhotographerHeader(photographerData, photographerNodeList, mediaList) {
        // créer une variable pour le recup le lien de la photo de profile de l'utilisateur
        const picture = `assets/photographers/id_photos/${photographerData.portrait}`

        // créer un h2 comme nom du photographe
        const userName = document.createElement( 'h2')
        userName.textContent = photographerData.name

        // créer un p comme Lieu de naissance
        const userCountry = document.createElement( 'p')
        userCountry.textContent = photographerData.city + ", " + photographerData.country
        userCountry.classList.add('photographHeader__userInfos__userCountry')

        // créer un p comme Tagline
        const userQuote = document.createElement( 'p')
        userQuote.textContent = photographerData.tagline
        userQuote.classList.add('photographHeader__userInfos__userQuote')

        // créer l'element photo de profile
        const userPicture = document.createElement( 'img')
        userPicture.setAttribute("src", picture)
        userPicture.classList.add('photographHeader__userPicture')

        // ajouter alt sur la photo de profile
        userPicture.setAttribute("alt", photographerData.name)

        // appendChild le nom et la photo de profile
        photographerNodeList[0].appendChild(userName)
        photographerNodeList[0].appendChild(userCountry)
        photographerNodeList[0].appendChild(userQuote)
        photographerNodeList[1].appendChild(userPicture)
    }
}