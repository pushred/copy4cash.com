import { camelCase, upperFirst } from 'lodash'
import { Trophy } from 'phosphor-react'

export default {
  type: 'object',
  name: 'recognition',
  icon: Trophy,
  fields: [
    {
      name: 'sources',
      type: 'array',
      of: [
        {
          type: 'event',
        },
        {
          type: 'press',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      source0: 'sources.0.logo',
      source1: 'sources.1.logo',
      source2: 'sources.2.logo',
      source3: 'sources.3.logo',
      source4: 'sources.4.logo',
      source5: 'sources.5.logo',
      source6: 'sources.6.logo',
    },
    prepare: ({
      source0,
      source1,
      source2,
      source3,
      source4,
      source5,
      source6,
    }) => {
      return {
        title: 'Recognition',
        subtitle: [
          source0,
          source1,
          source2,
          source3,
          source4,
          source5,
          source6,
        ]
          .filter(Boolean)
          .map((v) => upperFirst(camelCase(v)))
          .join(', '),
      }
    },
  },
}
