<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import Gallery from './Gallery.svelte'
</script>

<Meta
  title="Gallery"
  component={Gallery}
  argTypes={{
    columns: {
      control: { type: 'range', min: 1, max: 8 },
    },
    gap: {
      options: [true, false],
      control: { type: 'boolean' },
    },
  }}
/>

<Template let:args>
  <Gallery
    {...args}
    data={[
      {
        description: 'Cat',
        url: 'http://placekitten.com/200/300?image=1',
      },
      {
        description: 'Cat',
        url: 'http://placekitten.com/200/300?image=2',
      },
      {
        description: 'Cat',
        url: 'http://placekitten.com/200/300?image=3',
      },
      {
        description: 'Cat',
        url: 'http://placekitten.com/200/300?image=4',
      },
      {
        description: 'Cat',
        url: 'http://placekitten.com/200/300?image=5',
      },
      {
        description: 'Cat',
        url: 'http://placekitten.com/200/300?image=6',
      },
      {
        description: 'Cat',
        url: 'http://placekitten.com/200/300?image=7',
      },
      {
        description: 'Cat',
        url: 'http://placekitten.com/200/300?image=8',
      },
    ]}
  />
</Template>

<Story name="Grid" args={{ columns: 4, gap: true }} />
