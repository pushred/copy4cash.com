<script>
  import { onDestroy, onMount } from 'svelte'

  import { animateNeon, flickerNeon, DURATIONS, TIMELINE } from '../../animate'

  let g
  let flickerInterval

  onMount(() => {
    const parts = g.querySelectorAll('path')

    flickerInterval = setInterval(
      () => flickerNeon(parts, { delay: TIMELINE.fourFrame, random: true }),
      5000
    )

    animateNeon(parts, {
      delay: TIMELINE.fourFrame,
      duration: DURATIONS.frames,
      stagger: true,
    })
  })

  onDestroy(() => {
    clearInterval(flickerInterval)
  })
</script>

<g bind:this={g}>
  <path
    d="M1032.77 45.7758H1156.13L1128.47 144.943"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M862.248 144.943L834.578 45.7758H965.086"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M968.059 700.49H825.679L852.308 611.398"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M1138.4 611.398L1165.03 700.49H1032.77"
    stroke="#FFB32C"
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
