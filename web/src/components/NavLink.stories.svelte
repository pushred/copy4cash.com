<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import NavLink from './NavLink.svelte'
</script>

<Meta title="NavLink" component={NavLink} />

<Story name="Hire">
  <NavLink icon="hire" label="Hire" />
</Story>

<Story name="Work">
  <NavLink icon="work" label="Work" />
</Story>
