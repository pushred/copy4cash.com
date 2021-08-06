// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import project from './documents/project'

import carousel from './objects/carousel'
import gallery from './objects/gallery'
import tweet from './objects/tweet'
import video from './objects/video'

export default createSchema({
  name: 'copy4cash',
  types: schemaTypes.concat([carousel, gallery, project, tweet, video]),
})
