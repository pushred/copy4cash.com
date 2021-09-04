<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

  import Flex from '../Flex.svelte'

  import {
    Audio,
    Close,
    Down,
    Left,
    LeftArrows,
    Nib,
    PaginationDot,
    Pause,
    Play,
    Right,
    RightArrows,
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
      'left-arrows': LeftArrows,
      'pagination-dot': PaginationDot,
      'right-arrows': RightArrows,
      audio: Audio,
      close: Close,
      down: Down,
      left: Left,
      nib: Nib,
      pause: Pause,
      play: Play,
      right: Right,
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
