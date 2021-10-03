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
    d="M12 21.5C11.725 21.5 11.4625 21.3694 11.25 21.1344L4.8125 14.3962C4.6 14.1612 4.5 13.9 4.5 13.6258C4.5 13.0512 4.9125 12.6072 5.475 12.6072C5.7375 12.6072 6 12.6986 6.175 12.8945L7.9625 14.6966L11.1625 18.4052L10.9875 15.8718L10.9875 3.54467C10.9875 2.93093 11.4125 2.5 12 2.5C12.5875 2.5 13.0125 2.93093 13.0125 3.54467L13.0125 15.8718L12.8375 18.4182L16.0375 14.6966L17.825 12.8945C18 12.6986 18.2625 12.6072 18.525 12.6072C19.0875 12.6072 19.5 13.0512 19.5 13.6258C19.5 13.9 19.4 14.1612 19.1875 14.3962L12.75 21.1344C12.5375 21.3694 12.275 21.5 12 21.5Z"
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
