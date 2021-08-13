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
