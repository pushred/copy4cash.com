<script>
  import { expoOut } from 'svelte/easing'
  import { fade } from 'svelte/transition'

  import Loading from './icons/Loading.svelte'
</script>

<div
  out:fade|local={{
    duration: 1000,
    easing: expoOut,
  }}
>
  <Loading />
</div>

<style>
  div {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--purple-black);
    z-index: var(--z-overlay);
  }
</style>
