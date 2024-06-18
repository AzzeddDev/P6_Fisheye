import {ImageType} from "../class/ImageType.js"
import {VideoType} from "../class/VideoType.js"

export class MediaFactory {
    constructor(media, mediaFolder, photographersImages) {
        if (media.image) {
            this.Image(media, mediaFolder, photographersImages)
        } else if (media.video) {
            this.Video(media, mediaFolder, photographersImages)
        }
    }

    // methode pour Image
    Image(media, mediaFolder, photographersImages) {
        // créer une nouvelle instance de ImageType
        return new ImageType(media, mediaFolder, photographersImages)
    }

    // methode pour Video
    Video(media, mediaFolder, photographersImages) {
        // créer une nouvelle instance de VideoType
        return new VideoType(media, mediaFolder, photographersImages)
    }
}