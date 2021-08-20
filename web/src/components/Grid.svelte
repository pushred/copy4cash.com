<script>
  export let cols = 12
</script>

<div class="grid" class:cols-2={cols === 2} class:cols-12={cols === 12}>
  <slot />
</div>

<style>
  .grid {
    width: 100%;
    display: grid;
    grid-gap: var(--space-grid-gap);
  }

  .cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }

  .cols-12 {
    grid-template-columns: repeat(12, 1fr);
  }
</style>
