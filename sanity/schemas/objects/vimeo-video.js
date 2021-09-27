import VimeoInput from '../../components/VimeoInput'

export default {
  type: 'object',
  name: 'vimeo-video',
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
}
