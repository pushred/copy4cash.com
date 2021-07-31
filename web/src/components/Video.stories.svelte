<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Video from './Video.svelte'
</script>

<Meta title="Video" component={Video} />

<Story name="Original Size">
  <Video vimeoId="334283806" originalWidth="426" originalHeight="240" />
</Story>

<Story name="Stretched">
  <Video
    vimeoId="336888265"
    width="100%"
    originalWidth="426"
    originalHeight="240"
  />
</Story>

<Story name="Captioned">
  <Video
    caption="Red = Nighttime Cravings"
    vimeoId="334797164"
    width="100%"
    originalWidth="426"
    originalHeight="240"
  />
</Story>
