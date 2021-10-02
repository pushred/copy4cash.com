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
      type: 'boolean',
      name: 'showHeading',
      title: 'Show Heading',
      initialValue: true,
    },
    {
      type: 'number',
      name: 'columns',
      title: 'Columns',
      initialValue: 1,
      validation: (Rule) => [
        Rule.required().min(1).error('At least 1 column required'),
        Rule.required().max(8).error('Max. 8 supported columns'),
      ],
    },
    {
      type: 'boolean',
      name: 'gap',
      title: 'Space Between Grid Items',
      initialValue: true,
    },
    {
      type: 'string',
      name: 'spaceBottom',
      title: 'Space Below Gallery',
      options: {
        list: [
          {
            title: 'Default',
            value: 'default',
          },
          {
            title: 'Same as Grid Items',
            value: 'grid',
          },
          {
            title: 'None',
            value: 'none',
          },
        ],
      },
      initialValue: 'default',
    },
    {
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'description',
              title: 'Description',
              description:
                'Should describe the visual or write out copy to optimize for search engines',
              rows: 3,
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
