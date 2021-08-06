import { Trophy } from 'phosphor-react'

export default {
  type: 'object',
  name: 'recognition',
  icon: Trophy,
  fields: [
    {
      type: 'string',
      name: 'event',
    },
    {
      type: 'array',
      name: 'awards',
      of: [
        {
          name: 'award',
          type: 'string',
        },
      ],
    },
  ],
}
