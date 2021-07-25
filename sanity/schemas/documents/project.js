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
          type: 'gallery',
          title: 'Gallery',
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
