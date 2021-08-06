import { YoutubeLogo } from 'phosphor-react'
import VimeoInput from '../../components/VimeoInput'

export default {
  type: 'object',
  name: 'video',
  title: 'Vimeo Video',
  icon: YoutubeLogo,
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      type: 'boolean',
      name: 'showHeading',
      title: 'Show Heading',
      initialValue: true,
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'Appears over video',
    },
    {
      name: 'video',
      type: 'object',
      title: 'Vimeo Video',
      fields: [
        {
          name: 'url',
          type: 'url',
          title: 'URL',
        },
        {
          name: 'vimeoId',
          type: 'string',
          hidden: true,
        },
        {
          name: 'embedHtml',
          type: 'string',
          hidden: true,
        },
        {
          name: 'title',
          type: 'string',
          hidden: true,
        },
        {
          name: 'description',
          type: 'string',
          hidden: true,
        },
        {
          name: 'width',
          type: 'number',
          hidden: true,
        },
        {
          name: 'height',
          type: 'number',
          hidden: true,
        },
      ],
      inputComponent: VimeoInput,
    },
  ],
}
