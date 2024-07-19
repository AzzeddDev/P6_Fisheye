export async function getPhotographerInfos() {

    try {
        const response = await fetch('data/photographers.json')
        const photographers = await response.json()

        return (photographers)
    } catch (error) {
        console.error("Error fetching photographer info:", error);
    }

}