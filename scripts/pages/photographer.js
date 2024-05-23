//Mettre le code JavaScript lié à la page photographer.html
let url = location.href.split('?')

// On récupère les variables depuis l'URL
const userNameNotClean = url[url.length -6]
const idImg = url[url.length -5]
const city = url[url.length -4]
const country = url[url.length -3]
const taglineNotClean = url[url.length -2]
const price = url[url.length -1]

// On clean les variables avec des espaces
const userName = userNameNotClean.replace(/%20/g, ' ');
const tagline = taglineNotClean.replace(/%20/g, ' ');

// On créer le lien repo de la photo de profile
const pictureProfile = `assets/photographers/id_photos/${idImg}`;

// Fonction qui renvoie que les données utilisateur ( type=text )
function userInfos() {
    // Créer l'élément div
    const div = document.createElement('div');
    div.classList.add('user-info');

    // Créer l'élément h2 = Nom de l'utilisateur
    const h2_UserName = document.createElement('h2');
    h2_UserName.textContent = userName;

    // Créer l'élément h3 = région + pays
    const h3_country = document.createElement('h3');
    h3_country.textContent = `${city}, ${country}`;

    // Créer l'élément p = tagline
    const p_tagline = document.createElement('p');
    p_tagline.textContent = tagline;

    // Créer l'élément span = price
    const span_price = document.createElement('span');
    span_price.textContent = price;

    // Ajouter les élément à la div
    div.appendChild(h2_UserName);
    div.appendChild(h3_country);
    div.appendChild(p_tagline);

    // Retourner la div complète
    return div;
}

// fonction qui renvoie la photo de profile de la personne
function userPicture() {
    // Créer l'élément div
    const div = document.createElement('div');

    // Créer l'élément img
    const img = document.createElement('img');
    img.setAttribute("src", pictureProfile);
    img.classList.add('user-picture');

    // Ajouter l'élément img à la div
    div.appendChild(img);

    // Retourner la div complète
    return div;
}







// Récuperer le prénom d'utilisateur
let userNameFull = userName.split(' ')
const userNickNameCleaned = userNameFull[userNameFull.length -2]

// Rendre le prénom en Lowercase
const userNickNameLowerCase = userNickNameCleaned.toLowerCase()

// Créer le lien repo du dossier images du photographe
const pictureFolder = `assets/images/${userNickNameLowerCase}`;
console.log(pictureFolder)













async function displayUserInfos(){
    // Sélectionner la div.user_infos
    const photographerInfos = document.querySelector(".user_infos");
    photographerInfos.appendChild(userInfos());

    // Sélectionner la div.user_picture
    const photographerPicture = document.querySelector(".user_picture");
    photographerPicture.appendChild(userPicture())
}

displayUserInfos()




















// Another way of getting a URL ID
let id = new URLSearchParams(window.location.search).get("id");
// console.log(id)

