<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import Button from './Button.svelte'
</script>

<Meta
  title="Button"
  component={Button}
  parameters={{ layout: 'centered' }}
  argTypes={{
    disabled: {
      control: { type: 'boolean' },
    },
    icon: {
      options: ['close', 'down', 'left', 'menu', 'play', 'pause', 'right'],
      control: { type: 'select' },
    },
    variant: {
      options: ['raised', 'raised-text'],
      control: { type: 'select' },
    },
  }}
/>

<Template let:args>
  <Button {...args} />
</Template>

<Story
  name="Raised"
  args={{ disabled: false, icon: 'right', label: 'Next', variant: 'raised' }}
/>

<Story
  name="Raised with Text"
  args={{
    disabled: false,
    label: 'Download',
    variant: 'raised-text',
  }}
/>

<Story
  name="Raised with Text and Icon"
  args={{
    disabled: false,
    icon: 'down',
    label: 'Download',
    variant: 'raised-text',
  }}
/>
