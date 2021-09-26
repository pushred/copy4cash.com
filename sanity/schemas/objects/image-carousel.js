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
      type: 'boolean',
      name: 'showHeading',
      title: 'Show Heading',
      initialValue: true,
    },
    {
      name: 'slides',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              type: 'string',
              name: 'description',
              title: 'Description',
              description:
                'Should describe visual or write out copy to optimize for search engines',
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
  ],
}
