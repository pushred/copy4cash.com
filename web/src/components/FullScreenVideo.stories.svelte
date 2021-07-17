<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import FullScreenVideo from './FullScreenVideo.svelte'
</script>

<Meta title="FullScreenVideo" component={FullScreenVideo} />

<Story name="Example">
  <FullScreenVideo vimeoId="334283806" />
</Story>
