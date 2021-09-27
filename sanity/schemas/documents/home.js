export default {
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      type: 'vimeo-video',
      name: 'reel',
      title: 'Reel Background',
    },
  ],
  __experimental_actions: ['update', 'publish'],
}
