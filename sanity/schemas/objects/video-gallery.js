import { SquaresFour } from 'phosphor-react'

export default {
  type: 'object',
  name: 'video-gallery',
  title: 'Video Gallery',
  icon: SquaresFour,
  fields: [
    {
      type: 'string',
      name: 'heading',
      title: 'Heading',
    },
    {
      name: 'videos',
      type: 'array',
      of: [
        {
          type: 'video',
          name: 'video',
        },
      ],
    },
  ],
}
