// Function template photographer pour index.html
function photographerTemplate(data) {
    // fetch data nécessaire de l'utilisateur
    const { name, portrait, city, country, tagline, price } = data;

    // Créer la variable picture pour la photo de profile
    const picture = `assets/photographers/id_photos/${portrait}`;

    // Créer l'URL qui renvoie vers la template de photographer.html
    const profile = `photographer.html?${name}?${portrait}?${city}?${country}?${tagline}?${price}`;

    // Creation de la fonction qui recupere et qui renvoies les données
    function getUserCardDOM(qualifiedName, value) {
        const article = document.createElement( 'article' );
        article.setAttribute('class', 'userTemplate');

        //
        const userBtnURL = document.createElement('a');
        userBtnURL.setAttribute("href", profile);

        //
        const userPicture = document.createElement( 'img');
        userPicture.setAttribute("src", picture);
        userPicture.classList.add('user-picture');

        //
        const userName = document.createElement( 'h2');
        userName.textContent = name;

        //
        const userCountry = document.createElement('div');
        userCountry.textContent = `${city}, ${country}`;

        //
        const userTagline = document.createElement( 'siv');
        userTagline.textContent = tagline;

        //
        const userPrice = document.createElement( 'div');
        userPrice.textContent = `${price}/jour`;

        //
        article.appendChild(userBtnURL).appendChild(userPicture);
        article.appendChild(userBtnURL).appendChild(userName);
        article.appendChild(userCountry);
        article.appendChild(userTagline);
        article.appendChild(userPrice);

        return (article);
    }

    return { name, picture, profile, getUserCardDOM }
}