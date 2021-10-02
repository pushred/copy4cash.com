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
    d="M2 11.875C2 11.6 2.13058 11.3375 2.36563 11.125L9.10378 4.6875C9.33883 4.475 9.6 4.375 9.87423 4.375C10.4488 4.375 10.8928 4.7875 10.8928 5.35C10.8928 5.6125 10.8014 5.875 10.6055 6.05L8.80344 7.8375L5.09484 11.0375L7.62818 10.8625H19.9553C20.5691 10.8625 21 11.2875 21 11.875C21 12.4625 20.5691 12.8875 19.9553 12.8875H7.62818L5.08179 12.7125L8.80344 15.9125L10.6055 17.7C10.8014 17.875 10.8928 18.1375 10.8928 18.4C10.8928 18.9625 10.4488 19.375 9.87423 19.375C9.6 19.375 9.33883 19.275 9.10378 19.0625L2.36563 12.625C2.13058 12.4125 2 12.15 2 11.875Z"
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
