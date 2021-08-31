<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Separator from './Separator.svelte'
</script>

<Meta
  title="Separator"
  component={Separator}
  parameters={{ layout: 'centered' }}
/>

<Story name="Example">
  <Separator />
</Story>
