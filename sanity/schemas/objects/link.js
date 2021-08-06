import { Link } from 'phosphor-react'

export default {
  type: 'object',
  name: 'link',
  icon: Link,
  fields: [
    {
      name: 'text',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
  ],
}
