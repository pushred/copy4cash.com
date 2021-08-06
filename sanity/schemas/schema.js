// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import project from './documents/project'

import carousel from './objects/carousel'
import link from './objects/link'
import imageGallery from './objects/image-gallery'
import videoGallery from './objects/video-gallery'
import heading from './objects/heading'
import instagram from './objects/instagram'
import recognition from './objects/recognition'
import tweet from './objects/tweet'
import video from './objects/video'

export default createSchema({
  name: 'copy4cash',
  types: schemaTypes.concat([
    carousel,
    heading,
    imageGallery,
    instagram,
    link,
    project,
    recognition,
    tweet,
    video,
    videoGallery,
  ]),
})
