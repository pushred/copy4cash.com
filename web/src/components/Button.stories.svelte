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
      options: ['next', 'back', 'close', 'menu', 'play', 'pause'],
      control: { type: 'select' },
    },
  }}
/>

<Template let:args>
  <Button variant="raised" {...args} />
</Template>

<Story name="Raised" args={{ disabled: false, icon: 'next', label: 'Next' }} />
