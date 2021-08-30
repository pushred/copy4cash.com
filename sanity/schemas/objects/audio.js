import { SpeakerHigh } from 'phosphor-react'

export default {
  type: 'object',
  name: 'audio',
  title: 'Audio',
  icon: SpeakerHigh,
  fields: [
    {
      type: 'string',
      name: 'caption',
      title: 'Caption',
    },
    {
      type: 'file',
      name: 'file',
      title: 'Audio File',
      accept: '.mp4,.m4a',
    },
  ],
}
