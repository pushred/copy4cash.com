// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import hire from './documents/hire'
import home from './documents/home'
import metadata from './documents/metadata'
import project from './documents/project'
import stylizedText from './documents/stylized-text'

import audio from './objects/audio'
import brand from './objects/brand'
import event from './objects/event'
import link from './objects/link'
import imageCarousel from './objects/image-carousel'
import imageGallery from './objects/image-gallery'
import heading from './objects/heading'
import instagram from './objects/instagram'
import press from './objects/press'
import recognition from './objects/recognition'
import socialMedia from './objects/social-media'
import tweet from './objects/tweet'
import video from './objects/video'
import videoCarousel from './objects/video-carousel'
import videoGallery from './objects/video-gallery'
import vimeoVideo from './objects/vimeo-video'

export default createSchema({
  name: 'copy4cash',
  types: schemaTypes.concat([
    audio,
    brand,
    event,
    heading,
    hire,
    home,
    imageCarousel,
    imageGallery,
    instagram,
    link,
    metadata,
    press,
    project,
    recognition,
    socialMedia,
    stylizedText,
    tweet,
    video,
    videoCarousel,
    videoGallery,
    vimeoVideo,
  ]),
})
