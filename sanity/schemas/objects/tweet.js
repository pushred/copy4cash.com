import { TwitterLogo } from 'phosphor-react'
import TweetInput from '../../components/TweetInput'

export default {
  type: 'object',
  name: 'tweet',
  title: 'Tweet',
  icon: TwitterLogo,
  fields: [
    {
      name: 'embed',
      type: 'object',
      description: 'Copy code from the Embed Tweet option on Twitter.com',
      fields: [
        {
          name: 'author',
          type: 'string',
          hidden: true,
        },
        {
          name: 'quoteHtml',
          type: 'string',
          hidden: true,
        },
        {
          name: 'embedHtml',
          type: 'string',
        },
      ],
      inputComponent: TweetInput,
    },
  ],
  preview: {
    select: {
      title: 'embed.author',
    },
  },
}
