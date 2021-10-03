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
    d="M2.88354 6H4.56171L5.42753 13.4961L6.32267 6H7.79487L8.66515 13.4959L9.53473 6H11.2127L9.56874 18H7.81505L7.05056 11.1034L6.22204 18H4.56499L2.88354 6ZM21.116 11.5581H19.625L20.3862 6H18.7083L18.0637 11.5581H17.615L16.9685 6H15.4963L14.8326 11.5581H14.3778L13.7353 6H12.0571L12.8359 11.5581H11.3283V12.8274H13.0144L13.7393 18H15.3959L16.017 12.8274H16.4158L16.9886 18H18.7426L19.451 12.8274H21.1165L21.116 11.5581ZM14.6011 13.4959L14.5239 12.8274H14.6809L14.6011 13.4959ZM16.1695 11.5581L16.2242 11.1034L16.2746 11.5581H16.1695ZM17.8387 13.4959L17.7611 12.8274H17.9164L17.8387 13.4959Z"
    fill="#6A0BFF"
  />
</svg>

<style>
  svg {
    pointer-events: none;
  }
</style>
