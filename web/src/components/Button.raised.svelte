<script>
  export let hover = false
</script>

<svg
  class:hover
  width="36"
  height="36"
  viewBox="0 0 36 36"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    class="shadow"
    d="M6 35H35L35 6"
    stroke="#544370"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <rect
    class="shape"
    width="30"
    height="30"
    x="1"
    y="1"
    rx="1"
    stroke="#544370"
    stroke-width="2"
  />
  <slot />
</svg>

<style>
  .shadow {
    opacity: 0.5;
    transition: var(--slow-opacity-transition);
  }

  .hover .shape {
    stroke: var(--purple);
  }

  .hover .shadow {
    opacity: 1;
    transition-delay: 500;
  }
</style>
