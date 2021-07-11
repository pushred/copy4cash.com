<script>
  import { onDestroy, onMount } from 'svelte'

  import { animateNeon, DURATIONS, TIMELINE } from '../animate'

  let g

  onMount(() => {
    const parts = g.querySelectorAll('path')

    animateNeon(parts, {
      delay: TIMELINE.bling,
      duration: DURATIONS.bling,
      random: true,
      stagger: true,
    })
  })
</script>

<g bind:this={g}>
  <path
    d="M1065.32 251.839L1099.69 186.729"
    stroke="#004FFF"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M1046.66 193.035L1078.04 96.8615"
    stroke="#004FFF"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M999.733 186.729V54.0813"
    stroke="#004FFF"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M952.807 193.035L921.422 96.8615"
    stroke="#004FFF"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M934.146 251.839L899.778 186.729"
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
