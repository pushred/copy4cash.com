<script>
  export let disabled
  export let title

  let el = undefined

  export function getElement() {
    return el
  }
</script>

<button
  bind:this={el}
  {disabled}
  {title}
  {...$$props}
  on:click
  on:blur
  on:focus
  on:mouseenter
  on:mouseleave
>
  <slot />
</button>
