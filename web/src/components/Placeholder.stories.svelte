<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Placeholder from './Placeholder.svelte'
</script>

<Meta title="Placeholder" component={Placeholder} />

<Story name="Example">
  <Placeholder width="640" height="480" />
</Story>
