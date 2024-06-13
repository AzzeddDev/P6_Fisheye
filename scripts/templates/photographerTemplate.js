import {PhotographerHeader} from "../class/photographerHeader.js";
import {PhotographerMedias} from "../class/photographerMedias.js";

// export class PhotographerTemplate {
//     constructor(photographerData, mediaList) {
//         this.createPhotographer(photographerData, mediaList)
//     }
//
//     createPhotographer (photographerData, mediaList) {
//         // Sélectionner les classes des div
//         const photographerNodeList = document.querySelectorAll(".user_infos, .user_picture, .photograph-price")
//
//         new PhotographerHeader (photographerData, photographerNodeList)
//         new PhotographerMedias (photographerData, mediaList)
//     }
// }

// Function template photographer pour index.html
// function photographerTemplate(data) {
//     // fetch data nécessaire de l'utilisateur
//     const { id, name, portrait, city, country, tagline, price } = data;
//
//     // Créer la variable picture pour la photo de profile
//     const picture = `assets/photographers/id_photos/${portrait}`;
//
//     // Créer l'URL qui renvoie vers la template de photographer.html
//     // const profile = `photographer.html?${name}?${portrait}?${city}?${country}?${tagline}?${price}`;
//
//     const profile = `photographer.html?id=${id}`;
//
//     // Creation de la fonction qui recupere et qui renvoies les données
//     function getUserCardDOM() {
//         const article = document.createElement( 'article' );
//         article.setAttribute('class', 'userTemplate');
//
//         //
//         const userBtnURL = document.createElement('a');
//         userBtnURL.setAttribute("href", profile);
//
//         //
//         const userPicture = document.createElement( 'img');
//         userPicture.setAttribute("src", picture);
//         userPicture.classList.add('user-picture');
//
//         //
//         const userName = document.createElement( 'h2');
//         userName.textContent = name;
//
//         //
//         const userCountry = document.createElement('div');
//         userCountry.textContent = city + ", " + country;
//
//         //
//         const userTagline = document.createElement( 'siv');
//         userTagline.textContent = tagline;
//
//         //
//         const userPrice = document.createElement( 'div');
//         userPrice.textContent = price + ` /jour`;
//
//         //
//         article.appendChild(userBtnURL).appendChild(userPicture);
//         article.appendChild(userBtnURL).appendChild(userName);
//         article.appendChild(userCountry);
//         article.appendChild(userTagline);
//         article.appendChild(userPrice);
//
//         return (article);
//     }
//
//     return { name, picture, profile, getUserCardDOM }
// }