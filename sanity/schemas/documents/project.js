import React from 'react'
import { EyeClosed } from 'phosphor-react'

export default {
  title: 'Projects',
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
      title: 'URL',
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
      type: 'image',
      name: 'featuredImage',
      title: 'Featured Image',
      description: 'as seen on Facebook, Twitter, etc.',
    },
    {
      type: 'array',
      name: 'page',
      of: [
        {
          type: 'audio',
          title: 'Audio',
        },
        {
          type: 'heading',
          title: 'Heading',
        },
        {
          type: 'carousel',
          title: 'Image Carousel',
        },
        {
          type: 'gallery',
          title: 'Image Gallery',
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
    {
      type: 'boolean',
      name: 'hidden',
      title: 'Hidden',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      name: 'name',
      client: 'client',
      hidden: 'hidden',
      featuredImage: 'featuredImage',
    },
    prepare(selection) {
      const { featuredImage, name, client, hidden } = selection
      return {
        title: name,
        subtitle: client,
        media: hidden ? <EyeClosed /> : featuredImage,
      }
    },
  },
}
