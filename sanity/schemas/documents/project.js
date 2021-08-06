export default {
  title: 'Project',
  name: 'project',
  type: 'document',
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
    },
    {
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
    },
    {
      type: 'string',
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
    {
      type: 'string',
      name: 'client',
      title: 'Client',
    },
    {
      type: 'array',
      name: 'summary',
      title: 'Summary',
      of: [{ type: 'block' }],
    },
    {
      type: 'array',
      name: 'page',
      of: [
        {
          type: 'carousel',
          title: 'Carousel',
        },
        {
          type: 'gallery',
          title: 'Gallery',
        },
        {
          type: 'heading',
          title: 'Heading',
        },
        {
          type: 'link',
          title: 'Link',
        },
        {
          type: 'recognition',
          title: 'Recognition',
        },
        {
          type: 'tweet',
          title: 'Tweet',
        },
        {
          type: 'video',
          title: 'Video',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'client',
    },
  },
}
