<script>
  import { onMount } from 'svelte'

  import { animateNeon, DURATIONS, TIMELINE } from '../../animate'

  let g

  onMount(() => {
    animateNeon(g.querySelectorAll('path'), {
      delay: TIMELINE.nib,
      duration: DURATIONS.nib,
    })
  })
</script>

<g bind:this={g}>
  <path
    d="M558.621 1164.15L533.114 1123.02C548.243 1101.92 560.68 1075.24 571.661 1045.66C571.859 1045.32 572.163 1045.06 572.528 1044.91C572.892 1044.76 573.296 1044.73 573.676 1044.83C574.056 1044.94 574.392 1045.16 574.631 1045.48C574.869 1045.79 574.998 1046.17 574.996 1046.57V1124.1"
    stroke="#FFB32C"
    stroke-width="10.1714"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M591.371 1164.15L616.878 1123.02C605.224 1104.86 599.257 1092.99 592.526 1072.29"
    stroke="#FFB32C"
    stroke-width="10.1714"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M557.616 1182.26H592.527"
    stroke="#FFB32C"
    stroke-width="10.1714"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</g>

<style>
  path {
    opacity: var(--opacity-initial-logo);
  }
</style>
