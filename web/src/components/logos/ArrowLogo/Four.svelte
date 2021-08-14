<script>
  import { onMount } from 'svelte'

  import { animateNeon, DURATIONS, TIMELINE } from '../../animate'

  let g

  onMount(() => {
    animateNeon(g.querySelectorAll('path'), {
      delay: TIMELINE.four,
      duration: DURATIONS.four,
    })
  })
</script>

<g bind:this={g}>
  <path
    d="M912.661 394.423L965.086 393.25V313.936L926.545 373.118M1027.32 388.316C1040.82 387.878 1054.75 387.441 1066.51 385.69L1050.83 444.673H1027.32V448.652C1027.32 473.996 1028.19 481.416 1041.26 506.76H950.28C962.906 481.416 963.778 473.946 963.778 448.592V444.614H847.115L992.508 219.612H1027.32V361.202V388.316Z"
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
