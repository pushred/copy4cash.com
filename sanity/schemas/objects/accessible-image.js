import { Image } from 'phosphor-react'

export default {
  type: 'object',
  name: 'accessible-image',
  title: 'Image',
  icon: Image,
  fields: [
    {
      type: 'image',
      name: 'image',
    },
    {
      type: 'string',
      title: 'Description',
      description: 'Text for search engines and non-sighted visitors',
      name: 'description',
    },
  ],
}
