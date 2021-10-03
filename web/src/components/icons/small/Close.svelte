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
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.2921 6.70656C4.90157 6.31603 4.90158 5.68287 5.2921 5.29234C5.68262 4.90182 6.31579 4.90182 6.70631 5.29234L12.0001 10.5861L17.2937 5.29244C17.6843 4.90192 18.3174 4.90192 18.708 5.29244C19.0985 5.68297 19.0985 6.31613 18.708 6.70665L13.4143 12.0003L18.7073 17.2933C19.0978 17.6839 19.0978 18.317 18.7073 18.7076C18.3168 19.0981 17.6836 19.0981 17.2931 18.7076L12.0001 13.4145L6.70699 18.7077C6.31646 19.0982 5.6833 19.0982 5.29277 18.7077C4.90225 18.3171 4.90225 17.684 5.29277 17.2934L10.5859 12.0003L5.2921 6.70656Z"
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
