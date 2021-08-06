import { Cards } from 'phosphor-react'

export default {
  type: 'object',
  name: 'carousel',
  title: 'Image Carousel',
  icon: Cards,
  fields: [
    {
      type: 'string',
      name: 'heading',
      title: 'Heading',
    },
    {
      name: 'slides',
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
