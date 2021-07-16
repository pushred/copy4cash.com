import { Image } from 'phosphor-react'

export default {
  type: 'object',
  name: 'gallery',
  title: 'Gallery',
  icon: Image,
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
