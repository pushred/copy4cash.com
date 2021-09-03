<script>
  import { quintOut } from 'svelte/easing'
  import { draw } from 'svelte/transition'

  export let hover = false
</script>

<svg
  class:hover
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    id="art"
    class="hover-path"
    d="M24.071 18.0004C24.0711 16.8516 24.4667 15.7378 25.1914 14.8464C25.916 13.955 26.9255 13.3402 28.05 13.1055C29.1746 12.8708 30.3457 13.0304 31.3664 13.5575C32.3872 14.0846 33.1953 14.9471 33.6549 16L38.071 16L34.0382 20.0328C33.7756 24.089 31.9791 27.8933 29.0136 30.6731C26.048 33.4529 22.1357 34.9999 18.071 35C14.071 35 13.071 33.5 13.071 33.5C13.071 33.5 17.071 32 19.071 29C19.071 29 11.071 25 13.071 14C13.071 14 18.071 19 24.0693 20L24.071 18.0004Z"
    stroke="#00FF8B"
    stroke-width="1.17"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    id="glow"
    class="hover-path"
    d="M24.071 18.0004C24.0711 16.8516 24.4667 15.7378 25.1914 14.8464C25.916 13.955 26.9255 13.3402 28.05 13.1055C29.1746 12.8708 30.3457 13.0304 31.3664 13.5575C32.3872 14.0846 33.1953 14.9471 33.6549 16L38.071 16L34.0382 20.0328C33.7756 24.089 31.9791 27.8933 29.0136 30.6731C26.048 33.4529 22.1357 34.9999 18.071 35C14.071 35 13.071 33.5 13.071 33.5C13.071 33.5 17.071 32 19.071 29C19.071 29 11.071 25 13.071 14C13.071 14 18.071 19 24.0693 20L24.071 18.0004Z"
    stroke="white"
    stroke-width="0.35"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>

<style>
  .hover-path {
    stroke: var(--faded-purple);
    transition: var(--fill-transition);
  }

  .hover #art {
    stroke: #00ff8b;
  }

  .hover #glow {
    stroke: #fff;
  }
</style>
