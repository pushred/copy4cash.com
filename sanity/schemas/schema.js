// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import project from './documents/project'

import gallery from './objects/gallery'
import video from './objects/video'

export default createSchema({
  name: 'copy4cash',
  types: schemaTypes.concat([gallery, project, video]),
})
