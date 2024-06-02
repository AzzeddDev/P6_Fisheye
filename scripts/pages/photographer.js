// Fonction pour récupérer l'ID de l'utilisateur à partir de l'URL
function getUserIDFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

async function displayPhotographerInfo() {
    const userID = getUserIDFromURL();

    if (userID) {
        const photographers = await getPhotographerInfos()

        if (photographers) {
            const photographer = photographers.photographers.find(p => p.id === parseInt(userID))

            const media = photographers.media.filter(m => m.photographerId === parseInt(userID))

            const picture = `assets/photographers/id_photos/${photographer.portrait}`

            if (photographer) {
                // selectionner les classes des div
                const photographersName = document.querySelector(".user_infos")
                const photographersPicture = document.querySelector(".user_picture")
                const photographersImages = document.querySelector(".photograph-images")

                // créer un h2 comme nom du photographe
                const userName = document.createElement( 'h2')
                userName.textContent = photographer.name

                // créer un p comme Lieu de naissance
                const userCountry = document.createElement( 'p')
                userCountry.textContent = photographer.city + ", " + photographer.country

                // créer un p comme Lieu de naissance
                const userQuote = document.createElement( 'p')
                userQuote.textContent = photographer.tagline

                // créer l'element photo de profile
                const userPicture = document.createElement( 'img');
                userPicture.setAttribute("src", picture)
                userPicture.classList.add('user-picture')

                // console.log(userPicture)

                // appendChild le nom et la photo de profile
                photographersName.appendChild(userName)
                photographersName.appendChild(userCountry)
                photographersName.appendChild(userQuote)
                photographersPicture.appendChild(userPicture)
                // console.log(photographer)

                // selectionner le prénom de l'utilisateur et le transformer en lowercase
                const photographerFirstName = photographer.name.split(' ')[0].toLowerCase().replace("-", "_")
                console.log(photographerFirstName)

                // créer le nom du dossier au nom de l'utilisatuer ou sont stocker les images
                const mediaFolder = `assets/images/${photographerFirstName}`

                // créer une boucle pour afficher les images
                // media.forEach(media => {
                //     const imgElement = document.createElement("img");
                //     imgElement.src = `${mediaFolder}/${media.image}`;
                //     imgElement.alt = `${media.title}`;
                //     imgElement.classList.add('user-picture')
                //     photographersImages.appendChild(imgElement);
                // });


                // mettre en Class - a faire
                media.forEach(media => {
                    if (media.image) {
                        const article = document.createElement("article")
                        const imgElement = document.createElement("img");
                        imgElement.src = `${mediaFolder}/${media.image}`;
                        imgElement.alt = `${media.title}`;
                        imgElement.classList.add('file-media-grid')
                        photographersImages.appendChild(article).appendChild(imgElement);
                    } else if (media.video) {
                        const article = document.createElement("article")
                        const videoElement = document.createElement("video");
                        videoElement.src = `${mediaFolder}/${media.video}`
                        videoElement.classList.add('file-media-grid')
                        videoElement.controls = false
                        photographersImages.appendChild(article).appendChild(videoElement);
                    }
                });

            } else {
                console.log(`Photographe avec l'ID ${userID} non trouvé.`);
            }
        } else {
            console.log('Impossible de récupérer les données des photographes.');
        }
    } else {
        console.log('ID utilisateur non trouvé dans l URL.');
    }
}


// Appeler la fonction pour afficher les informations du photographe
displayPhotographerInfo();

