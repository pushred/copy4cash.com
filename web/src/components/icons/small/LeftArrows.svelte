<script>
  import { onMount } from 'svelte'
  import { expoOut } from 'svelte/easing'
  import { fade } from 'svelte/transition'

  export let disabled = false
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

<svg
  class:disabled
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  on:click
>
  {#if visible}
    <path
      class="icon"
      in:fade={{ duration: DURATIONS.arrow, delay: 100, easing: expoOut }}
      d="M20 9L17 12L20 15"
      stroke="#FFB32C"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="icon"
      in:fade={{
        duration: DURATIONS.arrow,
        delay: DURATIONS.arrow,
        easing: expoOut,
      }}
      d="M13.5 9L10.5 12L13.5 15"
      stroke="#FFB32C"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="icon"
      in:fade={{
        duration: DURATIONS.arrow,
        delay: DURATIONS.arrow * 2,
        easing: expoOut,
      }}
      d="M7 9L4 12L7 15"
      stroke="#FFB32C"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {/if}

  {#if glow && !disabled}
    <path
      in:fade={{
        duration: DURATIONS.glow,
        delay: DURATIONS.arrow * 3,
        easing: expoOut,
      }}
      d="M20 9L17 12L20 15"
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
      d="M13.5 9L10.5 12L13.5 15"
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
      d="M7 9L4 12L7 15"
      stroke="white"
      stroke-width="0.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {/if}
</svg>

<style>
  .disabled .icon {
    stroke: var(--button-icon-disabled);
  }
</style>
