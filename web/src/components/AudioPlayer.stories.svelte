<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import AudioPlayer from './AudioPlayer.svelte'
</script>

<Meta
  title="AudioPlayer"
  component={AudioPlayer}
  parameters={{ layout: 'centered' }}
/>

<Story name="Example">
  <AudioPlayer
    caption="Radio: “Doorbell” :30"
    url="https://files.cargocollective.com/c440964/WBJR6020000-Doorbell--Kearny-Open-Soon--Rad30-Full-Mix.m4a"
  />
</Story>
