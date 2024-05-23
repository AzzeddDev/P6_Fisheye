async function getPhotographers() {
    // fetch data
    const reponse = await fetch('data/photographers.json');
    const photographers = await reponse.json();

    // et bien retourner le tableau photographers seulement une fois récupéré
    return (photographers);
}