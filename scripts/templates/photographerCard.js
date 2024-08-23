// Function template photographer pour index.html
export function photographerCard(data) {
    // fetch data nécessaire de l'utilisateur
    const { id, name, portrait, city, country, tagline, price } = data

    // créer la variable picture pour la photo de profile
    const picture = `assets/photographers/id_photos/${portrait}`

    const profile = `photographer.html?id=${id}`

    // creation de la fonction qui recupere et qui renvoies les données
    function getUserCardDOM() {
        const article = document.createElement( 'article' )
        article.classList.add('userTemplate')

        //
        const userBtnURL = document.createElement('a')
        userBtnURL.setAttribute("href", profile)

        //
        const userPicture = document.createElement( 'img')
        userPicture.setAttribute("src", picture)
        userPicture.classList.add('userTemplate__picture')
        userPicture.setAttribute("alt", name)

        //
        const userName = document.createElement( 'h2')
        userName.textContent = name
        userName.classList.add('userTemplate__name')

        //
        const userCountry = document.createElement('div')
        userCountry.textContent = city + ", " + country
        userCountry.classList.add('userTemplate__country')

        //
        const userTagline = document.createElement( 'siv')
        userTagline.textContent = tagline
        userTagline.classList.add('userTemplate__tagline')

        //
        const userPrice = document.createElement( 'div')
        userPrice.textContent = price + ` /jour`
        userPrice.classList.add('userTemplate__price')

        //
        article.appendChild(userBtnURL).appendChild(userPicture)
        article.appendChild(userBtnURL).appendChild(userName)
        article.appendChild(userCountry)
        article.appendChild(userTagline)
        article.appendChild(userPrice)

        return (article)
    }

    return { name, picture, profile, getUserCardDOM }
}