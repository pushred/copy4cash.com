<script>
  import { onMount } from 'svelte'
  import { expoOut } from 'svelte/easing'
  import { draw } from 'svelte/transition'

  export let disabled = false
  export let glow = false
  export let hover = false
  export let visible = false

  export let x = undefined
  export let y = undefined

  export const DURATIONS = {
    nib: 1000,
    glow: 2000,
  }

  onMount(() => {
    glow = true
    visible = true
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
>
  {#if visible}
    <path
      in:draw={{ duration: DURATIONS.nib, delay: 100, easing: expoOut }}
      d="M14.3821 19.0119L18.0925 13.029C16.3973 10.3868 15.5293 8.66096 14.5501 5.64906"
      stroke="#FFB32C"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      in:draw={{ duration: DURATIONS.nib, delay: 100, easing: expoOut }}
      d="M9.4718 21.6467H14.5501"
      stroke="#FFB32C"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      in:draw={{ duration: DURATIONS.nib, delay: 100, easing: expoOut }}
      d="M9.61796 19.0119L5.90753 13.029C8.10836 9.96012 9.91754 6.07871 11.5148 1.77642C11.5436 1.72683 11.5879 1.68811 11.6409 1.6663C11.6939 1.64449 11.7526 1.64079 11.8079 1.65579C11.8633 1.67079 11.9121 1.70364 11.9468 1.74923C11.9815 1.79483 12.0002 1.85061 12 1.90793V13.1868"
      stroke="#FFB32C"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {/if}

  {#if glow}
    <path
      in:draw={{
        duration: DURATIONS.glow,
        delay: DURATIONS.nib,
        easing: expoOut,
      }}
      d="M9.61796 19.0119L5.90753 13.029C8.10836 9.96012 9.91754 6.07871 11.5148 1.77642C11.5436 1.72683 11.5879 1.68811 11.6409 1.6663C11.6939 1.64449 11.7526 1.64079 11.8079 1.65579C11.8633 1.67079 11.9121 1.70364 11.9468 1.74923C11.9815 1.79483 12.0002 1.85061 12 1.90793V13.1868"
      stroke="white"
      stroke-width="0.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      in:draw={{
        duration: DURATIONS.glow,
        delay: DURATIONS.nib,
        easing: expoOut,
      }}
      d="M14.3821 19.0119L18.0925 13.029C16.3973 10.3868 15.5293 8.66096 14.5501 5.64906"
      stroke="white"
      stroke-width="0.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      in:draw={{
        duration: DURATIONS.glow,
        delay: DURATIONS.nib,
        easing: expoOut,
      }}
      d="M9.4718 21.6467H14.5501"
      stroke="white"
      stroke-width="0.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {/if}
</svg>

<style>
  svg {
    pointer-events: none;
  }
</style>
