<script>
  import { onMount } from 'svelte'

  import { animateNeon, DURATIONS, TIMELINE } from '../../animate'

  let g

  onMount(() => {
    animateNeon(g.querySelectorAll('path'), {
      delay: TIMELINE.topLeftArrows,
      direction: 'reverse',
      duration: DURATIONS.arrows,
      stagger: true,
    })

    animateNeon(g.querySelectorAll('path'), {
      delay: TIMELINE.topLeftArrows + DURATIONS.arrows + DURATIONS.glow * 2,
      direction: 'reverse',
      duration: DURATIONS.arrows,
      iterations: Infinity,
      stagger: true,
    })
  })
</script>

<g bind:this={g}>
  <path
    d="M735.396 114.785L751.302 130.749L735.396 146.714"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M680.494 114.785L696.4 130.749L680.494 146.714"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M625.591 114.785L641.497 130.749L625.591 146.714"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M570.688 114.785L586.594 130.749L570.688 146.714"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M515.785 114.785L531.691 130.749L515.785 146.714"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M460.882 114.785L476.788 130.749L460.882 146.714"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M405.98 114.785L421.886 130.749L405.98 146.714"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M351.077 114.785L366.983 130.749L351.077 146.714"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M296.174 114.785L312.08 130.749L296.174 146.714"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M241.271 114.785L257.177 130.749L241.271 146.714"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M186.369 114.785L202.275 130.749L186.369 146.714"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M131.466 114.785L147.372 130.749L131.466 146.714"
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
