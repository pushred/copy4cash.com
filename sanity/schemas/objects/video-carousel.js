import { Cards } from 'phosphor-react'

export default {
  type: 'object',
  name: 'video-carousel',
  title: 'Video Carousel',
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
