<script>
  import { onMount } from 'svelte'

  import { animateNeon, DURATIONS, TIMELINE } from '../../animate'

  let g

  onMount(() => {
    animateNeon(g.querySelectorAll('path'), {
      delay: TIMELINE.bottomLeftArrows,
      direction: 'reverse',
      duration: DURATIONS.arrows,
      stagger: true,
    })

    animateNeon(g.querySelectorAll('path'), {
      delay: TIMELINE.bottomLeftArrows + DURATIONS.arrows + DURATIONS.glow * 2,
      direction: 'reverse',
      duration: DURATIONS.arrows,
      iterations: Infinity,
      stagger: true,
    })
  })
</script>

<g bind:this={g}>
  <path
    d="M736.387 581.429L752.293 597.393L736.387 613.358"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M678.432 581.429L694.338 597.393L678.432 613.358"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M620.467 581.429L636.373 597.393L620.467 613.358"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M562.502 581.429L578.408 597.393L562.502 613.358"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M504.547 581.429L520.453 597.393L504.547 613.358"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M446.582 581.429L462.488 597.393L446.582 613.358"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M388.617 581.429L404.523 597.393L388.617 613.358"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M330.662 581.429L346.568 597.393L330.662 613.358"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M272.697 581.429L288.603 597.393L272.697 613.358"
    stroke="#FFB32C"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M214.732 581.429L230.638 597.393L214.732 613.358"
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
