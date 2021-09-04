<script>
  export let download
  export let href
  export let title
</script>

<a
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
