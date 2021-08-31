<script>
  import { onMount } from 'svelte'

  import { animateNeon, DURATIONS, TIMELINE } from '../../animate'

  let g

  onMount(() => {
    animateNeon(g.querySelectorAll('path'), {
      delay: TIMELINE.copyFrame,
      duration: DURATIONS.frames,
    })
  })
</script>

<g bind:this={g}>
  <path
    d="M797.345 210.69H51.4107L130.009 515.682H782.311"
    stroke="#004FFF"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</g>

<style>
  path {
    opacity: 0.1;
  }
</style>
