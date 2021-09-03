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
  <g id="art">
    <rect
      class="hover-path"
      x="12"
      y="12"
      width="24"
      height="24"
      rx="6.5"
      stroke="#00FF8B"
      stroke-width="1.17"
    />
    <circle
      class="hover-path"
      cx="23.8125"
      cy="24.0938"
      r="5"
      stroke="#00FF8B"
      stroke-width="1.17"
    />
    <circle
      class="hover-path"
      cx="31.125"
      cy="17.5938"
      r="1.5"
      stroke="#00FF8B"
      stroke-width="1.17"
    />
    {#if hover}
      <circle
        in:draw={{ duration: 500, delay: 100, easing: quintOut }}
        cx="23.8125"
        cy="24.0938"
        r="5"
        stroke="#ffb32c"
        stroke-width="1.17"
      />
      <circle
        in:draw={{ duration: 500, delay: 200, easing: quintOut }}
        cx="31.125"
        cy="17.5938"
        r="1.5"
        stroke="#ffb32c"
        stroke-width="1.17"
      />
    {/if}
  </g>
  {#if hover}
    <g id="glow">
      <rect
        x="12"
        y="12"
        width="24"
        height="24"
        rx="6.5"
        stroke="white"
        stroke-width="0.3"
      />
      <circle
        in:draw={{ duration: 500, delay: 700, easing: quintOut }}
        cx="23.8125"
        cy="24.0938"
        r="5"
        stroke="white"
        stroke-width="0.3"
      />
      <circle
        in:draw={{ duration: 500, delay: 700, easing: quintOut }}
        cx="31.125"
        cy="17.5938"
        r="1.5"
        stroke="white"
        stroke-width="0.3"
      />
    </g>
  {/if}
</svg>

<style>
  .hover-path {
    stroke: var(--faded-purple);
    transition: var(--stroke-transition);
  }

  .hover #art rect {
    stroke: var(--neon-green);
  }

  .hover #glow rect {
    stroke: #fff;
  }
</style>
