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
    d="M15.8716 17.8336C14.5719 18.6962 13.0213 19.1 11.4659 18.981C9.91056 18.8621 8.43947 18.2271 7.28608 17.1768C6.13269 16.1265 5.36307 14.7212 5.09934 13.1837C4.8356 11.6463 5.09286 10.0648 5.83029 8.69015C6.56772 7.31554 7.74308 6.22657 9.16988 5.59603C10.5967 4.96548 12.1932 4.82947 13.7061 5.20959C15.219 5.5897 16.5616 6.46417 17.5209 7.69423C18.4803 8.92429 19.0013 10.4395 19.0014 11.9994C19.0014 13.6104 18.418 14.9164 16.9595 14.9164C15.501 14.9164 14.9176 13.6104 14.9176 11.9994V9.08238"
    stroke="#6A0BFF"
    stroke-width="1.16681"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M12.0006 14.9164C13.6116 14.9164 14.9176 13.6105 14.9176 11.9994C14.9176 10.3884 13.6116 9.0824 12.0006 9.0824C10.3896 9.0824 9.08356 10.3884 9.08356 11.9994C9.08356 13.6105 10.3896 14.9164 12.0006 14.9164Z"
    stroke="#6A0BFF"
    stroke-width="1.16681"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>

<style>
  svg {
    pointer-events: none;
  }
</style>
