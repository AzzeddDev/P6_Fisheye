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

    Image(media, mediaFolder, photographersImages) {
        new ImageType(media, mediaFolder, photographersImages)
    }

    Video(media, mediaFolder, photographersImages) {
        new VideoType(media, mediaFolder, photographersImages)
    }
}