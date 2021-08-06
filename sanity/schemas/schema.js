// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import project from './documents/project'

import link from './objects/link'
import imageCarousel from './objects/image-carousel'
import imageGallery from './objects/image-gallery'
import heading from './objects/heading'
import instagram from './objects/instagram'
import recognition from './objects/recognition'
import tweet from './objects/tweet'
import video from './objects/video'
import videoCarousel from './objects/video-carousel'
import videoGallery from './objects/video-gallery'

export default createSchema({
  name: 'copy4cash',
  types: schemaTypes.concat([
    heading,
    imageCarousel,
    imageGallery,
    instagram,
    link,
    project,
    recognition,
    tweet,
    video,
    videoCarousel,
    videoGallery,
  ]),
})
