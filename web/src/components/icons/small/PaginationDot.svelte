<script>
  import { onMount } from 'svelte'
  import { expoOut } from 'svelte/easing'
  import { fade } from 'svelte/transition'

  export let active = false
  export let disabled = false
  export let glow = false
  export let hover = false

  export let x = undefined
  export let y = undefined

  export const DURATIONS = {
    active: 500,
    glow: 2000,
  }

  onMount(() => {
    glow = true
  })
</script>

<svg
  {x}
  {y}
  class:disabled
  class:hover
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  on:click
>
  <circle cx="12" cy="12" r="7" stroke="#FFB32C" stroke-width="1.4" />

  {#if glow}
    <circle
      in:fade={{ duration: DURATIONS.glow, delay: 100, easing: expoOut }}
      cx="12"
      cy="12"
      r="7"
      stroke="white"
      stroke-width="0.5"
    />
  {/if}

  {#if active}
    <circle
      in:fade={{ duration: DURATIONS.active, delay: 100, easing: expoOut }}
      cx="12"
      cy="12"
      r="5"
      fill="white"
    />
  {/if}
</svg>
