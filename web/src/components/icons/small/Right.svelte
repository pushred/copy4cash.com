<script>
  export let active = false
  export let disabled = false
  export let hover = false

  export let x = 0
  export let y = 0
</script>

<svg
  {x}
  {y}
  class:active
  class:disabled
  class:hover
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M21 11.875C21 11.6 20.8694 11.3375 20.6344 11.125L13.8962 4.6875C13.6612 4.475 13.4 4.375 13.1258 4.375C12.5512 4.375 12.1072 4.7875 12.1072 5.35C12.1072 5.6125 12.1986 5.875 12.3945 6.05L14.1966 7.8375L17.9052 11.0375L15.3718 10.8625H3.04467C2.43093 10.8625 2 11.2875 2 11.875C2 12.4625 2.43093 12.8875 3.04467 12.8875H15.3718L17.9182 12.7125L14.1966 15.9125L12.3945 17.7C12.1986 17.875 12.1072 18.1375 12.1072 18.4C12.1072 18.9625 12.5512 19.375 13.1258 19.375C13.4 19.375 13.6612 19.275 13.8962 19.0625L20.6344 12.625C20.8694 12.4125 21 12.15 21 11.875Z"
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
