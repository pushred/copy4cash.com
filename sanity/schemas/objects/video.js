import { YoutubeLogo } from 'phosphor-react'

export default {
  type: 'object',
  name: 'video',
  title: 'Vimeo Video',
  icon: YoutubeLogo,
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      type: 'boolean',
      name: 'showHeading',
      title: 'Show Heading',
      initialValue: true,
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'Appears over video',
    },
    {
      name: 'video',
      type: 'vimeo-video',
    },
  ],
}
