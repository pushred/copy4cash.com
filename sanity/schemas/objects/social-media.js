import { camelCase, upperFirst } from 'lodash'
import { ChatCentered } from 'phosphor-react'

export default {
  type: 'object',
  name: 'social-media',
  title: 'Social Media',
  icon: ChatCentered,
  fields: [
    {
      name: 'posts',
      type: 'array',
      of: [
        {
          name: 'tweet',
          type: 'tweet',
        },
        {
          name: 'instagram',
          type: 'instagram',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      author0: 'posts.0.embed.author',
      author1: 'posts.1.embed.author',
      author2: 'posts.2.embed.author',
      author3: 'posts.3.embed.author',
      author4: 'posts.4.embed.author',
      author5: 'posts.5.embed.author',
      author6: 'posts.6.embed.author',
    },
    prepare: ({
      author0,
      author1,
      author2,
      author3,
      author4,
      author5,
      author6,
    }) => {
      return {
        title: 'Social Media',
        subtitle: [
          author0,
          author1,
          author2,
          author3,
          author4,
          author5,
          author6,
        ]
          .filter(Boolean)
          .map((v) => upperFirst(camelCase(v)))
          .join(', '),
      }
    },
  },
}
