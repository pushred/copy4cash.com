<script>
  import { onDestroy, onMount } from 'svelte'

  import { animateNeon, DURATIONS, TIMELINE } from '../../animate'

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
    d="M1065.32 479.964L1099.69 545.074"
    stroke="#004FFF"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M1046.66 538.778L1078.04 634.951"
    stroke="#004FFF"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M999.733 545.074V677.732"
    stroke="#004FFF"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M952.807 538.778L921.422 634.951"
    stroke="#004FFF"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M934.146 479.964L899.778 545.074"
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
