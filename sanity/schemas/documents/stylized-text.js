export default {
  name: 'stylized-text',
  title: 'Stylized Text',
  type: 'document',
  fields: [
    {
      type: 'array',
      name: 'exclusions',
      title: 'Exclusions',
      description: 'The following will be presented as-is vs. all-caps, etc.',
      of: [{ type: 'string' }],
    },
  ],
  __experimental_actions: ['update', 'publish'],
}
