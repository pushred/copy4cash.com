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
    d="M16.5271 11.75C16.7622 11.9625 16.8928 12.225 16.8928 12.5C16.8928 12.775 16.7622 13.0375 16.5271 13.25L9.789 19.6875C9.55395 19.9 9.29278 20 9.01856 20C8.44399 20 8 19.5875 8 19.025V5.975C8 5.4125 8.44399 5 9.01856 5C9.29278 5 9.55395 5.1 9.789 5.3125L16.5271 11.75Z"
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
