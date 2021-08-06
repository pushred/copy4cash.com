import { SquaresFour } from 'phosphor-react'

export default {
  type: 'object',
  name: 'gallery',
  title: 'Image Gallery',
  icon: SquaresFour,
  fields: [
    {
      type: 'string',
      name: 'heading',
      title: 'Heading',
    },
    {
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'image',
          name: 'image',
        },
      ],
    },
  ],
}
