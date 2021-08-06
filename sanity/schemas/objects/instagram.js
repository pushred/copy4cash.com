import { InstagramLogo } from 'phosphor-react'
import InstagramInput from '../../components/InstagramInput'

export default {
  type: 'object',
  name: 'instagram',
  title: 'Instagram',
  icon: InstagramLogo,
  fields: [
    {
      name: 'embed',
      type: 'object',
      description: 'Copy code from the Embed option on Instagram.com',
      fields: [
        {
          name: 'author',
          type: 'string',
          hidden: true,
        },
        {
          name: 'embedHtml',
          type: 'string',
        },
      ],
      inputComponent: InstagramInput,
    },
  ],
  preview: {
    select: {
      title: 'embed.author',
    },
  },
}
