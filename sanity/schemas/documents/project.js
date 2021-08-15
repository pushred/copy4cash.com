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
        source: (doc) => `${doc.client}-${doc.name}`,
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
          title: 'Image Carousel',
        },
        {
          type: 'gallery',
          title: 'Image Gallery',
        },
        {
          type: 'heading',
          title: 'Heading',
        },
        {
          type: 'recognition',
          title: 'Recognition',
        },
        {
          type: 'social-media',
          title: 'Social Media',
        },
        {
          type: 'video',
          title: 'Video',
        },
        {
          type: 'video-carousel',
          title: 'Video Carousel',
        },
        {
          type: 'video-gallery',
          title: 'Video Gallery',
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
