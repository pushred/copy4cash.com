<script>
  import { onMount } from 'svelte'
  import { expoOut } from 'svelte/easing'
  import { fade } from 'svelte/transition'

  export let glow = false
  export let visible = false

  export const DURATIONS = {
    arrow: 500,
    glow: 2000,
  }

  onMount(() => {
    glow = true
    visible = true
  })
</script>

{#if visible}
  <path
    in:fade={{ duration: DURATIONS.arrow, delay: 100, easing: expoOut }}
    d="M4 9L7 12L4 15"
    stroke="#FFB32C"
    stroke-width="1.4"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    in:fade={{
      duration: DURATIONS.arrow,
      delay: DURATIONS.arrow,
      easing: expoOut,
    }}
    d="M10.5 9L13.5 12L10.5 15"
    stroke="#FFB32C"
    stroke-width="1.4"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    in:fade={{
      duration: DURATIONS.arrow,
      delay: DURATIONS.arrow * 2,
      easing: expoOut,
    }}
    d="M17 9L20 12L17 15"
    stroke="#FFB32C"
    stroke-width="1.4"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
{/if}

{#if glow}
  <path
    in:fade={{
      duration: DURATIONS.glow,
      delay: DURATIONS.arrow * 3,
      easing: expoOut,
    }}
    d="M4 9L7 12L4 15"
    stroke="white"
    stroke-width="0.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    in:fade={{
      duration: DURATIONS.glow,
      delay: DURATIONS.arrow * 3,
      easing: expoOut,
    }}
    d="M10.5 9L13.5 12L10.5 15"
    stroke="white"
    stroke-width="0.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    in:fade={{
      duration: DURATIONS.glow,
      delay: DURATIONS.arrow * 3,
      easing: expoOut,
    }}
    d="M17 9L20 12L17 15"
    stroke="white"
    stroke-width="0.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
{/if}
