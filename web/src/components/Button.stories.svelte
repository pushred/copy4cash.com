<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import Button from './Button.svelte'
</script>

<Meta
  title="Button"
  component={Button}
  argTypes={{
    icon: {
      options: ['next', 'back', 'close'],
      control: { type: 'select' },
    },
  }}
/>

<Template let:args>
  <Button {...args} />
</Template>

<Story name="Icon" args={{ icon: 'next', label: 'Next' }} />
