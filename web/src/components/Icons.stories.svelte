<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

  import { Flex } from '.'

  import {
    SmallIcon,
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
  } from './icons'

  const icons = {
    small: [
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
    ],
  }

  const options = {
    animated: ['nib', 'left-arrows', 'right-arrows', 'pagination-dot', 'audio'],
    small: [
      'close',
      'next',
      'back',
      'play',
      'pause',
      'nib',
      'left-arrows',
      'right-arrows',
      'pagination-dot',
      'audio',
    ],
  }
</script>

<Meta title="Icons" component={SmallIcon} parameters={{ layout: 'centered' }} />

<Template let:args>
  <SmallIcon {...args} />
</Template>

<Story name="Small Icons">
  <Flex gap="6">
    {#each icons.small as Icon}
      <SmallIcon>
        <Icon />
      </SmallIcon>
    {/each}
  </Flex>
</Story>

<Story
  name="Animated"
  args={{ icon: 'nib', visible: true }}
  argTypes={{
    icon: {
      options: options.animated,
      control: { type: 'select' },
    },
    visible: {
      control: { type: 'boolean' },
    },
  }}
/>
