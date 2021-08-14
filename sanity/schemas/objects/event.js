import { Trophy } from 'phosphor-react'

export default {
  type: 'object',
  name: 'event',
  icon: Trophy,
  fields: [
    {
      name: 'logo',
      type: 'brand',
    },
    {
      type: 'array',
      name: 'awards',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
}
