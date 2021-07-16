import { YoutubeLogo } from 'phosphor-react'

export default {
  type: 'object',
  name: 'video',
  title: 'Video',
  icon: YoutubeLogo,
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'vimeoUrl',
      type: 'url',
      title: 'Vimeo URL',
    },
  ],
}
