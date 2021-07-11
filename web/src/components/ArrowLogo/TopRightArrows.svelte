<script>
  import { onMount } from 'svelte'

  import { animateNeon, DURATIONS, TIMELINE } from '../animate'

  let g

  onMount(() => {
    animateNeon(g.querySelectorAll('path'), {
      delay: TIMELINE.topRightArrows,
      direction: 'reverse',
      duration: DURATIONS.arrows,
      stagger: true,
    })

    animateNeon(g.querySelectorAll('path'), {
      delay: TIMELINE.topRightArrows + DURATIONS.arrows + DURATIONS.glow * 2,
      direction: 'reverse',
      duration: DURATIONS.arrows,
      iterations: Infinity,
      stagger: true,
    })
  })
</script>

<g bind:this={g}>
  <path
    d="M1248.62 114.785L1232.71 130.749L1248.62 146.714"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M1303.52 114.785L1287.62 130.749L1303.52 146.714"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M1358.42 114.785L1342.52 130.749L1358.42 146.714"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M1413.33 114.785L1397.42 130.749L1413.33 146.714"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M1468.23 114.785L1452.32 130.749L1468.23 146.714"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M1523.13 114.785L1507.23 130.749L1523.13 146.714"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M1578.04 114.785L1562.13 130.749L1578.04 146.714"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M1632.94 114.785L1617.03 130.749L1632.94 146.714"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M1687.84 114.785L1671.93 130.749L1687.84 146.714"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M1742.74 114.785L1726.84 130.749L1742.74 146.714"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M1797.65 114.785L1781.74 130.749L1797.65 146.714"
    stroke="#FFB32C"
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
