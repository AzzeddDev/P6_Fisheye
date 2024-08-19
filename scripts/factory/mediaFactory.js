import {ImageType} from "../class/ImageType.js"
import {VideoType} from "../class/VideoType.js"

export class MediaFactory {
    constructor(media, mediaFolder, photographersImages) {
        if (!media){
            throw new Error('Media is not provided')
        }
        if (media.image) {
            this.createImage(media, mediaFolder, photographersImages)
            return;
        } 
        
        if (media.video) {
            this.createVideo(media, mediaFolder, photographersImages)
            return;
        }

    }

    // methode pour Image
    createImage(media, mediaFolder, photographersImages) {
        // créer une nouvelle instance de ImageType
        return new ImageType(media, mediaFolder, photographersImages)
    }

    // methode pour Video
    createVideo(media, mediaFolder, photographersImages) {
        // créer une nouvelle instance de VideoType
        return new VideoType(media, mediaFolder, photographersImages)
    }
}