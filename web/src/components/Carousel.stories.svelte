<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import Carousel from './Carousel.svelte'
</script>

<Meta title="Carousel" component={Carousel} />

<Story name="Example">
  <Carousel
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
  <Carousel
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
