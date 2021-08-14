import { Article } from 'phosphor-react'

export default {
  type: 'object',
  name: 'press',
  icon: Article,
  fields: [
    {
      name: 'logo',
      type: 'brand',
    },
    {
      name: 'articles',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'article',
          fields: [
            {
              name: 'title',
              type: 'string',
            },
            {
              name: 'link',
              type: 'url',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'logo',
    },
  },
}
