<script>
  export let disabled
  export let title
</script>

<button
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
