<script>
  import { onMount } from 'svelte'

  import { animateNeon, DURATIONS, TIMELINE } from '../../animate'

  let g

  onMount(() => {
    animateNeon(g.querySelectorAll('path'), {
      delay: TIMELINE.middleBill,
      duration: DURATIONS.bill,
    })
  })
</script>

<g bind:this={g}>
  <path
    d="M444.506 1206.59H751.135C753 1206.59 754.789 1205.85 756.108 1204.53C757.427 1203.21 758.168 1201.43 758.168 1199.56V1044.29"
    stroke="#00FF8B"
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
