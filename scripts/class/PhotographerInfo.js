import { PhotographerHeader } from "./PhotographerHeader.js"
import { PhotographerMedias } from "./PhotographerMedias.js"
import { displayFilteredMedia } from "../utils/displayFilteredMedia.js"
import { filterMedia } from "../utils/filterMedia.js"

export class PhotographerInfo {
    constructor(photographerData, mediaList, photographerNodeList, photographersImages) {
        this.Header(photographerData, photographerNodeList)
        this.Medias(photographerData, mediaList, displayFilteredMedia, filterMedia, photographersImages)
    }

    Header(photographerData, photographerNodeList) {
        return new PhotographerHeader(photographerData, photographerNodeList)
    }

    Medias(photographerData, mediaList, displayFilteredMedia, filterMedia, photographersImages) {
        return new PhotographerMedias(photographerData, mediaList, displayFilteredMedia, filterMedia, photographersImages)
    }

}