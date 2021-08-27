<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import Pagination from './Pagination.svelte'
</script>

<Meta title="Pagination" component={Pagination} />

<Template let:args>
  <Pagination {...args} />
</Template>

<Story name="Example" args={{ currentIndex: 1, totalPages: 10 }} />
