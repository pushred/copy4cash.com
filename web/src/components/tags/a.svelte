<script>
  export let download
  export let href
  export let title

  let el = undefined

  export function getElement() {
    return el
  }
</script>

<a
  bind:this={el}
  {download}
  {href}
  {title}
  {...$$props}
  on:click
  on:blur
  on:focus
  on:mouseenter
  on:mouseleave
>
  <slot />
</a>
