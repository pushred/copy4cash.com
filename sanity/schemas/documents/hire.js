import { Smiley } from 'phosphor-react'

export default {
  name: 'hire',
  title: 'Hire',
  type: 'document',
  fields: [
    {
      name: 'status',
      type: 'string',
      options: {
        list: [
          'Available',
          'Available Soon',
          'Working',
          'Full-time',
          'Out of Office',
        ],
        layout: 'dropdown',
      },
    },
    {
      name: 'details',
      title: 'Status Details',
      type: 'string',
    },
    {
      type: 'array',
      name: 'intro',
      title: 'Intro',
      of: [{ type: 'block' }],
    },
    {
      name: 'obsessions',
      type: 'string',
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
    },
    {
      name: 'resume',
      type: 'file',
      accept: '.pdf',
    },
    {
      type: 'array',
      name: 'artDirectors',
      title: 'Art Directors',
      of: [
        {
          type: 'object',
          icon: Smiley,
          fields: [
            {
              type: 'string',
              name: 'name',
            },
            {
              type: 'url',
              name: 'url',
            },
          ],
        },
      ],
    },
  ],
  __experimental_actions: ['update', 'publish'],
}
