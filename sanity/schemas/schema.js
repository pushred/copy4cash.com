// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import project from './documents/project'

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

export default createSchema({
  name: 'copy4cash',
  types: schemaTypes.concat([
    audio,
    brand,
    event,
    heading,
    imageCarousel,
    imageGallery,
    instagram,
    link,
    press,
    project,
    recognition,
    socialMedia,
    tweet,
    video,
    videoCarousel,
    videoGallery,
  ]),
})
