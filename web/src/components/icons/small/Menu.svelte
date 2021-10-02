<script>
  export let x = 0
  export let y = 0

  export let disabled = false
  export let hover = false
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
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 6C4 6.55228 4.44772 7 5 7H19C19.5523 7 20 6.55228 20 6C20 5.44772 19.5523 5 19 5H5C4.44772 5 4 5.44772 4 6ZM4 12C4 12.5523 4.44772 13 5 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H5C4.44772 11 4 11.4477 4 12ZM5 19C4.44772 19 4 18.5523 4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5Z"
    fill="#6A0BFF"
  />
</svg>

<style>
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
