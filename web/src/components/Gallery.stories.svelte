<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import Gallery from './Gallery.svelte'
</script>

<Meta
  title="Gallery"
  component={Gallery}
  argTypes={{
    columns: {
      options: [2, 3, 4, 5, 6, 7, 8],
      control: { type: 'select' },
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
      'https://placekitten.com/200/300',
      'https://placekitten.com/200/300',
      'https://placekitten.com/200/300',
      'https://placekitten.com/200/300',
      'https://placekitten.com/200/300',
      'https://placekitten.com/200/300',
      'https://placekitten.com/200/300',
      'https://placekitten.com/200/300',
    ]}
  />
</Template>

<Story name="Grid" args={{ columns: 4, gap: true }} />
