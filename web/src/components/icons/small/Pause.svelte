<script>
  export let disabled = false
  export let hover = false

  export let x = 0
  export let y = 0
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
  <path
    d="M9 17C9.55228 17 10 16.5523 10 16V8C10 7.44772 9.55228 7 9 7C8.44772 7 8 7.44772 8 8V16C8 16.5523 8.44772 17 9 17Z"
    fill="#6A0BFF"
  />
  <path
    d="M15 17C15.5523 17 16 16.5523 16 16V8C16 7.44772 15.5523 7 15 7C14.4477 7 14 7.44772 14 8V16C14 16.5523 14.4477 17 15 17Z"
    fill="#6A0BFF"
  />
</svg>

<style>
  svg {
    pointer-events: none;
  }

  path {
    transition: var(--fill-transition);
  }

  .disabled path {
    fill: var(--button-icon-disabled);
  }

  .hover path {
    fill: var(--button-icon-hover);
  }
</style>
