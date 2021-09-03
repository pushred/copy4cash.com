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
      name: 'resume',
      type: 'file',
      accept: '.pdf',
    },
  ],
  __experimental_actions: ['update', 'publish'],
}
