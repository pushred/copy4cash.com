<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

  import Flex from '../Flex.svelte'

  import {
    Close,
    Next,
    Back,
    Play,
    Pause,
    Nib,
    LeftArrows,
    RightArrows,
    PaginationDot,
    Audio,
  } from '.'

  const icons = {
    animated: {
      nib: Nib,
      'left-arrows': LeftArrows,
      'right-arrows': RightArrows,
      'pagination-dot': PaginationDot,
      audio: Audio,
    },
    small: {
      close: Close,
      next: Next,
      back: Back,
      play: Play,
      pause: Pause,
      nib: Nib,
      'left-arrows': LeftArrows,
      'right-arrows': RightArrows,
      'pagination-dot': PaginationDot,
      audio: Audio,
    },
  }
</script>

<Meta title="Icons" component={Close} parameters={{ layout: 'centered' }} />

<Story name="Small Icons">
  <Flex gap="6">
    {#each Object.values(icons.small) as Icon}
      <Icon />
    {/each}
  </Flex>
</Story>

<Story
  name="Animated"
  let:args
  args={{ icon: 'nib', visible: true }}
  argTypes={{
    icon: {
      options: Object.keys(icons.animated),
      control: { type: 'select' },
    },
    visible: {
      control: { type: 'boolean' },
    },
  }}
>
  <svelte:component this={icons.animated[args.icon]} />
</Story>
