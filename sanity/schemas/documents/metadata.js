export default {
  name: 'metadata',
  title: 'Metadata',
  type: 'document',
  fields: [
    {
      type: 'image',
      name: 'image',
      title: 'Default Site Image',
      description:
        'Used for home page and any projects without a featured image',
      options: {
        hotspot: true,
      },
    },
    {
      type: 'text',
      name: 'description',
      title: 'Site Description',
      description: 'as seen on Google, Facebook, etc.',
      validation: (Rule) => [
        Rule.required().min(50).error('Must be at least 50 characters'),
        Rule.required().max(160).error('Cannot be more than 160 characters'),
      ],
    },
  ],
  __experimental_actions: ['update', 'publish'],
}
