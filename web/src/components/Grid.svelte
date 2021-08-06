<div class={$$props.class + ' grid'}>
  <slot />
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: var(--space-6);
  }
</style>
