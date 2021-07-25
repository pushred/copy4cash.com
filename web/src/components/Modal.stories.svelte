<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import Carousel from './Carousel.svelte'
  import Flex from './Flex.svelte'
  import Modal from './Modal.svelte'
  import Video from './Video.svelte'
</script>

<Meta
  title="Modal"
  component={Modal}
  argTypes={{
    isOpen: {
      control: { type: 'boolean' },
    },
  }}
/>

<Template let:args>
  <Flex
    position="absolute"
    inset="0"
    alignItems="center"
    justifyContent="center"
  >
    <Video vimeoId="336888265" originalWidth="426" originalHeight="240" />
  </Flex>
  <Modal {...args}>
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
  </Modal>
</Template>

<Story name="Example" args={{ isOpen: true }} />
