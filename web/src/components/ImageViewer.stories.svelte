<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import ImageViewer from './ImageViewer.svelte'
</script>

<Meta title="ImageViewer" component={ImageViewer} />

<Story name="Example">
  <ImageViewer
    data={[
      {
        description: 'Cat',
        url: 'https://placekitten.com/500/300',
      },
      {
        description: 'Cat',
        url: 'https://placekitten.com/600/400',
      },
      {
        description: 'Cat',
        url: 'https://placekitten.com/900/500',
      },
    ]}
  />
</Story>

<Story name="Start Index">
  <ImageViewer
    data={[
      {
        description: 'Cat',
        url: 'https://placekitten.com/500/300',
      },
      {
        description: 'Cat',
        url: 'https://placekitten.com/600/400',
      },
      {
        description: 'Cat',
        url: 'https://placekitten.com/900/500',
      },
    ]}
    startIndex={1}
  />
</Story>
