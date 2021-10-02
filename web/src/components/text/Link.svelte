<script>
  export let to = '#'

  const isExternal = to.startsWith('http')
</script>

{#if isExternal}
  <a href={to} rel="external" target="_blank">
    <slot />
  </a>
{:else}
  <a href={to}>
    <slot />
  </a>
{/if}

<style>
  a {
    color: var(--white);
    text-decoration: underline;
    text-decoration-color: rgba(255, 255, 255, 0.4);
    text-decoration-skip-ink: auto;
  }
</style>
