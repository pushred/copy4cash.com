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
  <Gallery {...args} />
</Template>

<Story
  name="Images"
  args={{
    columns: 4,
    gap: true,
    data: [
      {
        image: {
          description: 'Cat',
          url: 'http://placekitten.com/200/300?image=1',
        },
      },
      {
        image: {
          description: 'Cat',
          url: 'http://placekitten.com/200/300?image=2',
        },
      },
      {
        image: {
          description: 'Cat',
          url: 'http://placekitten.com/200/300?image=3',
        },
      },
      {
        image: {
          description: 'Cat',
          url: 'http://placekitten.com/200/300?image=4',
        },
      },
      {
        image: {
          description: 'Cat',
          url: 'http://placekitten.com/200/300?image=5',
        },
      },
      {
        image: {
          description: 'Cat',
          url: 'http://placekitten.com/200/300?image=6',
        },
      },
      {
        image: {
          description: 'Cat',
          url: 'http://placekitten.com/200/300?image=7',
        },
      },
      {
        image: {
          description: 'Cat',
          url: 'http://placekitten.com/200/300?image=8',
        },
      },
    ],
  }}
/>

<Story
  name="Videos"
  args={{
    columns: 3,
    gap: false,
    data: [
      {
        video: {
          description: 'Nicorette - Clement’s #QuiTips',
          vimeoId: '334808780',
          originalWidth: 240,
          originalHeight: 240,
        },
      },
      {
        video: {
          description: 'Nicorette - Caroline’s #QuiTips',
          vimeoId: '334808229',
          originalWidth: 240,
          originalHeight: 240,
        },
      },
      {
        video: {
          description: 'Nicorette - Emanuel’s #QuiTips',
          vimeoId: '334809217',
          originalWidth: 240,
          originalHeight: 240,
        },
      },
      {
        video: {
          description: 'Nicorette - Emily’s #QuiTips',
          vimeoId: '334809699',
          originalWidth: 240,
          originalHeight: 240,
        },
      },
      {
        video: {
          description: 'Nicorette - Kathy’s #QuiTips',
          vimeoId: '334810234',
          originalWidth: 240,
          originalHeight: 240,
        },
      },
      {
        video: {
          description: 'Nicorette - Daniel’s #QuiTips',
          vimeoId: '334809979',
          originalWidth: 240,
          originalHeight: 240,
        },
      },
    ],
  }}
/>
