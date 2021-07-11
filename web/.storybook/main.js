module.exports = {
  stories: ['../src/**/*.stories.svelte'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-svelte-csf'],
  core: {
    builder: 'storybook-builder-vite',
  },
}
