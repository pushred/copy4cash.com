<script>
  import { onMount } from 'svelte'

  import { animateNeon, DURATIONS, TIMELINE } from '../animate'

  let g

  onMount(() => {
    animateNeon(g.querySelectorAll('path'), {
      delay: TIMELINE.cashFrame,
      duration: DURATIONS.frames,
    })
  })
</script>

<g bind:this={g}>
  <path
    d="M1200.1 515.682H1814.99L1877.87 210.69H1194.91"
    stroke="#004FFF"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</g>

<style>
  path {
    opacity: 0;
  }
</style>
