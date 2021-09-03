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
    <path
      class="hover-path"
      d="M12 14H36"
      stroke="#00FF8B"
      stroke-width="1.17"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="hover-path"
      d="M12 24H36"
      stroke="#00FF8B"
      stroke-width="1.17"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    {#if hover}
      <path
        in:draw={{ duration: 500, delay: 100, easing: quintOut }}
        d="M12 24H36"
        stroke="#ffb32c"
        stroke-width="1.17"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    {/if}
    <path
      class="hover-path"
      d="M12 34H36"
      stroke="#00FF8B"
      stroke-width="1.17"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>

  {#if hover}
    <g id="glow">
      <path
        d="M12 14H36"
        stroke="white"
        stroke-width="0.35"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 34H36"
        stroke="white"
        stroke-width="0.35"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  {/if}
</svg>

<style>
  .hover-path {
    stroke: var(--faded-purple);
    transition: var(--fill-transition);
  }

  .hover #art .hover-path {
    stroke: #00ff8b;
  }

  .hover #glow .hover-path {
    stroke: #fff;
  }
</style>
