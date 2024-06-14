import {ImageType} from "../class/imageType.js"
import {VideoType} from "../class/videoType.js"

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
        new ImageType(media, mediaFolder, photographersImages)
    }

    // methode pour Video
    Video(media, mediaFolder, photographersImages) {
        // créer une nouvelle instance de VideoType
        new VideoType(media, mediaFolder, photographersImages)
    }
}