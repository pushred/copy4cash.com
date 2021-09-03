<script>
  import { onMount } from 'svelte'

  import { animateNeon, DURATIONS, TIMELINE } from '../../animate'

  let g

  onMount(() => {
    animateNeon(g.querySelectorAll('path'), {
      delay: TIMELINE.bottomBill,
      duration: DURATIONS.bill,
      random: true,
    })
  })
</script>

<g bind:this={g}>
  <path
    d="M466.828 1228.97H763.422C767.951 1228.97 772.295 1227.17 775.498 1223.96C778.701 1220.76 780.5 1216.42 780.5 1211.89V1066.61"
    stroke="white"
    stroke-width="3.05141"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</g>

<style>
  path {
    opacity: 0;
  }
</style>
